import { Box, Text, Grid } from "@chakra-ui/react";
import React from "react";
import CourseTab from "../../Components/Coursetab/CourseTab";
import Header from "../../Components/Header";
import images from "../../Components/images.json";
import { Flex } from "@chakra-ui/react";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";
const webdevelopment = images[0].webdevelopment;
const desktoppublishing = images[1].desktoppublishing;
const certifiedgraphicsprofessional = images[2].certifiedgraphicsprofessional;
const computernetworking = images[5].computernetworking;
const computerprogramming = images[6].computerprogramming;
const databaseadministration = images[7].databaseadministration;
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
      </Flex >
      {/*  the courses images */}
      <Flex
       justifyContent={{base:"center",sm:"center",md:"center",lg:"center"}} flexFlow="wrap" p={{base:0,sm:0,md:0,lg:0,xl:0}}
      >
        <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0"> 
          <CourseTab
          to="courses/webdevelopment"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Web Development"
          courseImage={webdevelopment}
          price="50000"
        /></Flex>
       <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0">
       <CourseTab
          to="courses/advancegraphicsdesign"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Graphics Design"
          courseImage={certifiedgraphicsprofessional}
          price="50000"
        />

       </Flex>
        <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0">
        <CourseTab
          to="courses/desktoppublishing"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Desktop Publishing"
          courseImage={desktoppublishing}
          price="50000"
        />
        </Flex>
        <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0">
        <CourseTab
          to="courses/OfficeApplication"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Office Application"
          courseImage={officeapplication}
          price="50000"
        />

        </Flex>
        <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0">
        <CourseTab
          to="courses/DatabaseAdministration"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Database Administration"
          courseImage={databaseadministration}
          price="50000"
        />
        </Flex>
        <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0">
        <CourseTab
          to="courses/ComputerProgramming"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer Programming"
          courseImage={computerprogramming}
          price="50000"
        />
        </Flex>
        <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0">
        <CourseTab
          to="courses/DigitalMedia"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Digital Media"
          courseImage={digitalmedia}
          price="50000"
        />
        </Flex>
        <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0">
        <CourseTab
          to="courses/ComputerNetworking"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer Networking"
          courseImage={computernetworking}
          price="50000"
        />
        </Flex>
        <Flex justifyContent="center" p={{base:0,sm:5,md:10,lg:10}} width={{base:"100%",sm:"auto"}} margin="40px 0">
        <CourseTab
          to="courses/ComputerSecurity"
          courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
          courseTitle="Computer-Engr & I.T Security Mgmt"
          courseImage={computersecurity}
          price="50000"
        />
        </Flex>
      </Flex>
      <NewsLetter />
      <Footer />
    </Box>
  );
}

export default index;
