import React from "react";
import images from "./images.json";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
const autocadspecialist = images[3].autocadspecialist;

const AboutTeacher = ({ teacherTitle, teacherName, teacherText }) => {
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
          <h1 className="about-teacher-title"> {teacherTitle} </h1>
          <h3 className="about-teacher-title"> {teacherName} </h3>
          <p mt={5}>{teacherText}</p>
        </Box>
      </Flex>
    </div>
  );
};

export default AboutTeacher;

