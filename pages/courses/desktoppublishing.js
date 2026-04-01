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
        title="Desktop Publishing Course in Ojo, Lagos | Florintech Computer College"
        description="Learn desktop publishing software and techniques at Florintech, a leading computer school in Ojo, Lagos. Practical, hands-on ICT training. Register now."
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
        aboutCourseText="Desktop publishing skills are essential for creating polished documents, flyers, brochures, and marketing materials that stand out. Our desktop publishing course teaches you to transform basic ideas into publication ready designs using industry tools like CorelDRAW, Photoshop, and Microsoft Publisher.

You'll start with typography and layout fundamentals, then master software tools one by one. You'll learn image editing, color theory, and print preparation. By week two, you're creating professional flyers. By week six, you can design brochures, newsletters, and business materials.

This skill is in constant demand—marketing agencies, print houses, and small businesses all need desktop publishing professionals. You can take freelance projects designing book covers, menus, and marketing collateral. You'll be ready to work as an in house designer, take remote freelance projects, or freelance to local businesses and agencies."
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
        coursePrice="60,000"
        courseDuration="3 months"
         classType="Physical"
      />
    </Box>
  );
}

export default desktoppublishing;
