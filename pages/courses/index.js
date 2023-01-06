import { Box, Text, Grid } from "@chakra-ui/react";
import React from "react";
import CourseTab from "../../Components/Coursetab/CourseTab";
import Header from "../../Components/Header";
import images from "../../Components/images.json";
import { Flex } from "@chakra-ui/react";
const webdevelopment = images[0].webdevelopment;
const certifiedgraphicsprofessional = images[2].certifiedgraphicsprofessional;
const desktoppublishing = images[1].desktoppublishing;

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
      {/*  the courses images */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        mr={10}
        ml={10}
        rowGap={7}
        placeItems="center"
      >
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Web Development"
          courseImage={webdevelopment}
          price="50000"
        />
        <CourseTab
          to="courses/advancegraphicsdesign"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Certified Graphics Design"
          courseImage={certifiedgraphicsprofessional}
          price="50000"
        />
        <CourseTab
          to="courses/desktoppublishing"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Desktop Publishing"
          courseImage={desktoppublishing}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Office Application"
          courseImage={webdevelopment}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Business Accounting"
          courseImage={webdevelopment}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer Programming"
          courseImage={webdevelopment}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Digital Media"
          courseImage={webdevelopment}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer Networking"
          courseImage={webdevelopment}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer Engineering"
          courseImage={webdevelopment}
          price="50000"
        />
      </Grid>
    </Box>
  );
}

export default index;
