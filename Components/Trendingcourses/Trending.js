import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import trendingImg from "../../assets/trending.png";
import CourseTab from "../Coursetab/CourseTab";
import { courseImages } from "../images";

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
            courseText="A website not only allows you to reach a wider audience, but it also helps establish credibility and trust with potential customers.
        
        Our Web Development program is designed to equip students with the skills and knowledge necessary to create professional and functional websites. We cover a wide range of topics, including HTML, CSS, JavaScript, and web design principles.
        
        At Florintech Computer College, we believe in a hands-on approach to learning. Our experienced instructors provide practical exercises and real-world examples to ensure that students gain practical skills that they can apply in their careers.
        
        Whether you are interested in starting a career as a web developer or want to enhance your existing skills, our Web Development program is the perfect choice. Join us today and take the first step towards building your own website or developing websites for others.
        
        Don't miss this opportunity! Register now to start your journey in the exciting world of web developmena."
            courseTitle="web development"
            courseImage={courseImages.webdevelopment}
            price="60000"
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
            courseText="Florintech Computer College is a leading institution that provides students with the skills and knowledge necessary to succeed in the digital media industry. The college offers various courses, ranging from web development and graphic design to digital marketing and video production.

One of the unique aspects of Florintech Computer College is its focus on hands-on learning. Students have access to state-of-the-art facilities and equipment, including high-end computers, cameras, and software. This allows them to gain practical experience and develop their skills in real-world scenarios.

The college also places a significant emphasis on industry partnerships, ensuring that students have access to relevant and up-to-date knowledge. Florintech Computer College has established partnerships with various digital media companies, providing students with internship opportunities and exposure to industry experts.

In addition to its academic programs, Florintech Computer College also offers a range of extracurricular activities."
            courseTitle="UI/UX"
            courseImage={courseImages.ux}
            price="80000"
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
            courseText="Florintech Computer College, your one-stop solution for professional desktop publishing training and certification. Our Certified Desktop Publishing program is designed to provide you with the skills and knowledge you need to excel in the world of digital publishing

Desktop publishing has become an essential skill in today's fast-paced digital world. Whether you're creating brochures, flyers, newsletters, or other marketing materials, having a strong understanding of desktop publishing tools and techniques is crucial. That's where our Certified Desktop Publishing program comes in.

At Florintech Computer College, we offer a comprehensive training program that covers all aspects of desktop publishing. Our program includes in-depth training on industry-standard software applications such as Adobe InDesign, Adobe Illustrator, and Adobe Photoshop. You'll learn how to create and design professional-grade documents, layouts, and graphics that meet the highest industry standards.

Our Certified Desktop Publishing program is ideal for both beginners and professionals looking to enhance their skills. Our instructors are industry experts with years of experience in the field, and they'll provide you with practical, hands-on training that will help you master the techniques and tools used in desktop publishing.

Upon completion of our program, you'll be awarded a Certified Desktop Publishing certification from Florintech Computer College. This certification is recognized worldwide and is a testament to your skills and knowledge in the field of desktop publishing. Our certification is also a great way to enhance your resume and increase your job prospects in the competitive job market."
            courseTitle="Graphics Design Professional"
            courseImage={courseImages.graphics}
            price="50000"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Trending;
