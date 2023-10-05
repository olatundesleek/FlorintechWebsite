import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Box, Flex } from "@chakra-ui/react";


function Error404() {
  return (
    <Box>
<Header/>
<Flex height="30vh" justifyContent="center" alignItems="center">
    <Box> <h1 style={{fontSize:"25px"}}>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p></Box>
    
   </Flex>

<Footer/>
    </Box>
   
  )
}

export default Error404