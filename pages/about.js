import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import About from "../Components/About/About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const about = () => {
  return (
    <div>
      <Head>
        <title>About | Florintech Computer College</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Box className="faq-container">
        <h3>ABOUT US</h3>
        <h1>IT solution at it's best.The Future</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          aspernatur voluptatem commodi quis. Dolorem nulla officiis quae ullam?
          Mollitia cumque odio, laborum in molestias itaque sed deserunt illum
          accusantium blanditiis dolore adipisci perferendis atque quia eum
          reiciendis hic quidem perspiciatis.
        </p>
      </Box>
      <About />
      <Footer />
    </div>
  );
};

export default about;
