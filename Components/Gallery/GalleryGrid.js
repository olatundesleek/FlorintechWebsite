import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { getGalleryCategories } from "../../lib/gallery";

function GallerySkeleton() {
  return (
    <SimpleGrid className="gallery-grid" columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 5, md: 7 }}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Box key={index} className="gallery-skeleton-card" aria-hidden="true">
          <Box className="gallery-skeleton-image" />
          <Box className="gallery-skeleton-content">
            <Box className="gallery-skeleton-line gallery-skeleton-line-short" />
            <Box className="gallery-skeleton-line" />
            <Box className="gallery-skeleton-line gallery-skeleton-line-medium" />
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
}

function formatGalleryDate(createdAt) {
  if (!createdAt) return "";

  return new Intl.DateTimeFormat("en-NG", {
    month: "short",
    year: "numeric",
  }).format(new Date(createdAt));
}

function GalleryLightbox({ items, activeIndex, onClose, onChange }) {
  const closeButtonRef = useRef(null);
  const previouslyFocusedElement = useRef(null);
  const touchStartX = useRef(null);
  const activeIndexRef = useRef(activeIndex);
  const onCloseRef = useRef(onClose);
  const onChangeRef = useRef(onChange);

  activeIndexRef.current = activeIndex;
  onCloseRef.current = onClose;
  onChangeRef.current = onChange;

  useEffect(() => {
    previouslyFocusedElement.current = document.activeElement;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") onCloseRef.current();
      if (event.key === "ArrowLeft") onChangeRef.current(activeIndexRef.current - 1);
      if (event.key === "ArrowRight") onChangeRef.current(activeIndexRef.current + 1);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocusedElement.current?.focus?.();
    };
  }, []);

  const item = items[activeIndex];
  const hasPrevious = activeIndex > 0;
  const hasNext = activeIndex < items.length - 1;

  if (!item) return null;

  function handleTouchStart(event) {
    touchStartX.current = event.changedTouches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 50) {
      onChange(activeIndex + (distance < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  }

  return (
    <Box
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Gallery photo viewer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="gallery-lightbox-backdrop" type="button" onClick={onClose} aria-label="Close photo viewer" />
      <Box className="gallery-lightbox-panel">
        <Button ref={closeButtonRef} className="gallery-lightbox-close" type="button" onClick={onClose} aria-label="Close photo viewer">
          Close
        </Button>
        <Button className="gallery-lightbox-previous" type="button" onClick={() => onChange(activeIndex - 1)} disabled={!hasPrevious} aria-label="Previous photo">
          &lsaquo;
        </Button>
        <Box className="gallery-lightbox-image">
          <Image
            src={item.imageUrl}
            alt={item.altText}
            fill
            sizes="100vw"
            quality={85}
            priority
            className="gallery-lightbox-image-content"
          />
        </Box>
        <Button className="gallery-lightbox-next" type="button" onClick={() => onChange(activeIndex + 1)} disabled={!hasNext} aria-label="Next photo">
          &rsaquo;
        </Button>
        <Box className="gallery-lightbox-caption">
          <Text className="gallery-card-category">{item.category}</Text>
          {item.title && <Text as="h2">{item.title}</Text>}
          {item.description && <Text>{item.description}</Text>}
        </Box>
      </Box>
    </Box>
  );
}

function GalleryGrid({
  items = [],
  preview = false,
  onPreviewItemClick,
  categories,
  selectedCategory = "All",
  onCategoryChange,
  loading = false,
  error = "",
  onRetry,
  hasMore = false,
  onLoadMore,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeItems, setActiveItems] = useState([]);
  const displayItems = preview ? items.slice(0, 8) : items;
  const filterCategories = categories || getGalleryCategories(items);

  function openGalleryItem(item, itemIndex) {
    if (preview) {
      onPreviewItemClick?.(item);
      return;
    }

    const modalItems = selectedCategory === "All"
      ? displayItems
      : displayItems.filter((galleryItem) =>
          galleryItem.categorySlug
            ? galleryItem.categorySlug === item.categorySlug
            : galleryItem.category === item.category
        );
    const modalIndex = modalItems.findIndex(
      (galleryItem) => galleryItem.id === item.id
    );

    setActiveItems(modalItems.length ? modalItems : [item]);
    setActiveIndex(modalIndex >= 0 ? modalIndex : 0);
  }

  if (loading && displayItems.length === 0) {
    return <GallerySkeleton />;
  }

  return (
    <Box className="gallery-grid-wrapper" aria-busy={loading}>
      {!preview && (
        <Box className="gallery-filters" role="navigation" aria-label="Filter gallery by category">
          {filterCategories.map((category) => (
            <Button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={selectedCategory === category ? "is-active" : ""}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </Button>
          ))}
        </Box>
      )}

      {error ? (
        <Box className="gallery-feedback gallery-error" role="alert">
          <Text>We could not load the gallery right now. Please try again.</Text>
          <Button type="button" onClick={onRetry}>Try again</Button>
        </Box>
      ) : displayItems.length > 0 ? (
        <SimpleGrid className="gallery-grid" columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 5, md: 7 }}>
          {displayItems.map((item, index) => (
            <button key={item.id} className="gallery-card" type="button" onClick={() => openGalleryItem(item, index)} aria-label={`Open ${item.title || item.category} photo`}>
              <Box as="span" className="gallery-card-image">
                <Image
                  src={item.imageUrl}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <Box as="span" className="gallery-card-overlay">
                  <Text as="span">{item.title || item.category}</Text>
                  <Text as="span">{item.category}</Text>
                </Box>
              </Box>
              <Box as="span" className="gallery-card-content">
                <Text as="span" className="gallery-card-category">{item.category}</Text>
                {item.title && <Text as="span" className="gallery-card-title">{item.title}</Text>}
                <Text as="span" className="gallery-card-date">{formatGalleryDate(item.createdAt)}</Text>
              </Box>
            </button>
          ))}
        </SimpleGrid>
      ) : (
        <Box className="gallery-feedback gallery-empty">
          <Text as="h2">No photos available in this category yet.</Text>
          <Text>New moments from practical training will appear here.</Text>
        </Box>
      )}

      {!preview && hasMore && !error && (
        <Button className="gallery-load-more" type="button" onClick={onLoadMore} isLoading={loading} loadingText="Loading photos">
          Load More
        </Button>
      )}

      {activeIndex !== null && (
        <GalleryLightbox
          items={activeItems}
          activeIndex={activeIndex}
          onClose={() => {
            setActiveIndex(null);
            setActiveItems([]);
          }}
          onChange={(nextIndex) => {
            if (nextIndex >= 0 && nextIndex < activeItems.length) setActiveIndex(nextIndex);
          }}
        />
      )}
    </Box>
  );
}

export default GalleryGrid;