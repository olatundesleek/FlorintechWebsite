import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";

import Slider from "../Components/Slider/Slider";

import { appContext } from "./_app";
import Why from "../Components/Whyflorintech/Why";
import CourseTab from "../Components/Coursetab/CourseTab";
import Trending from "../Components/Trendingcourses/Trending";
import Singlecourse from "../Components/single-course/Singlecourse";
import Header from "../Components/Header";

import NewsLetter from "../Components/NewsLetter";
import Testimonial from "../Components/Testimonial/Testimonial";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Courses | Florintech Computer College</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Box listStyleType="none" textDecoration="none" m={0}>
       
        <Header/>
        <Slider />
        <Box className="page-main-content" padding={{ base: "10px", sm: "10px", md: "40px",lg:"50px" }}>
        <Why/>
        <Trending/>
        <Testimonial/>
        {/* <Singlecourse/> */}
        </Box>
       <NewsLetter/> 
     <Footer/>
      </Box>
    </div>
  );
}
