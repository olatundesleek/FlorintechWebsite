import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Header from "../Header";

const About = () => {
  return (
    <>
      <div className="">
        <Head>
          <title>About | Florintech Computer College</title>
          <meta
            name="courses"
            content="you can select from our wide range of courses"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
      </div>
    </>
  );
};

export default About;
