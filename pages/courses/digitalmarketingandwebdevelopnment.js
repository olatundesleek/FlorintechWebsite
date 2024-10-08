import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function digitalmediaandwebdevelopnment() {
  return (
    <Box>
      <DefaultSeo {...SEO}
      canonical="https://www.florintechcomputercollege.com/courses/digitalmediaandwebdevelopnment/"
        title="Digital Media And Web Developnment | Florintech computer college"
        description="At Florintech Computer College, we understand the importance of staying up-to-date with the latest trends and advancements in technology. That's why we offer a comprehensive range of courses in digital media and web development, designed to equip you with the skills and knowledge you need to succeed in this ever-evolving field"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/digitalmediaandwebdevelopnment/",
          title:
            "Digital Media And WebDevelopnment | Florintech computer college",
          description:
            " At Florintech Computer College, we understand the importance of staying up-to-date with the latest trends and advancements in technology. That's why we offer a comprehensive range of courses in digital media and web development, designed to equip you with the skills and knowledge you need to succeed in this ever-evolving field.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/digitalandwebdev2.jpg",
              width: 800,
              height: 600,
              alt: "digitalandwebdevelopnment",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
        
      />
      <Header />
      <Singlecourse
        courseTitle=" Digital Media And Web Development"
        courseImage={courseImages.digitalandwebdev2}
        aboutCourseText="Digital media encompasses a wide range of digital technologies, including social media, mobile applications, digital advertising, and more. At Florintech Computer College, a leading computer school in Lagos, our courses cover various topics related to digital media, such as social media marketing, digital branding, and content creation. In addition to digital media, we also offer comprehensive courses in web development.

        With more businesses relying on their online presence to reach customers, web development is a rapidly growing field. Our courses cover a variety of web development languages and technologies, including HTML, CSS, JavaScript, and more. Whether you're looking to start a career in digital media or web development, or simply looking to enhance your skills, Florintech Computer College has the courses you need.
        
        Our experienced instructors are dedicated to helping you achieve your goals and succeed in this exciting and dynamic field. We offer a range of programs and courses to suit your needs, including flexible scheduling options to fit your busy lifestyle. With our state-of-the-art facilities and hands-on approach to learning, you'll be equipped with the skills and knowledge you need to succeed in today's digital world.
        
        So, if you're ready to take your career to the next level or simply want to learn digital marketing and web development, contact Florintech Computer College today. Discover how our programs and courses can help you achieve your goals. We look forward to helping you succeed"
        courseOutline={[
          "All courses in diploma in digital media",
          "All courses in web development",
        ]}
        coursePrice="150,000"
        courseDuration="5 months"
        classType="Physical"
      />
    </Box>
  );
}

export default digitalmediaandwebdevelopnment;
