const mockGalleryItems = [
  {
    id: "gallery-008",
    imageUrl:
      "https://res.cloudinary.com/de0x1equu/image/upload/f_auto,q_auto,w_1400/v1758804840/Students_of_Florintech_Computer_School_in_Ojo_eo3qb2.webp",
    title: "Learning together at Florintech",
    description: "Students share a practical learning session at Florintech Computer College.",
    altText: "Florintech students gathered together during a practical computer training session",
    category: "Classroom Activities",
    published: true,
    createdAt: "2026-08-22T10:00:00.000Z",
  },
  {
    id: "gallery-007",
    imageUrl:
      "https://res.cloudinary.com/de0x1equu/image/upload/f_auto,q_auto,w_1400/v1725550399/Student_1_hhux1k-1_f4pjj6.webp",
    title: "Focused computer practice",
    description: "A learner builds confidence through hands-on computer practice.",
    altText: "Student practising computer skills at Florintech Computer College",
    category: "Computer Training",
    published: true,
    createdAt: "2026-07-18T10:00:00.000Z",
  },
  {
    id: "gallery-006",
    imageUrl: "/images/ComputerProgramming.jpg",
    title: "Coding and programming practice",
    description: "Students apply programming concepts in a practical learning environment.",
    altText: "Student programming during a coding and computer training class",
    category: "Coding & Programming",
    published: true,
    createdAt: "2026-06-30T10:00:00.000Z",
  },
  {
    id: "gallery-005",
    imageUrl:
      "https://res.cloudinary.com/de0x1equu/image/upload/f_auto,q_auto,w_1400/v1725550397/Student_1_hhux1k-2_l2ctb8.webp",
    title: "Developing digital skills",
    description: "Practical digital skills come to life in a guided classroom session.",
    altText: "Students learning digital skills during a guided Florintech training session",
    category: "Kids & Teen Training",
    published: true,
    createdAt: "2026-05-24T10:00:00.000Z",
  },
  {
    id: "gallery-004",
    imageUrl: "/images/webdevelopment.jpg",
    title: "Building student projects",
    description: "Learners turn new technical skills into practical projects.",
    altText: "Student project work from a practical web development class",
    category: "Student Projects",
    published: true,
    createdAt: "2026-04-16T10:00:00.000Z",
  },
  {
    id: "gallery-003",
    imageUrl:
      "https://res.cloudinary.com/de0x1equu/image/upload/f_auto,q_auto,w_1400/v1600773486/Student_1_hhux1k.webp",
    title: "From beginner to confident learner",
    description: "Supportive instruction helps every learner make steady progress.",
    altText: "Learner working attentively during a Florintech computer class",
    category: "Computer Training",
    published: true,
    createdAt: "2026-03-12T10:00:00.000Z",
  },
  {
    id: "gallery-002",
    imageUrl: "/images/CertifiedGraphicsProfessional.jpg",
    title: "Creative digital work",
    description: "Students explore creative tools as part of their digital training.",
    altText: "Creative computer work displayed during a Florintech graphics training session",
    category: "Graphics Design",
    published: true,
    createdAt: "2026-02-07T10:00:00.000Z",
  },
  {
    id: "gallery-001",
    imageUrl:
      "https://res.cloudinary.com/de0x1equu/image/upload/f_auto,q_auto,w_1400/v1600773441/student2ed_gl6tlj.webp",
    title: "A welcoming learning community",
    description: "Florintech creates a welcoming space for practical technology learning.",
    altText: "Student receiving support during a practical computer class at Florintech",
    category: "Events",
    published: true,
    createdAt: "2026-01-15T10:00:00.000Z",
  },
  {
    id: "gallery-draft",
    imageUrl: "/images/logo.png",
    title: "Unpublished gallery draft",
    description: "This item represents a future unpublished backend record.",
    altText: "",
    category: "Events",
    published: false,
    createdAt: "2026-09-01T10:00:00.000Z",
  },
];

const DEFAULT_GALLERY_API_URL =
  "https://admin.florintechcomputercollege.com/api/gallery.php";
const DEFAULT_GALLERY_CATEGORIES_API_URL =
  "https://admin.florintechcomputercollege.com/api/gallery_categories.php";

export function getPublishedGalleryItems(items) {
  return items
    .filter((item) => item.published !== false)
    .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt));
}

function normalizeGalleryItem(item) {
  const category = item.category;
  const categoryName =
    typeof category === "string"
      ? category
      : category?.name || item.categoryName || "Uncategorized";

  return {
    ...item,
    id: String(item.id),
    imageUrl: item.imageUrl || item.image_url,
    title: item.title || "",
    description: item.description || "",
    altText: item.altText || item.alt_text || item.title || categoryName,
    category: categoryName,
    categorySlug:
      category?.slug || item.categorySlug || slugifyGalleryCategory(categoryName),
    published: item.published !== false,
    createdAt: item.createdAt || item.created_at,
  };
}

export function getLatestPublishedGalleryItemsByCategory(items) {
  return getPublishedGalleryItems(items).reduce((latestByCategory, item) => {
    const currentLatest = latestByCategory[item.category];

    if (!currentLatest || new Date(item.createdAt) > new Date(currentLatest.createdAt)) {
      latestByCategory[item.category] = item;
    }

    return latestByCategory;
  }, {});
}

export function getGalleryCategories(items) {
  return [
    "All",
    ...Array.from(
      new Set(getPublishedGalleryItems(items).map((item) => item.category).filter(Boolean))
    ),
  ];
}

export function slugifyGalleryCategory(category) {
  return category
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getGalleryCategoryFromSlug(categories, slug) {
  if (!slug) return "All";

  return (
    categories.find((category) => slugifyGalleryCategory(category) === slug) ||
    "All"
  );
}

function getMockGalleryPage({ page = 1, limit = 24, category = "All" } = {}) {
  const filteredItems = getPublishedGalleryItems(mockGalleryItems).filter(
    (item) => category === "All" || item.category === category
  );
  const start = (page - 1) * limit;

  return {
    items: filteredItems.slice(start, start + limit),
    page,
    limit,
    total: filteredItems.length,
    hasMore: start + limit < filteredItems.length,
    categories: getGalleryCategories(mockGalleryItems),
  };
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

  if (!apiUrl) return getGalleryCategories(mockGalleryItems);

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Gallery categories request failed");

    const payload = await response.json();
    const categories = Array.isArray(payload)
      ? payload
      : payload?.categories || payload?.data || [];
    const names = categories
      .map((category) => typeof category === "string" ? category : category?.name)
      .filter(Boolean);

    return ["All", ...Array.from(new Set(names))];
  } catch (error) {
    if (process.env.NEXT_PUBLIC_USE_MOCK_GALLERY !== "false") {
      return getGalleryCategories(mockGalleryItems);
    }

    throw error;
  }
}

export async function getGalleryPage({ page = 1, limit = 24, category = "All", latest = false } = {}) {
  const apiUrl = getGalleryApiUrl({ page, limit, category, latest });

  if (!apiUrl) {
    return getMockGalleryPage({ page, limit, category });
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Gallery request failed");
    }

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
    const items = getPublishedGalleryItems(records.map(normalizeGalleryItem));
    const responseCategories = Array.isArray(payload?.categories)
      ? payload.categories
      : [];
    const categoryNames = responseCategories
      .map((category) => typeof category === "string" ? category : category?.name)
      .filter(Boolean);

    return {
      items,
      page: payload.page || page,
      limit: payload.limit || limit,
      total: payload.total ?? items.length,
      hasMore: payload.hasMore ?? items.length === limit,
      categories: categoryNames.length
        ? ["All", ...Array.from(new Set(categoryNames.filter((category) => category !== "All")))]
        : getGalleryCategories(items),
    };
  } catch (error) {
    if (process.env.NEXT_PUBLIC_USE_MOCK_GALLERY !== "false") {
      return getMockGalleryPage({ page, limit, category });
    }

    throw error;
  }
}

export async function getGalleryItems() {
  const galleryPage = await getGalleryPage({ page: 1, limit: 100, latest: true });
  return galleryPage.items;
}