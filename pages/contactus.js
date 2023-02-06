import { Box,Flex } from '@chakra-ui/react'
import React ,{useState,useEffect}from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OpeningDays from '../Components/OpeningDays';
import {FiPhoneCall} from "react-icons/fi"

import {HiOutlineMailOpen} from "react-icons/hi"
import{GrLocation} from "react-icons/gr"
import Link from 'next/link';
import Banner from '../Components/Banner';
function Contactus() {
    const [getDays , setGetDays]= useState()

  function activateDays() {
    let today = new Date();
    let currentDay = today.getDay();
    //   currentDay = currentDay+1
    console.log(currentDay);
    setGetDays(currentDay);
  }
  useEffect(() => {
    activateDays();
  }, []);

  return (
    <Box className="contactus">
      <Header />
      <Banner
        pageName="Contact us"
        pageDetails="this is a test content to follow conract us"
      />

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        className="wrapper-contact"
      >
        <Box className="banner-openday" m={{ base: 20, sm: 20, md: 0, lg: 0 }}>
          <ul>
            <li>
              <Flex
                justifyContent="space-around"
                paddingTop="2rem"
                paddingBottom="2rem"
                color="green.300"
                fontWeight="600"
              >
                <span>Open Day</span>
                <span>Open Hour</span>
              </Flex>
            </li>
            <li className={getDays == 1 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Monday</span>
                <span>9am - 7:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 2 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Tuesday</span>
                <span>9am - 7:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 3 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Wednesday</span>
                <span>9am - 7:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 4 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Thursday</span>
                <span>9am - 7:30pm</span>
              </Flex>
            </li>
            <li className={getDays == 5 ? "active" : "days"}>
              <Flex justifyContent="space-around" paddingBottom="10px">
                <span>Friday</span>
                <span>9am - 7:30pm</span>
              </Flex>
            </li>
          </ul>
        </Box>

        <Box className="banner-location" m={{ base: 20, sm: 20, md: 0, lg: 0 }}>
          <Box className="frame-wrapper"></Box>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4004587114587!2d3.184714914193238!3d6.470851125569799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86b056d20783%3A0x3cd75bc3da14206d!2sFlorintech%20computer%20college!5e0!3m2!1sen!2sng!4v1675250971122!5m2!1sen!2sng"
            height="400px"
            width="400px"
          ></iframe>
        </Box>
      </Flex>
      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
        className="icon-container"
      >
        <Link href="/">
          <a>
            <Box className="address-con">
              <GrLocation fontSize="3rem" style={{ padding: "5px" }} />
              <span>
                <h2>Location:</h2>
                <p>9 kemberi Road okokomiako</p>
              </span>
            </Box>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Box className="email-con">
              <HiOutlineMailOpen fontSize="3rem" style={{ padding: "5px" }} />
              <span>
                <h2>Email:</h2>
                <p>info@florintechcomputercollege.com</p>
              </span>
            </Box>
          </a>
        </Link>
        <Link href="/">
          <a>
            <Box className="phone-con">
              <FiPhoneCall fontSize="3rem" style={{ padding: "5px" }} />
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
  );
}

export default Contactus