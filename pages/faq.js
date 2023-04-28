import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import About from "../Components/About/About";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
const faq = () => {
  return (
    <>
     <DefaultSeo
        title="FAQ | Florintech Computer College"
        description="Frequently Asked Questions"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/register/",
          title: "FAQ | Florintech computer college",
          description: "Frequently Asked Questions",

          siteName: "Florintech Computer College",
        }}
       
        {...SEO}  />
      <Head>
        <title>Faq | Florintech Computer College</title>
        <meta
          name="courses"
          content="Frequently asked Questions"
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
