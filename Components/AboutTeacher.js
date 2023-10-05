import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";


const AboutTeacher = ({ teacherTitle, teacherName, teacherText }) => {
  return (
    <div>
      <Box
        justify="space-around"
        mt={10}
        pl={{ sm: 0, md: 10, lg: 20 }}
        className="about-teacher-container"
        boxShadow="md"
        rounded="md"
        bg="white"
      >
        <Flex alignItems="center" width="100%">
          <Box>
            <Image
              width="80px"
              height="80px"
              ml={20}
              src={autocadspecialist}
              alt="Person"
              className="person-image"
            />
          </Box>
          <Box className="about-teacher">
            <h1 className="about-teacher-title"> {teacherTitle} </h1>
            <h3 className="about-teacher-title"> {teacherName} </h3>
          </Box>
        </Flex>
        <p mt={5}>{teacherText}</p>
      </Box>
    </div>
  );
};

export default AboutTeacher;
