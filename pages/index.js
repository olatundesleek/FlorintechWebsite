import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";
import Topnav from "../Components/Topnav/Topnav";
import Brand from "../Components/Brand/Brand";
import Slider from "../Components/Slider/Slider";
import Navmenu from "../Components/Menu/Navmenu";
import { appContext } from "./_app";
import Why from "../Components/Whyflorintech/Why";
import CourseTab from "../Components/Coursetab/CourseTab";
import Trending from "../Components/Trendingcourses/Trending";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Florintech Computer College</title>
        <meta
          name="Florintech Computer College"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box listStyleType="none" textDecoration="none" m={0}>
        <Topnav />
        <Brand />
        <Navmenu />
        <Slider />
        <Box className="page-main-content" padding={{ base: "10px", sm: "10px", md: "40px",lg:"50px" }}>
        <Why/>
        <Trending/>
        </Box>
        
     
      </Box>
    </div>
  );
}
