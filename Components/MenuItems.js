import { Flex } from "@chakra-ui/react";
import MyNavLink from "next/link";
import React from "react";
// import { menuData } from './menudata'
import { menuData } from "../Components/menuData";
function MenuItems() {
  return (
    <Flex>
      {menuData.map((i, index) => {
        return (
          <MyNavLink legacyBehavior href={i.path} key={index}>
            <a className="link">{i.name}</a>
          </MyNavLink>
        );
      })}
    </Flex>
  );
}
export default MenuItems;
