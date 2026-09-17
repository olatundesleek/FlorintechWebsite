import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import GalleryGrid from "../Components/Gallery/GalleryGrid";
import SEO from "../next-seo.config";
import {
  getGalleryCategoryFromSlug,
  getGalleryCategoriesFromApi,
  getGalleryPage,
  slugifyGalleryCategory,
} from "../lib/gallery";

const PAGE_SIZE = 24;

export default function Gallery({ initialPage }) {
  const router = useRouter();
  const safeInitialPage = initialPage || { items: [], categories: ["All"], page: 1, hasMore: false };
  const [items, setItems] = useState(safeInitialPage.items || []);
  const [categories, setCategories] = useState(safeInitialPage.categories || ["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(safeInitialPage.page || 1);
  const [hasMore, setHasMore] = useState(Boolean(safeInitialPage.hasMore));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);
  const requestId = useRef(0);

  useEffect(() => {
    let isMounted = true;

    getGalleryCategoriesFromApi()
      .then((nextCategories) => {
        if (!isMounted) return;
        setCategories(nextCategories);
        setCategoriesLoaded(true);
      })
      .catch(() => {
        if (!isMounted) return;
        setError("gallery");
        setCategoriesLoaded(true);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!router.isReady || !categoriesLoaded) return;

    const categorySlug = Array.isArray(router.query.category)
      ? router.query.category[0]
      : router.query.category;
    const category = getGalleryCategoryFromSlug(categories, categorySlug);

    if (categorySlug && slugifyGalleryCategory(category) !== categorySlug) {
      router.replace({ pathname: "/gallery/", query: {} }, undefined, {
        shallow: true,
      });
    }

    if (category !== selectedCategory || items.length === 0) {
      loadCategory(category, false);
    }
  }, [router.isReady, router.query.category, categoriesLoaded, categories, items.length]);

  async function loadCategory(category, updateUrl = true) {
    const currentRequest = requestId.current + 1;
    requestId.current = currentRequest;
    setSelectedCategory(category);
    setLoading(true);
    setError("");

    if (updateUrl) {
      router.push(
        {
          pathname: "/gallery/",
          query: category === "All" ? {} : { category: slugifyGalleryCategory(category) },
        },
        undefined,
        { shallow: true }
      );
    }

    try {
      const result = await getGalleryPage({
        page: 1,
        limit: PAGE_SIZE,
        category,
      });
      if (requestId.current !== currentRequest) return;
      setItems(result.items);
      setPage(result.page);
      setHasMore(result.hasMore);
    } catch (requestError) {
      if (requestId.current === currentRequest) setError("gallery");
    } finally {
      if (requestId.current === currentRequest) setLoading(false);
    }
  }

  async function loadMore() {
    const nextPage = page + 1;
    setLoading(true);
    setError("");

    try {
      const result = await getGalleryPage({
        page: nextPage,
        limit: PAGE_SIZE,
        category: selectedCategory,
      });
      setItems((currentItems) => [...currentItems, ...result.items]);
      setPage(result.page);
      setHasMore(result.hasMore);
    } catch (requestError) {
      setError("gallery");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box className="gallery-page">
      <DefaultSeo
        {...SEO}
        title="Computer Training Gallery in Ojo, Lagos | Florintech Computer College"
        description="Explore classroom activities, student projects and practical computer training at Florintech Computer College in Ojo, Lagos."
        canonical="https://www.florintechcomputercollege.com/gallery/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/gallery/",
          title: "Life at Florintech | Florintech Computer College",
          description: "See students learning, practising and developing practical digital skills at Florintech Computer College.",
          siteName: "Florintech Computer College",
        }}
      />
      <Head>
        <meta name="description" content="Explore classroom activities, student projects and practical computer training at Florintech Computer College in Ojo, Lagos." />
      </Head>
      <Header />
      <main>
        <Box className="gallery-hero">
          <Box className="gallery-hero-inner">
            <Text className="gallery-eyebrow">Florintech Computer College</Text>
            <Heading as="h1">Life at Florintech</Heading>
            <Text>See our students in action, explore our learning environment, and experience the practical side of ICT training at Florintech Computer College.</Text>
          </Box>
        </Box>
        <Box className="gallery-page-content">
          <Box className="gallery-page-heading">
            <Text className="gallery-eyebrow">Inside the learning experience</Text>
            <Heading as="h2">Students in action</Heading>
            <Text>Browse the latest moments from our classrooms, projects and events.</Text>
          </Box>
          <GalleryGrid
            items={items}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={loadCategory}
            loading={loading}
            error={error}
            onRetry={() => loadCategory(selectedCategory)}
            hasMore={hasMore}
            onLoadMore={loadMore}
          />
        </Box>
      </main>
      <Footer />
    </Box>
  );
}

export async function getStaticProps() {
  try {
    const [initialPage, categories] = await Promise.all([
      getGalleryPage({ page: 1, limit: PAGE_SIZE }),
      getGalleryCategoriesFromApi(),
    ]);

    return {
      props: {
        initialPage: {
          ...initialPage,
          categories,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        initialPage: {
          items: [],
          page: 1,
          limit: PAGE_SIZE,
          total: 0,
          hasMore: false,
          categories: ["All"],
        },
      },
    };
  }
}