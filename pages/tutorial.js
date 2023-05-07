import React from "react";
import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Header from "../Components/Header";
import TutorialCard from "../Components/TutorialCard";
import Footer from "../Components/Footer";
import { videoCon } from "../Components/TutorialData";
import Banner from "../Components/Banner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const tutorial = () => {
  return (
    <Box>
       <DefaultSeo  {...SEO} 
        title="Tutorial | Florintech computer college"
        description="This is free tutorial page for florintech computer college"
        canonical = 'https://www.florintechcomputercollege.com/tutorial/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/tutorial/",
          title: "Tutorial | Florintech Computer College",
          description: "This is a free tutorial page for florintech computer college",
         
          siteName: "Florintech Computer College",
        }}
       
         />
      <Header />
      <Box className="wrapper-video">
        <Banner pageName="Tutorial" pageDetails="learn something new today" />
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

export default tutorial;
