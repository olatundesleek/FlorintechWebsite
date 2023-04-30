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
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useState } from "react";
export default function Home() {
  return (
    <div className={styles.container}>
      <DefaultSeo  {...SEO}
        title="Homepage | Florintech computer college"
        canonical = 'https://www.florintechcomputercollege.com/'
        description="Florintech computer college is a leading computer school that offers computer training to businesses, individuals,institutions and organizations. It’s a computer training school located at Okokomaiko,Ojo,Lagos state. Our main purpose is to help students perform better and have a breaking edge over their competitors. From the very basic programs to the most advanced IT training in programming languages,we have got you at Florintech computer college. Our courses includes but not limited to the list of courses: Web development Office training Computer training amongst others. Still have some hesitations whether cooperation with us is worth the trouble? Check the benefits of choosing us among others."
        openGraph={{
          url: "https://www.florintechcomputercollege.com/",
          title: "Homepage | Florintech Computer College",
          description: "Florintech computer college is a leading computer school that offers computer training to businesses, individuals,institutions and organizations. It’s a computer training school located at Okokomaiko,Ojo,Lagos state. Our main purpose is to help students perform better and have a breaking edge over their competitors. From the very basic programs to the most advanced IT training in programming languages,we have got you at Florintech computer college. Our courses includes but not limited to the list of courses: Web development Office training Computer training amongst others. Still have some hesitations whether cooperation with us is worth the trouble? Check the benefits of choosing us among others.",
         
          siteName: "Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/logo.jpg",
              width: 800,
              height: 600,
              alt: "Florintech Comuter College",
              type: "image/jpeg",
            },
          ],
        }}
       
      />
      <Head>
        <title>Homepage | Florintech Computer College</title>
        <meta
          name="courses"
          content="Florintech computer college is a leading computer school that offers computer training to businesses, individuals,institutions and organizations. It’s a computer training school located at Okokomaiko,Ojo,Lagos state. Our main purpose is to help students perform better and have a breaking edge over their competitors. From the very basic programs to the most advanced IT training in programming languages,we have got you at Florintech computer college. Our courses includes but not limited to the list of courses: Web development Office training Computer training amongst others. Still have some hesitations whether cooperation with us is worth the trouble? Check the benefits of choosing us among others."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Box listStyleType="none" textDecoration="none" m={0}>
        <Header />
        <Slider />
        <Box
          className="page-main-content"
          padding={{ base: "10px", sm: "10px", md: "40px", lg: "50px" }}
        >
          <Why />
          <Trending />
          <Testimonial />
        </Box>
        <NewsLetter />
        <Footer />
      </Box>
    </div>
  );
}
