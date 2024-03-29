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
        aboutCourseText="Welcome to Florintech Computer College's Web Development program!
        In today's digital age, having a website has become a necessity for businesses and individuals alike. A website not only allows you to reach a wider audience, but it also helps establish credibility and trust with potential customers.
        
        Our Web Development program is designed to equip students with the skills and knowledge necessary to create professional and functional websites. We cover a wide range of topics, including HTML, CSS, JavaScript, and web design principles.
        
        At Florintech Computer College, we believe in a hands-on approach to learning. Our experienced instructors provide practical exercises and real-world examples to ensure that students gain practical skills that they can apply in their careers.
        
        Whether you are interested in starting a career as a web developer or want to enhance your existing skills, our Web Development program is the perfect choice. Join us today and take the first step towards building your own website or developing websites for others.
        
        Don't miss this opportunity! Register now to start your journey in the exciting world of web development. We offer flexible class schedules to accommodate your busy lifestyle.
        
        Enroll now and start building your future in web development with Florintech Computer College!"
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
        coursePrice="#60,000"
        courseDuration="4 months"
      />
    </Box>
  );
}

export default WebDevelopment;
