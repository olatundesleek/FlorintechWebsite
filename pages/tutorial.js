import React from "react";
import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Header from "../Components/Header";
import TutorialCard from "../Components/TutorialCard";
import Footer from "../Components/Footer";
import { videoCon } from "../Components/TutorialData";
import Banner from "../Components/Banner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const Tutorial = () => {
  return (
    <Box>
       <DefaultSeo  {...SEO} 
        title="Tutorial | Florintech computer college"
        description="This is free tutorial page for florintech computer college"
        canonical = 'https://www.florintechcomputercollege.com/tutorial/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/tutorial/",
          title: "Tutorial | Florintech Computer College",
          description: "Welcome to Florintech Computer College tutorial page, your gateway to mastering essential tech skills. As a premier computer school in Lagos, we offer a wide range of tutorials designed to help you excel in various fields, including web development, UI/UX design, digital marketing, and more",
         
          siteName: "Florintech Computer College",
        }}
       
         />
      <Header />
      <Box className="wrapper-video">
        <Banner pageName="Tutorial" pageDetails="Welcome to Florintech Computer College tutorial page, your gateway to mastering essential tech skills. As a premier computer school in Lagos, we offer a wide range of tutorials designed to help you excel in various fields, including web development, UI/UX design, digital marketing, and more.

Our tutorials are crafted by industry experts and provide step-by-step guidance to ensure you gain practical knowledge and hands-on experience. Whether you're a beginner or looking to enhance your skills, our tutorials cater to all levels.

Explore our tutorials and start learning today at Florintech Computer College, the top computer school in Ojo." />
        {videoCon.map(({ img, textbtn, paragraph, title, index, to }) => {
          return (
            <TutorialCard
              key={index}
              img={img}
              info={paragraph}
              title={title}
              to={to}
            >
              {textbtn}
            </TutorialCard>
          );
        })}
      </Box>
      <Footer />
    </Box>
  );
};

export default Tutorial;
