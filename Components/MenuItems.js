import { Flex } from '@chakra-ui/react'
import MyNavLink from "next/link";
import React from 'react'
// import { menuData } from './menudata'
import {menuData} from "../Components/menuData"
function MenuItems() {
  return (
    <Flex>
{menuData.map((i)=>{
  return (<MyNavLink href={i.path}>
  <a className="link">{i.name}</a>
</MyNavLink>)

})}
      
    </Flex>
  )
}
export default MenuItems