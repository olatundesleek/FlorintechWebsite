import React from "react";
import { Box, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Header from "../Components/Header";
import TutorialCard from "../Components/TutorialCard";
import Footer from "../Components/Footer";
import { videoCon } from "../Components/TutorialData";
import Banner from "../Components/Banner";

const Tutorial = () => {
  return (
    <Box>
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

export default Tutorial;
