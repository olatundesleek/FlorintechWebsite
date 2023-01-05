import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CourseTab from "../../Components/Coursetab/CourseTab";
import Header from "../../Components/Header";
import images from "../../Components/images.json";
import { Flex } from "@chakra-ui/react";
const webdevelopment = images[0].webdevelopment;

function index() {
  return (
    <Box>
      <Header />
      {/* the courses text */}
      <Flex align="center" justify="center" className="course-text">
        <Box>
          <Text className="course-text-left">
            Browse my premium marketing courses
          </Text>
        </Box>
        <Box className="course-text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae
          non diam ipsum, augue amet amet. At nisl amet consectetur tincidunt.
        </Box>
      </Flex>
      {/* end of the courses text */}
      <CourseTab
        to="courses/webdevelopment"
        courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
        courseTitle="web development"
        courseImage={webdevelopment}
        price="50000"
      />
    </Box>
  );
}

export default index;
