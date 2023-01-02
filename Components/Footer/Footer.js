import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Brand from '../Brand/Brand'
import MenuItems from '../MenuItems'

function Footer() {
  return (
   <Box className='footer'>
<Flex>
<Box className='footer-writeup'><Brand /><h2>Copyright © Florintech Computer College </h2></Box>
<Flex className='fotter-links'><Box><h2>PAGES</h2><MenuItems/></Box><Box><h2>SOCIAL</h2></Box></Flex>

</Flex>

   </Box>
  )
}

export default Footer