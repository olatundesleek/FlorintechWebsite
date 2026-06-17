import { Box } from "@chakra-ui/react";
import React from "react";
import { courseImages } from "../../Components/images";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function AdvancedDesktopDublishing() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        canonical="https://www.florintechcomputercollege.com/courses/advanced-desktop-publishing/"
        title="Advanced Desktop Publishing Course in Lagos | Florintech Computer College"
        description="Take your desktop publishing skills to the next level at Florintech, Ojo Lagos. Covers Adobe InDesign, Illustrator and Photoshop. Enroll today."
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/advanced-desktop-publishing/",
          title: "Advanced DeskTop Publishing| Florintech computer college",
          description:
            "Learn desktop publishing at Florintech Computer College. Master tools like Corel Draw, Photoshop, and Microsoft Office. Create professional documents with hands-on training.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/advanceddesktoppublishing.jpg",
              width: 800,
              height: 600,
              alt: "advancedDeskTopPublishing",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="Advanced Desktop Publishing"
        courseImage={courseImages.advanceddesktoppublishing}
        aboutCourseText="If you already know the basics, our advanced desktop publishing course takes you to professional level expertise in Adobe InDesign, Photoshop, and Illustrator. You'll create the designs that brands use across campaigns—complex layouts, cutting edge visuals, and multi page publications.

This course assumes you know fundamentals and teaches you advanced techniques: color correction and retouching in Photoshop, vector design and branding in Illustrator, professional book and magazine layouts in InDesign. You'll handle client projects with tight deadlines and high standards. You'll optimize files for print and digital, manage professional workflows, and build designs that actually sell.

Design professionals with these skills work with major brands and studios. You'll be ready to lead design projects, manage junior designers, work on high end brands, or take lucrative freelance contracts from local and international clients."
        courseOutline={[
          "All Courses in Desktop Publishing",
          "Powerpoint",
          "Adobe Photoshop",
        ]}
        coursePrice="70,000"
        courseDuration="3 months"
        classType="Physical"
      />
    </Box>
  );
}

export default AdvancedDesktopDublishing;
