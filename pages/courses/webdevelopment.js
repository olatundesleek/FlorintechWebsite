import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../../Components/Header'
import Singlecourse from '../../Components/single-course/Singlecourse'

function webdevelopment() {
  return (
    <Box>
      <Header />
      <Singlecourse courseTitle="Ultimate Facebook Ads Advance Course" />
    </Box>
  );
}

export default webdevelopment