import { Box, Text, Grid } from "@chakra-ui/react";
import React from "react";
import CourseTab from "../../Components/Coursetab/CourseTab";
import Header from "../../Components/Header";
import images from "../../Components/images.json";
import { Flex } from "@chakra-ui/react";
import NewsLetter from "./NewsLetter";
const webdevelopment = images[0].webdevelopment;
const desktoppublishing = images[1].desktoppublishing;
const certifiedgraphicsprofessional = images[2].certifiedgraphicsprofessional;
const autocadspecialist = images[3].autocadspecialist;
const businesselectronicaccounting = images[4].businesselectronicaccounting;
const computernetworking = images[5].computernetworking;
const computerprogramming = images[6].computerprogramming;
const databaseadministraction = images[7].databaseadministraction;
const officeapplication = images[8].officeapplication;
const digitalmedia = images[9].digitalmedia;
const computersecurity = images[10].computersecurity;

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
          courseTitle="Graphics Design"
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
          courseImage={officeapplication}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Business Accounting"
          courseImage={businesselectronicaccounting}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer Programming"
          courseImage={computerprogramming}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Digital Media"
          courseImage={digitalmedia}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer Networking"
          courseImage={computernetworking}
          price="50000"
        />
        <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer-Engr & I.T Security Mgmt"
          courseImage={computersecurity}
          price="50000"
        />
      </Grid>
      <NewsLetter />
    </Box>
  );
}

export default index;
