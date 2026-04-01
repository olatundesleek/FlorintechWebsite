import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function WebDevelopmentWithReact() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        title="Frontend Web Development with React.js in Lagos | Florintech"
        description="Take our React.js frontend development course in Ojo, Lagos. Build modern web apps with hands-on practical training. Enroll at Florintech Computer College today."
        canonical="https://www.florintechcomputercollege.com/courses/frontendwebdevelopment/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/frontendwebdevelopment/",
          title: "Web Development | Florintech computer college",
          description: "learn web development at Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/reactjsimg.png",
              width: 800,
              height: 600,
              alt: "web development with React Js",
              type: "image/png",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="Front-End website Development with React Js"
        courseImage={courseImages.reactjs}
        aboutCourseText="React.js has become the gold standard for building fast, interactive websites and it's what companies like Uber, Netflix, and Nigerian fintech apps use daily. Our React frontend development course teaches you React from the ground up, starting with JavaScript fundamentals before diving into components, state management, and API integration.

You'll start by understanding why React is revolutionary, then build real projects: a weather app, a todo list, an e-commerce product page. Each one goes into your portfolio. By month two, you're working with Redux for complex apps. By month four, you can build any modern web application yourself.

Demand for React developers across tech companies and startups is explosive. You'll be ready to land junior developer positions, work for Nigerian tech companies, or build and sell SaaS products."
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
          "Introduction to React.js and its Ecosystem",
          "Setting Up React.js Development Environment",
          "React Components and JSX",
          "State and Props",
          "Handling Events in React",
          "Building Simple React Applications",
          "Routing with React Router",
          "State Management with Context API and Redux",
          "Form Handling in React",
          "API Integration and Fetching Data",
          "Error Handling and Validation",
          "Testing React Components",
          "Project Planning and Design",
          "Building a Full-Fledged React Application",
          "Implementing User Authentication",
          "Optimizing Performance",
          "Deploying React Applications",
        ]}
        coursePrice="300,000"
        courseDuration="4 months"
        classType="Physical"
      />
    </Box>
  );
}

export default WebDevelopmentWithReact;
