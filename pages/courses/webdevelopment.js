import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function WebDevelopment() {
  return (
    <Box>
      <DefaultSeo  {...SEO}
        title="Web Development | Florintech computer college"
        description="learn web development at Florintech Computer College"
        canonical = 'https://www.florintechcomputercollege.com/webdevelopment/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/webdevelopment/",
          title: "Web Development | Florintech computer college",
          description: "learn web development at Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/webdevelopment.jpg",
              width: 800,
              height: 600,
              alt: "web development",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
       
      />
      <Header />
      <Singlecourse
        courseTitle="website Development"
        courseImage={courseImages.webdevelopment}
        aboutCourseText="Our Web Development program is meticulously designed to equip students with the skills and knowledge necessary to create professional and functional websites. Learn web development through our comprehensive curriculum, which covers a range of topics including HTML, CSS, JavaScript, and core web design principles. At Florintech Computer College Ojo, we believe in a hands-on approach to learning web development. Our experienced instructors provide practical exercises and real-world examples to ensure students gain practical skills that they can immediately apply in their careers. Whether you are looking to start a career as a web developer or enhance your existing skills, our Web Development program is the perfect choice."
        courseOutline={[
          "Introduction to Web Development.",
          "HTML Fundamentals",
          "CSS Fundamentals",
          "JavaScript Basics",
          "JavaScript Functions and DOM Manipulation.",
          "JavaScript Events and Event Handling",
          "HTML Forms and Input Validation",
          "CSS Layout Techniques",
          "CSS Flexbox and Grid",
          "Responsive Web Design",
          "JavaScript ES6 Features",
          "Asynchronous JavaScript (Promises and Async/Await)",
          "JavaScript Modules",
          "Browser Storage (LocalStorage and SessionStorage)",
          "AJAX and Fetch API",
          "JavaScript Debugging and Tools",
          "Introduction to content management system(CMS).",
        ]}
        coursePrice="70,000"
        courseDuration="4 months"
      />
    </Box>
  );
}

export default WebDevelopment;
