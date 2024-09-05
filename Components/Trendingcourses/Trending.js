import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import trendingImg from "../../assets/trending.png";
import CourseTab from "../Coursetab/CourseTab";
import { courseImages } from "../images";

function Trending() {
  return (
    <Box className="trending-section">
      <Flex justifyContent="center" width="100%">
        <Box className="trending-section-title-text">
          <h2>Checkout our premium trending courses</h2>
        </Box>
      </Flex>
      <Flex
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
        flexFlow="wrap"
      >
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 5, lg: 5 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/webdevelopment"
            courseText="A website not only allows you to reach a wider audience, but it also helps establish credibility and trust with potential customers.
        
        Our Web Development program is designed to equip students with the skills and knowledge necessary to create professional and functional websites. We cover a wide range of topics, including HTML, CSS, JavaScript, and web design principles.
        
        At Florintech Computer College, we believe in a hands-on approach to learning. Our experienced instructors provide practical exercises and real-world examples to ensure that students gain practical skills that they can apply in their careers.
        
        Whether you are interested in starting a career as a web developer or want to enhance your existing skills, our Web Development program is the perfect choice. Join us today and take the first step towards building your own website or developing websites for others.
        
        Don't miss this opportunity! Register now to start your journey in the exciting world of web developmena."
            courseTitle="web development"
            courseImage={courseImages.webdevelopment}
            price="120000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 5, lg: 5 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/uiux"
            courseText="Our UI/UX course covers wireframing, prototyping, user research, and visual design. With a strong emphasis on hands-on learning, students utilize state-of-the-art tools and software to gain practical experience."
            courseTitle="UI/UX"
            courseImage={courseImages.ux}
            price="120000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 5, lg: 5 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/certifiedgraphicsprofessional"
            courseText="Our Certified Desktop Publishing program is designed to provide you with the skills and knowledge you need to excel in the world of digital graphics design,

Graphics Design has become an essential skill in today's fast-paced digital world."
            courseTitle="Graphics Design Professional"
            courseImage={courseImages.graphics}
            price="60000"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Trending;
