import { Box, Flex } from "@chakra-ui/react";
import MyNavLink from "next/link";

function Mobilemenu() {
  return (
    <Box className="mobile-menu">
      <Flex flexDirection={"column"} justifyContent="center" wrap="wrap">
        <MyNavLink legacyBehavior href="/">
          <a className="link">HOME</a>
        </MyNavLink>
        <MyNavLink legacyBehavior href="/courses">
          <a className="link">COURSES</a>
        </MyNavLink>
        <MyNavLink legacyBehavior href="/#testimonial">
          <a className="link">TESTIMONIAL</a>
        </MyNavLink>
        <MyNavLink legacyBehavior href="/tutorial">
          <a className="link">TUTORIALS</a>
        </MyNavLink>
        <MyNavLink
          legacyBehavior
          href="https://blog.florintechcomputercollege.com"
        >
          <a className="link">BLOG</a>
        </MyNavLink>
        <MyNavLink legacyBehavior href="/contactus">
          <a className="link">CONTACT US</a>
        </MyNavLink>
        <MyNavLink legacyBehavior href="/aboutus">
          <a className="link">ABOUT US</a>
        </MyNavLink>
        <MyNavLink legacyBehavior href="/faq">
          <a className="link">FAQ</a>
        </MyNavLink>
      </Flex>
    </Box>
  );
}

export default Mobilemenu;
