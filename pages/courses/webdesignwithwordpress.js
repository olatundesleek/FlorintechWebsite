import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function WebDesignWithWordpress() {
  return (
    <Box>
      <DefaultSeo  {...SEO}
        title="Web Design with wordpress | Florintech computer college"
        description="Learn web design with WordPress at Florintech Computer College! Master how to build and customize professional, responsive websites using the world’s leading CMS. Perfect for beginners and aspiring web designers. Enroll now to create stunning websites without coding!"
        canonical = 'https://www.florintechcomputercollege.com/webdesignwithwordpress/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/webdesignwithwordpress/",
          title: "Web Design with wordpress | Florintech computer college",
          description: "Learn web design with WordPress at Florintech Computer College! Master how to build and customize professional, responsive websites using the world’s leading CMS. Perfect for beginners and aspiring web designers. Enroll now to create stunning websites without coding!",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/wordpress.jpg",
              width: 800,
              height: 600,
              alt: "web design with wordpress",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
       
      />
      <Header />
      <Singlecourse
        courseTitle="Website Design with Wordpress"
        courseImage={courseImages.wordpress}
        aboutCourseText="Learn web design with WordPress in this practical course at Florintech Computer College. Whether you're new to web design or want to enhance your skills, this course teaches you how to build and customize professional, responsive websites using WordPress —no coding required.   You'll master themes, plugins, content creation, SEO, and website maintenance. By the end, you'll have the skills to design and manage fully functional WordPress sites, including e-commerce integration. Perfect for aspiring designers and business owners looking to build a strong online presence."
        courseOutline={[
    "Introduction to Web Design & WordPress",
  "Exploring the WordPress Dashboard",
  "Wordpress Localhost and Cpanel installation ",
  "WordPress Themes & Customization",
  "Plugins – Extending WordPress Functionality",
  "Building Your Website Layout",
  "Content Creation & Management",
  "SEO & Website Optimization",
  "E-commerce with WordPress (Optional)",
  "Website Security & Maintenance",
  "Launching & Managing Your Website",
  "Final Project"
        ]}
        coursePrice="80,000"
        courseDuration="6 weeks"
         classType="Physical/Virtual"
      />
    </Box>
  );
}

export default WebDesignWithWordpress;
