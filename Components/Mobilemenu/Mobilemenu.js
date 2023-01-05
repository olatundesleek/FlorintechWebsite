import { Box, Flex } from "@chakra-ui/react";
import MyNavLink from "next/link";

function Mobilemenu() {
  return (
<Box className="mobile-menu">
  <Flex flexDirection={"column"}
  justifyContent="center"
  wrap="wrap"
 
>
  <MyNavLink href="/">
    <a className="link">HOME</a>
  </MyNavLink>
  <MyNavLink href="/">
    <a className="link">COURSES</a>
  </MyNavLink>
  <MyNavLink href="/">
    <a className="link">TESTIMONIAL</a>
  </MyNavLink>
  <MyNavLink href="/">
    <a className="link">TUTORIALS</a>
  </MyNavLink>
  <MyNavLink href="/">
    <a className="link">BLOG</a>
  </MyNavLink>
  <MyNavLink href="/">
    <a className="link">LOCATIONS</a>
  </MyNavLink>
  <MyNavLink href="/">
    <a className="link">ABOUT US</a>
  </MyNavLink>
  <MyNavLink href="/">
    <a className="link">FAQ</a>
  </MyNavLink>
</Flex>
</Box>)
}

export default Mobilemenu;