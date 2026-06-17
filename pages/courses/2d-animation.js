import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function TwoDAnimation() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        title="2D Animation Course in Ojo, Lagos | Florintech Computer College"
        description="Master 2D animation in Ojo, Lagos. Learn character animation, frame-by-frame animation, and Adobe Animate. Professional animation training at Florintech."
        canonical="https://www.florintechcomputercollege.com/courses/2d-animation/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/2d-animation/",
          title: "2D Animation Course | Florintech Computer College",
          description: "Learn 2D animation and character animation at Florintech Computer College in Lagos",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/2danimation.jpg",
              width: 800,
              height: 600,
              alt: "2D Animation and Character Animation Course",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="2D Animation"
        courseImage={courseImages.twodanimation}
        aboutCourseText="Animation brings imagination to life. From animated explainer videos to character animations for games and films, 2D animators are in high demand. Our 2D animation course teaches you the art and craft of creating smooth, engaging animations that capture attention and tell stories.

You'll start with animation principles—timing, spacing, anticipation, and appeal—then learn frame-by-frame animation techniques. Master tools like Adobe Animate, Toon Boom, and Krita to create professional-quality animations. You'll build a portfolio of animated characters, short scenes, and explainer videos.

During the course, you'll create increasingly complex projects: simple shape animations, character walk cycles, lip-syncing, and full animated sequences. By month three, you'll be creating polished pieces that showcase your unique style and technical skills. Agencies, studios, and online creators across Africa desperately need skilled 2D animators."
        courseOutline={[
          "Introduction to Animation Principles",
          "Squash and Stretch",
          "Anticipation and Follow-Through",
          "Staging and Composition",
          "Timing and Spacing",
          "Arcs and Curves",
          "Character Design Fundamentals",
          "Model Sheet Creation",
          "Basic Drawing and Sketching",
          "Digital Drawing Basics",
          "Introduction to Adobe Animate",
          "Frame-by-Frame Animation",
          "Symbols and Instances",
          "Creating Character Rigs",
          "Walk Cycles and Movement",
          "Lip-Sync and Dialogue Animation",
          "Toon Boom Basics",
          "Advanced Character Animation",
          "Special Effects and Visual Effects",
          "Background Design and Creation",
          "Scene Composition",
          "Sound Design Integration",
          "Animatic Creation",
          "Explainer Video Animation",
          "Final Project: Complete Animated Short",
        ]}
        coursePrice="350,000"
        courseDuration="3 months"
        classType="Physical"
      />
    </Box>
  );
}

export default TwoDAnimation;
