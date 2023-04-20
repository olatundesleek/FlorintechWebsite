import { Flex, Box } from "@chakra-ui/react";

import Hamburger from "../Hamburger/Hamburger";
import Mobilemenu from "../Mobilemenu/Mobilemenu";
import { useState } from "react";
import MenuItems from "../MenuItems";

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

      {isActive ? <Mobilemenu /> : ""}

      <Flex justifyContent={{ base: "flex-end", sm: "flex-end", md: "center" }}>
        <Flex
          // className={isActiveStatus == false ? "hamburger" : "hamburger open"}
          // d={{ base: "none", md: "flex" }}
          justifyContent="center"
          wrap="wrap"
          display={{ base: "none", md: "flex" }}
        >
          <MenuItems />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navmenu;
