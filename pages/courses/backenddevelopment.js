import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function BackendDevelopment() {
  return (
    <Box>
      <DefaultSeo  {...SEO}
        title="Back-End Development | Florintech computer college"
        description="learn Back-End Development with Node Js at Florintech Computer College"
        canonical = 'https://www.florintechcomputercollege.com/webdevelopment/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/backendwebdevelopment/",
          title: "Back-End Development | Florintech computer college",
          description: "Learn Back-End Development at Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/nodejs.png",
              width: 800,
              height: 600,
              alt: "Back-End development with Node Js",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
       
      />
      <Header />
      <Singlecourse
        courseTitle="Back-End Development with Node Js"
        courseImage={courseImages.nodejs}
        aboutCourseText="Our Backend Development with Node.js course is designed to equip you with the skills and knowledge needed to become a proficient backend developer.

        In today's digital landscape, a robust and efficient backend is crucial for delivering high-quality applications. Node.js, with its asynchronous, event-driven architecture, has become the go-to choice for building scalable and real-time backend systems.
        
        This 6-month intensive course takes you on a comprehensive journey through the core concepts of backend development. Whether you're a beginner or an experienced developer looking to expand your skill set, our curriculum is carefully structured to accommodate all levels of expertise."
        courseOutline={[
          "Introduction to Backend Development and Node.js Basics",
          "Introduction to Node.js Modules and NPM",
          "Building a Simple HTTP Server",
          "Express.js and RESTful APIs",
          "Building RESTful APIs with Express.js",
          "Express Middleware",
          "Testing and Debugging",
          "Databases and Data Modeling",
          "SQL and Relational Databases",
          "Data Validation and Security",
          "Authentication and Authorization",
          "Authorization and Access Control",
          "OAuth and Social Authentication",
          "Advanced Topics",
          "File Upload and Storage",
          "Real-Time Applications with WebSockets",
          "API Documentation and Testing",
          "Performance Optimization",
          "Deployment Strategies",
          "Final Project Development and Presentation"
        ]}
        coursePrice="250,000"
        courseDuration="4 months"
        classType="Physical"
      />
    </Box>
  );
}

export default BackendDevelopment;
