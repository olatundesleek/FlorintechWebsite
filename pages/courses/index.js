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
          <h1 className="course-text-left">Courses</h1>
        </Box>
        <Box className="course-text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod vitae
          non diam ipsum, augue amet amet. At nisl amet consectetur tincidunt.
        </Box>
      </Flex>
      {/*  the courses images */}
      <Flex
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
        flexFlow="wrap"
        p={{ base: 0, sm: 0, md: 0, lg: 0, xl: 0 }}
      >
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/webdevelopment"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="Web Development"
            courseImage={webdevelopment}
            price="50000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/certifiedgraphicsprofessional"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="Certified Graphics Professional"
            courseImage={certifiedgraphicsprofessional}
            price="50000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/desktoppublishing"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="Desktop Publishing"
            courseImage={desktoppublishing}
            price="30000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/OfficeApplication"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="Office Application"
            courseImage={officeapplication}
            price="15000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/AutoCadSpecialist"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="AutoCad Specialist Course"
            courseImage={databaseadministration}
            price="50000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/CertifiedDeskTopPublishing"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="Certified Desktop Publishing"
            courseImage={computerprogramming}
            price="70000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/DigitalMediaAndWebDevelopnment"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="Digital Media And Web Development"
            courseImage={digitalmedia}
            price="30000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/businesselectronicaccounting"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="Business Electronic Accounting"
            courseImage={computernetworking}
            price="70000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/OfficeInformationMgt"
            courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
            courseTitle="Office Information Management"
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
