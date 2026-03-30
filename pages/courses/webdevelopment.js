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
      <DefaultSeo
        {...SEO}
        title="Web Development Course in Ojo, Lagos | Florintech ICT Training"
        keywords="web development course in ojo, web development course in lagos, web development training in ojo, web development training in lagos, web design course in ojo, web design course in lagos, learn web development in ojo, learn web development in lagos"
        description="Learn web development courses at Florintech, the top computer school in Ojo, Lagos. Gain ICT training in coding, frontend, backend & web design skills."
        canonical="https://www.florintechcomputercollege.com/courses/webdevelopment/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/webdevelopment/",
          title: "Web Development | Florintech computer college",
          description:
            "Learn web development courses at Florintech, the top computer school in Ojo, Lagos. Gain ICT training in coding, frontend, backend & web design skills.",
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
        courseTitle="Website Development"
        courseImage={courseImages.webdevelopment}
        aboutCourseText="Our Web Development Course in Ojo, Lagos is designed for anyone who wants to build a career or business in tech. At Florintech, we go beyond theory with practical ICT training in small class sizes that ensure personal attention and effective learning.

As a local computer school in Ojo, we understand the Nigerian digital market and structure our lessons to give you real-world skills you can immediately apply. Our experienced instructors bring industry knowledge straight into the classroom, guiding you through projects that help you build a professional portfolio.

This course also offers flexible schedules and hands-on lab sessions, making it easier for both students and working professionals to learn without stress. By the end of your training, you’ll be confident in developing, designing, and launching modern websites, ready to take on freelance jobs, internships, or tech roles in Lagos and beyond."
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
        coursePrice="200,000"
        courseDuration="3 months"
        classType="Physical"
      />
    </Box>
  );
}

export default WebDevelopment;
