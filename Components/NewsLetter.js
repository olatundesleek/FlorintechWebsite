import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsPlayCircle } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import Link from "next/link";

const NewsLetter = () => {
  return (
    <>
      <Box>
        <Flex
          justify="center"
          align="center"
          m={20}
          className="course-container"
        >
          <Flex m={0} padding={10} className="browse-course">
            <Box>
              <BsPlayCircle fontSize={20} className="newsletter-icons-play" />
            </Box>
            <Box className="browse-title">
              <h1>Browse marketing courses</h1>
              <Text fontSize="xl" className="browse-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                purus gravida orci interdum egestas.
              </Text>
              <Link href="/">
              <a className="browse-link">
                Browse Courses
              </a>
              </Link>
             
            </Box>
          </Flex>
          <Box
            className="course-message"
            boxShadow="md"
            rounded="md"
            bg="white"
          >
            <Flex m={5} padding={10} className="join-message">
              <Box>
                <BiEnvelope fontSize={20} className="newsletter-icons" />
              </Box>
              <Box className="browse-title" ml={10}>
                <h1>Join our email newsletter</h1>
                <Text fontSize="xl" className="browse-text-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo purus gravida orci interdum egestas.
                </Text>
              </Box>
            </Flex>
            <input
              type="email"
              name=""
              placeholder="Enter Your Email"
              className="newsletter-input"
              required
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default NewsLetter;
