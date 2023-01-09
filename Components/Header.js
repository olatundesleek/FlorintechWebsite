import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Brand from './Brand/Brand'
import Navmenu from './Menu/Navmenu'
import Topnav from './Topnav/Topnav'


function Header() {
  return (
    <Box>
        <Topnav/>
        <Flex justifyContent="center" borderBottom={"1.7px solid #092038"} p={3}> <Brand/></Flex>
       
        <Navmenu/>
    </Box>
  )
}

export default Header