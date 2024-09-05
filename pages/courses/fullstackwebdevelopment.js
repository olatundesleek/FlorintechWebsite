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
      <DefaultSeo  {...SEO}
        title="Full-Stack Web Development | Florintech computer college"
        description="Join Florintech Computer College's Full-Stack Web Development program. Learn front-end and back-end development, MERN stack, and build full-stack applications. Hands-on training with industry experts. Duration: 12 months. Certification included. Start your journey to becoming a web developer"
        canonical = 'https://www.florintechcomputercollege.com/fullstackwebdevelopment/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/fullstackwebdevelopment/",
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
        aboutCourseText="This intensive program at Florintech Computer College, a premier computer school in Lagos, covers a wide spectrum of skills, technologies, and industry best practices to ensure that graduates are well-equipped for success in the ever-evolving field of web development. Throughout this immersive journey, you will learn the intricacies of both front-end and back-end development, gaining expertise in the latest web technologies, frameworks, and tools.

        Join Florintech Computer College and learn Full-Stack web development to advance your career in tech and software development. Our hands-on approach and experienced instructors will guide you through every step, ensuring you gain practical experience and comprehensive knowledge.
        
        Take the next step in your career and contact Florintech Computer College today to learn more about our web development program."
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
        coursePrice="350,000"
        courseDuration="8 months"
         classType="Physical"
      />
    </Box>
  );
}

export default FullStackWebDevelopment;
