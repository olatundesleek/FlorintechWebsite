import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Brand from "./Brand/Brand";
import { FiFacebook} from "react-icons/fi"
import { FiTwitter} from "react-icons/fi"
import {FiYoutube} from "react-icons/fi"
import {FiLinkedin} from "react-icons/fi"

function Footer() {
  return (
    <Box className="footer">
      <Flex flexDirection={{base:"column",sm:"column",md:"column",lg:"row"}} justifyContent="center">
        <Flex className="footer-writeup" justifyContent="center" flexDirection="column">
          <Brand />
          <h2>Copyright © Florintech Computer College </h2>
        </Flex>
        <Flex className="footer-links"  justifyContent="center" flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}}>
          <Box>
            <h2>PAGES</h2>
            <Box className="footer-pages">
              <ul>
                <li>
                  <Link href="/">
                    <a>HOME</a>
                  </Link>
                </li>
             
                <li>
                  <Link href="/course">
                    <a>COURSE</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonial">
                    <a>TESTIMONIAL</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tutorial">
                    <a>TUTORIAL</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>BLOG</a>
                  </Link>
                </li>
                <li>
                  <Link href="/location">
                    <a>LOCATION</a>
                  </Link>
                </li>
                <li>
                  <Link href="/aboutus">
                    <a>ABOUT US</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a>FAQ</a>
                  </Link>
                </li>
              </ul>
            </Box>
         
          </Box>


          <Box >
          <h2>TOOLS</h2>   
          <Box className="footer-tools">
          <ul>
            <li>
              <Link href="/">
<a>VERIFY CERTIFICATE</a>
              </Link>
            </li>
            <li>
              <Link href="/">
<a>ONLINE REGISTERATION</a>
              </Link>
            </li>
          </ul>
          </Box>
            </Box>


          <Box>
            <h2>SOCIALS</h2>
            <Box className="footer-socials">
<ul>
  <li>
    <Link href="https://facebook.com/florintechcomputercollege">
    <a>
<FiFacebook/>FACEBOOK
    </a>
    </Link>
  </li>
  <li>
    <Link href="https://twitter.com/florintechcc">
    <a>
<FiTwitter/>TWITTER
    </a>
    </Link>
  </li>
  <li>
    <Link href="https://linkedin.com/florintechcc">
    <a>
<FiLinkedin/>LINKEDIN
    </a>
    </Link>
  </li>
  <li>
    <Link href="/">
    <a>
<FiYoutube/>YOUTUBE
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
