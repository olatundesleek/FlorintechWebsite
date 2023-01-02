import { Box } from '@chakra-ui/react'
import React from "react";
import CourseTab from "../../Components/Coursetab/CourseTab";
import Header from "../../Components/Header";
import images from "../../Components/images.json";
const webdevelopment = images[0].webdevelopment;

function index() {
  return (
    <Box>
      <Header />
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

export default index