import { Box, Flex, Grid,GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import trendingImg from "../../assets/trending.png"
import CourseTab from "../Coursetab/CourseTab";
import images from "../images.json";
const webdevelopment = images[0].webdevelopment;
// const advancedGraphicsprofession = images[0].webdevelopment;
function Trending() {
  return (
    <Box className='trending-section'>
<Flex className='trending-section-header' alignItems="center">
    <Box className='trending-section-title-image'><Image width="700px" height="300px" className="trending-Image" src={trendingImg} /></Box>
    <Box className='trending-section-title-text'><h2>Checkout our premium trending courses</h2></Box>
</Flex>

<Grid templateColumns='repeat(3, 1fr)' gap={1}>

<GridItem>
<CourseTab
        to="/webdevelopment"
        courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
        courseTitle="web development"
        courseImage={webdevelopment}
        price="50000"
      />
</GridItem>
<GridItem>
<CourseTab
        to="/uiux"
        courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit voluptatem ullam maiores. Minima."
        courseTitle="UI/UX"
        courseImage={webdevelopment}
        price="80,000"
      />
</GridItem>
<GridItem>
<CourseTab
        to="/Graphics Design Professional"
        courseText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos dignissimos tempora odit consectetur, libero natus, quam magni distinctio animi quasi odio nemo quaerat veritatis velit."
        courseTitle="Graphics Design Professional"
        courseImage={webdevelopment}
        price="50000"
      />
</GridItem>

</Grid>
    </Box>
  )
}

export default Trending