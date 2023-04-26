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
      <DefaultSeo
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
        {...SEO}
      />
      <Header />
      <Singlecourse
        courseTitle=" Desktop Publishing"
        courseImage={courseImages.advanceddesktoppublishing}
        aboutCourseText="Welcome to Florintech Computer College's page on desktop publishing! In today's world, creating professional-looking documents is an essential skill for businesses and individuals alike. Whether you're designing a brochure, creating a newsletter, or publishing a book, desktop publishing is the key to producing polished, visually appealing documents.

At Florintech Computer College, we offer comprehensive courses on desktop publishing that cover everything from basic concepts to advanced techniques. Our courses are designed to teach students how to use desktop publishing software to create professional documents with ease and efficiency. We provide hands-on training using the latest software tools and techniques, so you can gain practical experience in the field.

Our instructors are experienced professionals with years of experience in the desktop publishing industry. They provide expert guidance and support to ensure that you get the most out of your training. We also provide a comfortable learning environment, with fully equipped computer labs and small class sizes, so you can get personalized attention and support.

Our desktop publishing courses cover a range of topics, including typography, layout design, image manipulation, and printing techniques. We teach you how to use industry-standard software like Adobe InDesign, Illustrator, and Photoshop, so you can create professional-grade documents that are ready for print or digital distribution.

Whether you're looking to start a new career in desktop publishing, or just want to improve your skills for personal or business use, Florintech Computer College has the training you need. Our courses are flexible and affordable, with options for both in-person and online learning. We also offer customized training programs for businesses and organizations, tailored to your specific needs and goals.

In conclusion, desktop publishing is an essential skill for anyone looking to create professional documents in today's digital age. At Florintech Computer College, we provide the training and support you need to master this skill and take your career to the next level. Contact us today to learn more about our desktop publishing courses and start your journey!."
        courseOutline={[
          "Computer Fundamentals and information tech",
          "Typing Tutor",
          "Word Pad",
          "MS Paint",
          "Ms Word",
          "Ms Excel",
          "Ms PowerPoint",
          "Internet Essentials",
        ]}
        coursePrice="30,000"
        courseDuration="3 months"
      />
    </Box>
  );
}

export default desktoppublishing;
