import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function DigitalMediaAndWebDevelopnment() {
  return (
    <Box>
      <Header />
      <Singlecourse
        courseTitle=" Digital Media And Web Development"
        courseImage={courseImages.webdevelopment}
        aboutCourseText=" Welcome to Florintech Computer College's page on digital media and web development!

At Florintech Computer College, we understand the importance of staying up-to-date with the latest trends and advancements in technology. That's why we offer a comprehensive range of courses in digital media and web development, designed to equip you with the skills and knowledge you need to succeed in this ever-evolving field.

Digital media is a term that encompasses a wide range of digital technologies, including social media, mobile applications, digital advertising, and more. Our courses cover a variety of topics related to digital media, including social media marketing, digital branding, and content creation.

In addition to digital media, we also offer courses in web development. With more and more businesses relying on their online presence to reach customers, web development is a rapidly growing field. Our courses cover a variety of web development languages and technologies, including HTML, CSS, JavaScript, and more.

Whether you're looking to start a career in digital media or web development, or simply looking to enhance your skills, Florintech Computer College has the courses you need. Our experienced instructors are dedicated to helping you achieve your goals and succeed in this exciting and dynamic field.

We offer a range of programs and courses to suit your needs, including flexible scheduling options to fit your busy lifestyle. With our state-of-the-art facilities and hands-on approach to learning, you'll be equipped with the skills and knowledge you need to succeed in today's digital world.

So if you're ready to take your career to the next level, or simply want to learn more about digital media and web development, contact Florintech Computer College today to learn more about our programs and courses. We look forward to helping you achieve your goals!"
        courseDuration="4 months"
        coursePrice="70,000"
        courseOutline={[
          "All courses in diploma in digital media",
          "All courses in web development",
        ]}
      />
    </Box>
  );
}

export default DigitalMediaAndWebDevelopnment;
