import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function FullStackWebDevelopment() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        title="Full-Stack Web Development Course in Ojo, Lagos | Florintech"
        description="Become a full-stack web developer at Florintech Computer College, Ojo Lagos. Covers frontend, backend, and industry best practices. Enroll today."
        canonical="https://www.florintechcomputercollege.com/courses/full-stack-web-development/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/full-stack-web-development/",
          title: "Web Development | Florintech computer college",
          description: "learn web development at Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/fullstack.jpg",
              width: 800,
              height: 600,
              alt: "Full-Stack web development (MERN STACK)",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="Full-Stack website Development"
        courseImage={courseImages.fullstack}
        aboutCourseText="Full stack developers are unicorns—they can build any feature, from frontend to database, making them invaluable to startups and valuable to enterprises. Our full stack web development course teaches you the MERN stack (MongoDB, Express, React, Node), the same technology used by fast growing tech companies across Africa.

You'll start with frontend fundamentals, then move to React state management and routing. Next, Node.js and Express for backend APIs. Then you'll connect everything—frontend talking to database through your APIs. By month four, you're deploying full applications to production. You'll build projects like marketplace apps, task managers, and real time chat systems.

Full stack developers are in high demand across tech companies and startups. You'll qualify for positions at tech companies, work on remote contracts, or founding your own SaaS product. You'll have all the skills to bring any web application idea to life."
        courseOutline={[
          "Introduction to Web Development",
          "Understanding the web development ecosystem",
          "Introduction to front-end and back-end development",
          "Setting up your development environment",
          "Introduction to MERN Stack",
          "Overview of MongoDB, Express.js, React.js, Node.js",
          "Setting up a basic MERN project",
          "Building a simple CRUD application",
          "React.js Fundamentals",
          "Components, props, and state",
          "JSX and rendering",
          "Handling events and forms",
          "Advanced React.js",
          "React Router for client-side routing",
          "State management with Redux",
          "Consuming APIs with Axios",
          "Back-End Development with Node.js and Express.js",
          "Node.js Fundamentals",
          "Introduction to Node.js",
          "Building RESTful APIs with Express.js",
          "Middleware and routing",
          "Data Persistence with MongoDB",
          "Introduction to MongoDB",
          "Mongoose ORM for MongoDB",
          "Creating, reading, updating, and deleting data",
          "Full-Stack Integration",
          "Connecting Front-End and Back-End",
          "Building a full-stack MERN application",
          "Handling user authentication and authorization",
          "User registration and login functionality",
          "Testing and Debugging",
          "Debugging techniques",
          "Unit and integration testing with Jest and Supertest",
          "Error handling and validation",
          "Advanced Front-End Topics",
          "Advanced Front-End Topics",
          "Real-time web applications with WebSockets",
          "Responsive design and mobile optimization",
          "Performance optimization and lazy loading",
          "Deployment and Hosting",
          "Preparing your application for production",
          "Deployment to platforms like Heroku or AWS",
          "Setting up domain and SSL",
          "Final Projects and Advanced Concepts",
          "Project Development",
          "Working on a larger project as a team or individually",
          "Implementing additional features and functionality",
          "Project management and version control with Git",
          "Advanced Concepts and Emerging Technologies",
          "Exploring GraphQL for API development",
          "Serverless architecture with AWS Lambda",
          "Continuous integration and deployment (CI/CD)",
        ]}
        coursePrice="600,000"
        courseDuration="8 months"
        classType="Physical"
      />
    </Box>
  );
}

export default FullStackWebDevelopment;
