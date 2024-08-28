import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function DigitalMarketing  () {
  return (
    <div>
      <Box>
        <DefaultSeo {...SEO}
          title="Digital Marketing | Florintech computer college"
          canonical="https://www.florintechcomputercollege.com/courses/digitalmarketing/"
          description=" At Florintech Computer College, we offer a wide range of courses that cover all the major office applications."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/digitalmarketing/",
            title: " Digital Marketing | Florintech computer college",
            description:
              " At Florintech Computer College, we offer a wide range of courses that cover all the major office applications.",
            images: [
              {
                url: "https://www.florintechcomputercollege.com/images/dg.jpg",
                width: 800,
                height: 600,
                alt: "digitalmarketing",
                type: "image/jpeg",
              },
            ],
            siteName: "Florintech Computer College",
          }}
          
        />
        <Header />
        <Singlecourse
          courseTitle="Digital Marketing"
         
          courseImage={courseImages.digitalmedia}
          aboutCourseText="This course is designed for individuals who want to gain practical skills and knowledge in the field of digital media and marketing. It is suitable for marketing professionals, entrepreneurs, small business owners, and anyone interested in understanding and utilizing digital marketing strategies effectively."
     
          courseOutline={[
            "introduction to internet Essential",
            "content/keyword marketing",
            "introduction to online marketing",
            "search Engine optimization",
          ]}
        
          courseDuration="6 weeks"
          coursePrice="35,000"
        />
      </Box>
    </div>
  );
};

export default DigitalMarketing;
