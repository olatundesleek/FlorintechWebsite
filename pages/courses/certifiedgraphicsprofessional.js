import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";
import { Link } from "next/link";

function CertifiedGraphicsProfessional() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        canonical="https://www.florintechcomputercollege.com/courses/certifiedgraphicsprofessional/"
        title="Graphics Design Course in Ojo, Lagos | Florintech Computer College"
        description="Master Adobe Photoshop, Illustrator and CorelDRAW at Florintech Computer College in Ojo, Lagos. Become a certified graphics design professional. Enroll today."
        keywords="graphics course, certified graphics professional, graphic design course Ojo Lagos, computer school in Ojo, ICT training Lagos, learn Photoshop, learn Illustrator, CorelDRAW training, design course Nigeria, Florintech computer college"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/certifiedgraphicsprofessional/",
          title:
            "Certified Graphics Professional | Florintech computer college",
          description:
            "Our Certified Graphics Professional program is just one example of how we are helping individuals develop the skills and knowledge needed to succeed in today's competitive job marke.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/graphic-pic.jpg",
              width: 800,
              height: 600,
              alt: "certifiedgraphicsprofessional",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="Certified Graphics Professional"
        courseImage={courseImages.graphics}
        aboutCourseText="Graphic design is a skill that always pays—brands need logos, social media graphics, and stunning visuals or they disappear online. Our certified graphics professional course teaches you Adobe Photoshop, Illustrator, and CorelDRAW so you can create professional grade designs from day one.

You’ll start with design principles: color theory, typography, composition. Then master Photoshop for photo editing, Illustrator for logos and vectors, InDesign for layouts. You’ll create portfolio pieces—brand identities, posters, social media templates—that prove you can deliver results. By month three, you’re designing for real clients. By month four, you’re building your freelance business.

Graphic designers are needed across creative agencies, e commerce businesses, and startups. You’ll be ready to land freelance projects, work remotely for international brands, or join creative agencies as a professional designer."
        courseOutline={[
          "Introduction to Graphic Design Principles",
          "Colour Theory and Typography",
          "Layout and Composition Techniques",
          "Introduction to Adobe Photoshop",
          "Photo Editing and Image Manipulation in Photoshop",
          "Introduction to CorelDRAW",
          "Logo Design and Brand Identity Creation",
          "Flyer, Poster and Banner Design",
          "Introduction to Adobe Illustrator",
          "Vector Graphics and Illustration",
          "Introduction to Adobe InDesign",
          "Print and Digital Publication Design",
          "Social Media Graphics and Digital Content",
          "Portfolio Development and Presentation",
          "Introduction to Internet and Digital Publishing Essentials",
        ]}
        coursePrice="80,000"
        courseDuration="4 months"
        classType="Physical"
      />
    </Box>
  );
}

export default CertifiedGraphicsProfessional;
