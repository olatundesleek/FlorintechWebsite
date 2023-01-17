import React from "react";
import images from "./images.json";
import { Box, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
const autocadspecialist = images[3].autocadspecialist;

const AboutTeacher = () => {
  return (
    <div>
      <Flex
        justify="space-around"
        mt={10}
        className="about-teacher-container"
        boxShadow="md"
        rounded="md"
        bg="white"
      >
        <Box>
          <Image
            width="200px"
            height="200px"
            src={autocadspecialist}
            alt="Person"
            className="person-image"
          />
        </Box>
        <Box className="about-teacher">
          <h1 className="about-teacher-title">About the teacher</h1>
          <p mt={5}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quas
            ipsum ducimus inventore totam corporis unde.
          </p>
          <Link href="/" className="about-link">
            <a>Learn more</a>
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default AboutTeacher;
