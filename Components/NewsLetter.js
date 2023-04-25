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
          justify="between"
          align="center"
          m={{ base: 5, sm: 5, md: 3, lg: 3 }}
          className="course-container"
        >
          <Flex m={0} padding={10} className="browse-course">
            <Box className="browse-title">
              <h1>Blog</h1>
              <Text fontSize="xl" className="browse-text">
                visit our
                <span>
                  <Link href="https://blog.florintechcomputercollege.com">
                    blog
                  </Link>
                </span>
                for exciting tech related news
              </Text>
            </Box>
          </Flex>
          <Box
            className="course-message"
            boxShadow="md"
            rounded="md"
            bg="white"
          >
            <Flex m={5} className="join-message">
              <Box>
                <BiEnvelope fontSize={20} className="newsletter-icons" />
              </Box>
              <Box className="browse-title" ml={10}>
                <h1>Join our email newsletter</h1>
                <Text fontSize="xl" className="browse-text-text">
                  subscribe to our newsletter to receive exciting mails about
                  promos and offers
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
