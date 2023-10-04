import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Brand from "./Brand/Brand";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import NewsLetter from "./NewsLetter";

function Footer() {
  return (
    <Box className="footer">
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="center"
      >
        <Flex
          className="footer-writeup"
          justifyContent="center"
          flexDirection="column"
        >
          <Brand />
          <h2>FLORINTECH COMPUTER COLLEGE </h2>
          <NewsLetter />
        </Flex>
        <Flex
          className="footer-links"
          justifyContent="center"
          flexDirection={{ base: "row", sm: "column", md: "row", lg: "row" }}
        >
          <Box>
            <h2>PAGES</h2>
            <Box className="footer-pages">
              <ul>
                <li>
                  <Link legacyBehavior href="/">
                    <a>HOME</a>
                  </Link>
                </li>

                <li>
                  <Link legacyBehavior href="/courses">
                    <a>COURSE</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/#testimonial">
                    <a>TESTIMONIAL</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/tutorial">
                    <a>TUTORIAL</a>
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href="https://blog.florintechcomputercollege.com"
                  >
                    <a target="_blank">BLOG</a>
                  </Link>
                </li>

                <li>
                  <Link legacyBehavior href="/aboutus">
                    <a>ABOUT US</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/faq">
                    <a>FAQ</a>
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>

          <Box>
            <h2>TOOLS & SOCIALS</h2>
            <Box className="footer-tools">
              <ul>
                <li>
                  <Link legacyBehavior href="/verifycertificate">
                    <a>VERIFY CERTIFICATE</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/register">
                    <a>ONLINE REGISTERATION</a>
                  </Link>
                </li>
                <li >
                <Link
                  legacyBehavior
                  href="https://facebook.com/florintechcomputercollege"
                >
                  <a target="_blank">
                    <FiFacebook />
                    FACEBOOK
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="https://twitter.com/florintechcc">
                  <a target="_blank">
                    <FiTwitter />
                    TWITTER
                  </a>
                </Link>
              </li>
              <li>
                <Link  legacyBehavior href="https://linkedin.com/company/florintech-computer-college">
                  <a target="_blank">
                    <FiLinkedin />
                    LINKEDIN
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="https://www.youtube.com/@FlorintechComputerCollege">
                  <a target="_blank">
                    <FiYoutube />
                    YOUTUBE
                  </a>
                </Link>
              </li>
              </ul>
            </Box>
          </Box>
        </Flex>


      </Flex>
    </Box>
  );
}

export default Footer;
