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
        title="Web Development Course in Ojo, Lagos | Florintech Computer College"
        keywords="web development course in ojo, web development course in lagos, web development training in ojo, web development training in lagos, web design course in ojo, web design course in lagos, learn web development in ojo, learn web development in lagos"
        description="Learn web development in Ojo, Lagos at Florintech Computer College. Master HTML, CSS, JavaScript and more with 100% practical ICT training. Register today."
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
        aboutCourseText="If you want to build websites or launch your tech career, our web development course teaches you the exact skills Nigerian employers and international clients demand. You’ll master HTML, CSS, and JavaScript—the core languages behind every website—then apply them to real projects that go into your portfolio.

Perfect for beginners and working professionals, you’ll learn responsive design so your sites work flawlessly on phones and desktops. By week three, you’re building actual web pages. By the end, you’ll understand how the web works from server to browser. You’ll be ready to take freelance projects, compete for junior developer roles in fintech companies, agencies, and startups, or build and launch client websites independently."
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
