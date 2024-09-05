import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function desktoppublishing() {
  return (
    <Box>
      <DefaultSeo   {...SEO}
      canonical="https://www.florintechcomputercollege.com/courses/desktoppublishing/"
        title="Desktop Publishing| Florintech computer college"
        description="At Florintech Computer College, we offer comprehensive courses on desktop publishing that cover everything from basic concepts to advanced techniques. Our courses are designed to teach students how to use desktop publishing software to create professional documents with ease and efficiency. We provide hands-on training using the latest software tools and techniques, so you can gain practical experience in the field."
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/desktoppublishing/",
          title: "Desktop Publishing | Florintech computer college",
          description:
            " At Florintech Computer College, we offer comprehensive courses on desktop publishing that cover everything from basic concepts to advanced techniques. Our courses are designed to teach students how to use desktop publishing software to create professional documents with ease and efficiency. We provide hands-on training using the latest software tools and techniques, so you can gain practical experience in the field.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/DesktopPublishing.jpg",
              width: 800,
              height: 600,
              alt: "DesktopPublishing",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
       
      />
      <Header />
      <Singlecourse
        courseTitle=" Desktop Publishing"
        courseImage={courseImages.desktoppublishing}
        aboutCourseText="Learn Desktop Publishing at Florintech Computer College Ojo,

        a leading computer school in Lagos, we offer comprehensive courses on desktop publishing that cover everything from basic concepts to advanced techniques. Our courses are designed to teach students how to use desktop publishing software to create professional documents with ease and efficiency.
        
        We provide hands-on training using the latest software tools and techniques, so you can gain practical experience in the field. Our instructors are experienced professionals with years of experience in the desktop publishing industry. They provide expert guidance and support to ensure that you get the most out of your training.
        
        Our desktop publishing courses cover a range of topics, including typography/word processing, layout design, image manipulation, and printing techniques. You will learn how to use industry-standard software like corel-draw and Photoshop to create professional-grade documents ready for print or digital distribution."
        courseOutline={[
          "Computer Fundamentals and information tech",
          "Typing Tutor",
          "Word Pad",
          "MS Paint",
          "Ms Word",
          "Ms Excel",
          "Adobe Page Maker / Ms Publisher",
          "Corel Draw",
          "Ms PowerPoint",
          "Internet Essentials",
        ]}
        coursePrice="45,000"
        courseDuration="3 months"
         classType="Physical"
      />
    </Box>
  );
}

export default desktoppublishing;
