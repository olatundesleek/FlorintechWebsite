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
      <DefaultSeo
        {...SEO}
        title="Web Design with WordPress Course in Ojo, Lagos | Florintech"
        description="Learn to build and customize professional websites with WordPress at Florintech Computer College in Ojo, Lagos. Practical training for beginners. Register now."
        canonical="https://www.florintechcomputercollege.com/courses/web-design-with-wordpress/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/web-design-with-wordpress/",
          title: "Web Design with wordpress | Florintech computer college",
          description:
            "Learn web design with WordPress at Florintech Computer College! Master how to build and customize professional, responsive websites using the world’s leading CMS. Perfect for beginners and aspiring web designers. Enroll now to create stunning websites without coding!",
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
        aboutCourseText="WordPress powers 60% of all websites and if you can build WordPress sites, you can generate income immediately. Our WordPress web design course teaches you to create stunning, professional websites without writing a single line of code. Within weeks, you'll be able to build client ready sites.

If you want to learn web design in Lagos, this is a practical start for anyone seeking computer training for beginners, online computer courses, or a professional path into digital careers. We also support learners who want affordable coding classes in Lagos and those searching for a best web development school in Lagos that offers hands-on training with real projects and simple computer training fees.

You'll learn WordPress from installation to launch: choosing the right theme, customizing with plugins, creating SEO optimized content, adding e commerce, and managing security. You'll build real websites—a restaurant site, an online store, a portfolio—that you can show potential clients. By week five, you can confidently handle small business websites. By week six, you're ready to take paying projects.

This skill is perfect for side income or a full business. Design agencies and small businesses constantly need WordPress professionals. You'll be able to build and sell websites to small businesses, restaurants, and entrepreneurs across Lagos and Nigeria."
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
          "Final Project",
        ]}
        coursePrice="100,000"
        courseDuration="6 weeks"
        classType="Physical/Virtual"
      />
    </Box>
  );
}

export default WebDesignWithWordpress;
