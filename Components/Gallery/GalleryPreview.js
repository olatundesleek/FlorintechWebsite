import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Heading, Text } from "@chakra-ui/react";
import GalleryGrid from "./GalleryGrid";
import { slugifyGalleryCategory } from "../../lib/gallery";

function GalleryPreview({ items }) {
  const router = useRouter();
  const safeItems = Array.isArray(items) ? items : [];

  function openCategory(category) {
    if (!category) return;

    router.push({
      pathname: "/gallery/",
      query: { category: category.categorySlug || slugifyGalleryCategory(category.category || "") },
    });
  }

  return (
    <Box as="section" className="gallery-preview" aria-labelledby="gallery-preview-title">
      <Box className="gallery-section-heading">
        <Text className="gallery-eyebrow">Life at Florintech</Text>
        <Heading id="gallery-preview-title" as="h2">See Our Students in Action</Heading>
      </Box>
      <GalleryGrid items={safeItems} preview onPreviewItemClick={openCategory} />
      <Link href="/gallery/" className="gallery-view-button">View Full Gallery</Link>
    </Box>
  );
}

export default GalleryPreview;