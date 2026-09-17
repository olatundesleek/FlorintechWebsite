const DEFAULT_GALLERY_API_URL =
  "https://admin.florintechcomputercollege.com/api/gallery.php";
const DEFAULT_GALLERY_CATEGORIES_API_URL =
  "https://admin.florintechcomputercollege.com/api/gallery_categories.php";

function toSafeArray(items) {
  return Array.isArray(items) ? items : [];
}

export function getPublishedGalleryItems(items = []) {
  return toSafeArray(items)
    .filter((item) => item && typeof item === "object" && item.published !== false)
    .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt));
}

function normalizeGalleryItem(item = {}) {
  const record = item && typeof item === "object" ? item : {};
  const category = record.category;
  const categoryName =
    typeof category === "string"
      ? category
      : category?.name || record.categoryName || "Uncategorized";

  return {
    ...record,
    id: String(record.id ?? `${categoryName}-${record.title ?? "gallery-item"}`),
    imageUrl: record.imageUrl || record.image_url || "",
    title: record.title || "",
    description: record.description || "",
    altText: record.altText || record.alt_text || record.title || categoryName,
    category: categoryName,
    categorySlug:
      category?.slug || record.categorySlug || slugifyGalleryCategory(categoryName),
    published: record.published !== false,
    createdAt: record.createdAt || record.created_at,
  };
}

export function getLatestPublishedGalleryItemsByCategory(items = []) {
  return getPublishedGalleryItems(items).reduce((latestByCategory, item) => {
    const categoryName = item?.category || "Uncategorized";
    const currentLatest = latestByCategory[categoryName];

    if (!currentLatest || new Date(item.createdAt) > new Date(currentLatest.createdAt)) {
      latestByCategory[categoryName] = item;
    }

    return latestByCategory;
  }, {});
}

export function getGalleryCategories(items = []) {
  return [
    "All",
    ...Array.from(
      new Set(
        getPublishedGalleryItems(items)
          .map((item) => item?.category)
          .filter((category) => category && category !== "All")
      )
    ),
  ];
}

export function getLatestGalleryItemsByCategory(items = [], categoryNames = [], limit = 4) {
  const latestByCategory = getLatestPublishedGalleryItemsByCategory(items);
  const validCategories = toSafeArray(categoryNames).filter(
    (category) => category && category !== "All"
  );

  const orderedCategories = validCategories.length
    ? validCategories
    : Object.keys(latestByCategory);

  const selectedCategories = orderedCategories.filter(
    (category) => latestByCategory[category]
  );

  return selectedCategories.slice(0, limit).map((category) => latestByCategory[category]);
}

export function slugifyGalleryCategory(category) {
  const normalizedCategory = typeof category === "string" ? category : String(category ?? "");

  return normalizedCategory
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getGalleryCategoryFromSlug(categories = [], slug) {
  if (!slug) return "All";

  const safeCategories = toSafeArray(categories).filter((category) => typeof category === "string");

  return (
    safeCategories.find((category) => slugifyGalleryCategory(category) === slug) ||
    "All"
  );
}

function getGalleryApiUrl({ page, limit, category, latest }) {
  const baseUrl =
    process.env.NEXT_PUBLIC_GALLERY_API_URL ||
    DEFAULT_GALLERY_API_URL;

  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (category && category !== "All") {
    params.set("category", slugifyGalleryCategory(category));
  }
  if (latest) {
    params.set("latest", "true");
  }

  return `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}${params.toString()}`;
}

function getGalleryCategoriesApiUrl() {
  return (
    process.env.NEXT_PUBLIC_GALLERY_CATEGORIES_API_URL ||
    DEFAULT_GALLERY_CATEGORIES_API_URL
  );
}

export async function getGalleryCategoriesFromApi() {
  const apiUrl = getGalleryCategoriesApiUrl();

  if (!apiUrl) {
    return ["All"];
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) return ["All"];

    const payload = await response.json();
    const categories = Array.isArray(payload)
      ? payload
      : toSafeArray(payload?.categories || payload?.data);
    const names = toSafeArray(categories)
      .map((category) => typeof category === "string" ? category : category?.name)
      .filter(Boolean);

    return ["All", ...Array.from(new Set(names))];
  } catch (error) {
    return ["All"];
  }
}

export async function getGalleryPage({ page = 1, limit = 24, category = "All", latest = false } = {}) {
  const apiUrl = getGalleryApiUrl({ page, limit, category, latest });

  if (!apiUrl) {
    return {
      items: [],
      page,
      limit,
      total: 0,
      hasMore: false,
      categories: ["All"],
    };
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) return { items: [], page, limit, total: 0, hasMore: false, categories: ["All"] };

    const payload = await response.json();
    const records = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.items)
        ? payload.items
        : Array.isArray(payload?.data)
          ? payload.data
          : Array.isArray(payload?.results)
            ? payload.results
            : [];
    const items = getPublishedGalleryItems(
      toSafeArray(records)
        .filter((record) => record && typeof record === "object")
        .map(normalizeGalleryItem)
    );
    const responseCategories = toSafeArray(payload?.categories);
    const categoryNames = responseCategories
      .map((categoryItem) => typeof categoryItem === "string" ? categoryItem : categoryItem?.name)
      .filter(Boolean);

    return {
      items,
      page: payload?.page || page,
      limit: payload?.limit || limit,
      total: payload?.total ?? items.length,
      hasMore: payload?.hasMore ?? items.length === limit,
      categories: categoryNames.length
        ? ["All", ...Array.from(new Set(categoryNames.filter((categoryItem) => categoryItem !== "All")))]
        : ["All"],
    };
  } catch (error) {
    return { items: [], page, limit, total: 0, hasMore: false, categories: ["All"] };
  }
}

export async function getGalleryItems() {
  const galleryPage = await getGalleryPage({ page: 1, limit: 100, latest: true });
  return galleryPage.items;
}