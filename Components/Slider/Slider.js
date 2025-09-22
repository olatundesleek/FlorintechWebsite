import { Box, Text, Flex } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Linkbtn from "../Linkbtn/Linkbtn";

function Slider() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      infiniteLoop
      emulateTouch
      showIndicators={false}
    >
      {/* Slide 1 */}
      <div className="page-slider">
        <img
          src="https://res.cloudinary.com/de0x1equu/image/upload/q_auto/v1725550399/Student_1_hhux1k-1_f4pjj6.webp"
          alt="Student sitting at Florintech Computer School in Ojo during ICT training
"
        />
        <Box
          justifyContent="center"
          position="absolute"
          top={{ base: "25%", sm: "23%", md: "45%" }}
          width="100%"
        >
          <Text
            as="h2"
            fontSize={{ base: "20px", sm: "25px", md: "35px" }}
            color="#fff"
            fontWeight="bold"
          >
            Launch Your Tech Career
          </Text>
          <Text
            as="p"
            fontSize={{ base: "15px", sm: "25px", md: "30px" }}
            color="#fff"
          >
            Practical computer training with expert instructors.
          </Text>
          <Flex justifyContent="center">
            <Linkbtn
              caption="Explore Courses"
              to="/courses"
              borderRadius="md"
              bg="none"
              color="white"
              px={4}
              h={8}
              m={3}
              border="1px #fff solid"
            />
            <Linkbtn
              caption="Register Now"
              to="/register"
              borderRadius="md"
              bg="#092038"
              color="white"
              px={4}
              h={8}
              m={3}
              border="1px #fff solid"
            />
          </Flex>
        </Box>
      </div>

      {/* Slide 2 */}
      <div className="page-slider">
        <img
          src="https://res.cloudinary.com/de0x1equu/image/upload/q_auto/v1600773486/Student_1_hhux1k.webp"
          alt="Beginner to Pro learning at Florintech Computer College"
        />
        <Box
          justifyContent="center"
          position="absolute"
          top={{ base: "25%", sm: "23%", md: "45%" }}
          width="100%"
        >
          <Text
            as="h2"
            fontSize={{ base: "20px", sm: "25px", md: "35px" }}
            color="#fff"
            fontWeight="bold"
          >
            From Beginner to Certified Pro
          </Text>
          <Text
            as="p"
            fontSize={{ base: "15px", sm: "25px", md: "30px" }}
            color="#fff"
          >
            Hands-on training designed to make you job-ready.
          </Text>
          <Flex justifyContent="center">
            <Linkbtn
              caption="View Programs"
              to="/courses"
              borderRadius="md"
              bg="none"
              color="white"
              px={4}
              h={8}
              m={3}
              border="1px #fff solid"
            />
            <Linkbtn
              caption="Apply Today"
              to="/register"
              borderRadius="md"
              bg="#092038"
              color="white"
              px={4}
              h={8}
              m={3}
              border="1px #fff solid"
            />
          </Flex>
        </Box>
      </div>

      {/* Slide 3 */}
      <div className="page-slider">
        <img
          src="https://res.cloudinary.com/de0x1equu/image/upload/q_auto/v1725550397/Student_1_hhux1k-2_l2ctb8.webp"
          alt="Students learning graphics design at Florintech Computer School in Ojo Lagos"
        />
        <Box
          justifyContent="center"
          position="absolute"
          top={{ base: "25%", sm: "23%", md: "45%" }}
          width="100%"
        >
          <Text
            as="h2"
            fontSize={{ base: "20px", sm: "25px", md: "35px" }}
            color="#fff"
            fontWeight="bold"
          >
            Upgrade Your Skills. Boost Your Career.
          </Text>
          <Text
            as="p"
            fontSize={{ base: "15px", sm: "25px", md: "30px" }}
            color="#fff"
          >
            Get certified in today’s most valuable tech courses.
          </Text>
          <Flex justifyContent="center">
            <Linkbtn
              caption="Browse Courses"
              to="/courses"
              borderRadius="md"
              bg="none"
              color="white"
              px={2}
              h={8}
              m={3}
              border="1px #fff solid"
            />
            <Linkbtn
              caption="Start Registration"
              to="/register"
              borderRadius="md"
              bg="#092038"
              color="white"
              px={2}
              h={8}
              m={3}
              border="1px #fff solid"
            />
          </Flex>
        </Box>
      </div>

      {/* Slide 4 */}
      <div className="page-slider">
        <img
          src="https://res.cloudinary.com/de0x1equu/image/upload/q_auto/v1600773441/student2ed_gl6tlj.webp"
          alt="Student support at Florintech Computer College in Ojo Lagos"
        />
        <Box
          justifyContent="center"
          position="absolute"
          top={{ base: "25%", sm: "30%", md: "45%" }}
          width="100%"
        >
          <Text
            as="h2"
            fontSize={{ base: "20px", sm: "25px", md: "35px" }}
            color="#fff"
            fontWeight="bold"
          >
            Not Sure Which Course?
          </Text>
          <Text
            as="p"
            fontSize={{ base: "15px", sm: "25px", md: "30px" }}
            color="#fff"
          >
            Talk to a friendly course advisor today.
          </Text>
          <Flex justifyContent="center">
            <Linkbtn
              caption="Call Us"
              to="tel:+234813668745"
              borderRadius="md"
              bg="none"
              color="white"
              px={4}
              h={8}
              m={3}
              border="1px #fff solid"
            />
            <Linkbtn
              caption="Chat on WhatsApp"
              to="https://wa.me/+2349024702192"
              borderRadius="md"
              bg="#25D366"
              color="white"
              px={4}
              h={8}
              m={3}
              border="1px #fff solid"
            />
          </Flex>
        </Box>
      </div>
    </Carousel>
  );
}

export default Slider;
