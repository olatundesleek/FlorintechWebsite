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
const SiteFaq = () => {
  return (
    <>
     <DefaultSeo  {...SEO}
        title="FAQ | Florintech Computer College"
        description="Frequently Asked Questions"
        canonical = 'https://www.florintechcomputercollege.com/faq/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/faq/",
          title: "FAQ | Florintech computer college",
          description: "Frequently Asked Questions",

          siteName: "Florintech Computer College",
        }}
       
        {...SEO}  />
      <Head>
        <title>Faq | Florintech Computer College</title>
        <meta
          name="FAQ"
          content="Frequently asked Questions"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Banner pageName="FAQ" pageDetails="Welcome to FlorinTech Computer College's FAQ section! Here, we aim to provide you with answers to some of the most common questions prospective students and parents may have about our institution. If you have any additional questions, please don't hesitate to contact our admissions team for more information." />
     
      <Faq />
     
      <Footer />
    </>
  );
};

export default SiteFaq;
