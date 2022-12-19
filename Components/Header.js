import { Box } from '@chakra-ui/react'
import React from 'react'
import Brand from './Brand/Brand'
import Navmenu from './Menu/Navmenu'
import Topnav from './Topnav/Topnav'


function Header() {
  return (
    <Box>
        <Topnav/>
        <Brand/>
        <Navmenu/>
    </Box>
  )
}

export default Header