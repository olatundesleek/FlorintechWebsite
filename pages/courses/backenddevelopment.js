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
      <DefaultSeo
        {...SEO}
        title="Backend Development with Node.js Course in Lagos | Florintech"
        description="Learn backend development with Node.js at Florintech Computer College in Ojo, Lagos. Practical training for aspiring backend developers. Register now."
        canonical="https://www.florintechcomputercollege.com/courses/backenddevelopment/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/backenddevelopment/",
          title: "Back-End Development | Florintech computer college",
          description:
            "Learn Back-End Development at Florintech Computer College",
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
        aboutCourseText="Every website needs a backend—the invisible engine that stores data, processes payments, and powers everything users see. Node.js dominates backend development because it's fast, scalable, and built on JavaScript. Our backend development with Node.js course teaches you to become a backend specialist who builds the APIs that power modern applications.

You'll start with Node.js fundamentals, then build production-grade REST APIs using Express.js. You'll master databases (SQL and MongoDB), authentication, real-time features with WebSockets, and deployment. By month three, you've built a full social media backend from scratch. By month four, you understand caching, performance optimization, and security like a professional.

Nigeria's fintech and tech companies desperately need backend developers. You'll be job-ready for remote contracts, corporate roles, or architecting systems for startups and growing businesses."
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
          "Final Project Development and Presentation",
        ]}
        coursePrice="400,000"
        courseDuration="4 months"
        classType="Physical"
      />
    </Box>
  );
}

export default BackendDevelopment;
