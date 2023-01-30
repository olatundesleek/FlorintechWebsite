import { Box, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Linkbtn from "../Linkbtn/Linkbtn";

function Slider() {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      emulateTouch={true}
      showIndicators={false}
    >
      <div className="page-slider">
        <img src="https://res.cloudinary.com/de0x1equu/image/upload/v1600773486/Student_1_hhux1k.png" />
        <Box
          justifyContent="center"
          position="absolute"
          top={{ base: "25%", sm: "39%", md: "45%" }}
          width="100%"
        >
          <Text
            fontSize={{ base: "20px", sm: "35px", md: "50px" }}
            color="#fff" fontWeight="bold"
          >
            Start Learning With Florintech
          </Text>
          <Text
            fontSize={{ base: "15px", sm: "25px", md: "30px" }}
            color="#fff" fontWeight="bold"
          >
            With Over 100 free tutorial Videos
          </Text>
          <Flex justifyContent="center">
            <Box d="flex" justifyContent="center">
              <Linkbtn
                caption="Tutorials"
                to="whatsapp"
                className="register-action"
                borderRadius="md"
                bg="none"
                color="white"
                px={4}
                h={8}
                m={3}
                border="1px #fff solid"
              />
              <Linkbtn
                caption="Register"
                to="whatsapp"
                // className="register-action"
                borderRadius="md"
                bg="#092038"
                color="white"
                px={4}
                h={8}
                m={3}
                border="1px #fff solid"
              />
            </Box>
          </Flex>
        </Box>
      </div>
      <div className="page-slider">
        <img src="https://res.cloudinary.com/de0x1equu/image/upload/v1600773475/student1ed_ycght3.png" />
        <Box
          justifyContent="center"
          position="absolute"
          top={{ base: "25%", sm: "39%", md: "45%" }}
          width="100%"
        >
          <Text
            fontSize={{ base: "20px", sm: "35px", md: "50px" }}
            color="#fff" fontWeight="bold"
          >
            Jumpstart Your Career
          </Text>
          <Text
            fontSize={{ base: "15px", sm: "25px", md: "30px" }}
            color="#fff" fontWeight="bold"
          >
            Thousands of People Already Registered
          </Text>
          <Flex justifyContent="center">
            <Box d="flex" justifyContent="center">
              <Linkbtn
                caption="Courses"
                to="/courses"
                className="register-action"
                borderRadius="md"
                bg="none"
                color="white"
                px={4}
                h={8}
                m={3}
                border="1px #fff solid"
              />
              <Linkbtn
                caption="Register"
                to="Register"
                // className="register-action"
                borderRadius="md"
                bg="#092038"
                color="white"
                px={4}
                h={8}
                m={3}
                border="1px #fff solid"
              />
            </Box>
          </Flex>
        </Box>
      </div>
      <div className="page-slider">
        <img src="https://res.cloudinary.com/de0x1equu/image/upload/v1600773441/student2ed_gl6tlj.png" />
        <Box
          justifyContent="center"
          position="absolute"
          top={{ base: "25%", sm: "39%", md: "45%" }}
          width="100%"
        >
          <Text
            fontSize={{ base: "20px", sm: "35px", md: "50px" }}
            color="#fff" fontWeight="bold"
          >
            Problems Making A choice?
          </Text>
          <Text
            fontSize={{ base: "15px", sm: "25px", md: "30px" }}
            color="#fff" fontWeight="bold"
          >
            Talk to a course Advisor
          </Text>
          <Flex justifyContent="center">
            <Box d="flex" justifyContent="center">
              <Linkbtn
                caption="Click to call"
                to="whatsapp"
                className="register-action"
                borderRadius="md"
                bg="none"
                color="white"
                px={4}
                h={8}
                m={3}
                border="1px #fff solid"
              />
              <Linkbtn
                caption="whatsapp"
                to="whatsapp"
                // className="register-action"
                borderRadius="md"
                bg="#91d573"
                color="white"
                px={4}
                h={8}
                m={3}
                border="1px #fff solid"
              />
            </Box>
          </Flex>
        </Box>
      </div>
    </Carousel>
  );
}

export default Slider;
