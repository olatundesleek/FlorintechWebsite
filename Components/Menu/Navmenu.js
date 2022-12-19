import { Flex, Box } from "@chakra-ui/react";
import MyNavLink from "next/link";
import Hamburger from "../Hamburger/Hamburger";
import Mobilemenu from "../Mobilemenu/Mobilemenu";
import { useState } from "react";

function Navmenu() {
  const [isActive, setIsActive] = useState(false);

  const handletoggle = () => {
    //   setIsActive((isActive) => !isActive);
    if (isActive == false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  console.log(isActive);

  return (
    <Box>
      <Flex justifyContent={"right"}>
         <Hamburger isActiveStatus={isActive} onClick={handletoggle} />
         </Flex>
      
      {isActive?<Mobilemenu/>:""}
      

    <Flex justifyContent={{ base: "flex-end", sm: "flex-end", md: "center" }}>
      <Flex
        // className={isActiveStatus == false ? "hamburger" : "hamburger open"}
        // d={{ base: "none", md: "flex" }}
        justifyContent="center"
        wrap="wrap"
        d={{ base: "none", md: "flex" }}
      >
        <MyNavLink href="/">
          <a className="link">HOME</a>
        </MyNavLink>
        <MyNavLink href="courses">
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

     
    </Flex>
    </Box>
  );
}

export default Navmenu;
