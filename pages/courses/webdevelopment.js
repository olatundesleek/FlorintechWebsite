import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function webdevelopment() {
  return (
    <Box>
      <Header />
      <Singlecourse
        courseTitle="website Development"
        courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
        courseImage={courseImages.webdevelopment}
        aboutCourseText="Welcome to Florintech Computer College's Web Development program!

        In today's digital age, having a website has become a necessity for businesses and individuals alike. A website not only allows you to reach a wider audience, but it also helps establish credibility and trust with potential customers.
        
        Our Web Development program is designed to equip students with the skills and knowledge necessary to create professional and functional websites. We cover a wide range of topics, including HTML, CSS, JavaScript, and web design principles.
        
        At Florintech Computer College, we believe in a hands-on approach to learning. Our experienced instructors provide practical exercises and real-world examples to ensure that students gain practical skills that they can apply in their careers.
        
        Whether you are interested in starting a career as a web developer or want to enhance your existing skills, our Web Development program is the perfect choice. Join us today and take the first step towards building your own website or developing websites for others.
        
        Don't miss this opportunity! Register now to start your journey in the exciting world of web development. We offer flexible class schedules to accommodate your busy lifestyle.
        
        Enroll now and start building your future in web development with Florintech Computer College!"
        courseDuration="4 months"
        coursePrice="#50,000"
        courseOutline={[
          "HTML5.",
          "CSS",
          "Javascripts.",
          "Bootstrap(css framework)",
          "JQuery.",
          "Introduction to content management system(CMS).",
        ]}
      />
    </Box>
  );
}

export default webdevelopment;
