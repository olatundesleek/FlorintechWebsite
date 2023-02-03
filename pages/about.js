import React from "react";
import Head from "next/head";
import About from "../Components/About/About";
import Header from "../Components/Header";

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
      <About />
    </div>
  );
};

export default about;
