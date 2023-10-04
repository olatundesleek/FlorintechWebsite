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
      <DefaultSeo  {...SEO}
        title="Front-End Web Development | Florintech computer college"
        description="learn Front-End Web Development with React Js at Florintech Computer College"
        canonical = 'https://www.florintechcomputercollege.com/frontendwebdevelopment./'
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
        aboutCourseText="This comprehensive 6-month React.js course is designed to equip students with the skills and knowledge necessary to become proficient React.js developers. students will start with a strong foundation in HTML, CSS, and JavaScript before diving into React.js, a popular JavaScript library for building modern web applications. Throughout the course, students will gain hands-on experience through practical projects and assignments, enabling them to create interactive and dynamic web applications."
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
        coursePrice="#120,000"
        courseDuration="6 months"
      />
    </Box>
  );
}

export default WebDevelopmentWithReact;
