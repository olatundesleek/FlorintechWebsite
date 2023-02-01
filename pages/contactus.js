import { Box,Flex } from '@chakra-ui/react'
import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OpeningDays from '../Components/OpeningDays';
import {FiPhoneCall} from "react-icons/fi"

import {HiOutlineMailOpen} from "react-icons/hi"
import{GrLocation} from "react-icons/gr"
import Link from 'next/link';
function contactus() {
  return (
   <Box className='contactus'>
    <Header />
    <Box className='banner'>
     <span>Contact us</span>

    </Box>

    <Flex flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}} className='wrapper-contact'>
     <Box className='banner-openday' m={{base:20,sm:20,md:0,lg:0}}>

     </Box>
   
     <Box className='banner-location' m={{base:20,sm:20,md:0,lg:0}} overflow="hidden">
     <Box className='frame-wrapper'>
    </Box>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4004587114587!2d3.184714914193238!3d6.470851125569799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86b056d20783%3A0x3cd75bc3da14206d!2sFlorintech%20computer%20college!5e0!3m2!1sen!2sng!4v1675250971122!5m2!1sen!2sng"  height="400px" width="400px" allowfullscreen="true"></iframe>
     </Box>
    

    </Flex>
    <Flex flexDirection={{base:"column",sm:"column",md:"row",lg:"row"}} className='icon-container' >
        <Link href="/"><a>
        <Box className='address-con'>
          <GrLocation fontSize="3rem" style={{padding:"5px"}} />
          <span>
                <h2>Location:</h2>
                <p>9 kemberi Road okokomiako</p>
            </span>

        </Box>
            
            </a>
            </Link>
        <Link href="/">
            <a>
        <Box className='email-con'>
            <HiOutlineMailOpen fontSize="3rem" style={{padding:"5px"}}/>
            <span>
                <h2>Email:</h2>
                <p>info@florintechcomputercollege.com</p>
            </span>
        </Box>
        </a>
        </Link>
       <Link href="/">
       <a>

       <Box className='phone-con'>
            <FiPhoneCall fontSize="3rem" style={{padding:"5px"}}/>
            <span>
                <h2>Phone:</h2>
                <p>+23408136689745</p>
            </span>
        </Box>
       </a>
       
       </Link>



    </Flex>
   
    <Footer />
   </Box>
  )
}

export default contactus