import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";
import Topnav from "../Components/Topnav/Topnav";
import Brand from "../Components/Brand/Brand";
import Slider from "../Components/Slider/Slider";
import Navmenu from "../Components/Menu/Navmenu";

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
      </Box>
    </div>
  );
}
