import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import About from "../Components/About/About";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";

const faq = () => {
  return (
    <>
      <Head>
        <title>Faq | Florintech Computer College</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Banner pageName="FAQ" pageDetails="frequently asked questions" />
     
      <Faq />
     
      <Footer />
    </>
  );
};

export default faq;
