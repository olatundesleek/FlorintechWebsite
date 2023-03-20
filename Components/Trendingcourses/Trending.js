import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import trendingImg from "../../assets/trending.png";
import CourseTab from "../Coursetab/CourseTab";
import images from "../images.json";
const webdevelopment = images[0].webdevelopment;
// const advancedGraphicsprofession = images[0].webdevelopment;
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
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="web development"
            courseImage={webdevelopment}
            price="50000"
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
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="UI/UX"
            courseImage={webdevelopment}
            price="80,000"
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
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit."
            courseTitle="Graphics Design Professional"
            courseImage={webdevelopment}
            price="50000"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Trending;
