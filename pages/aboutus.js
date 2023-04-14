import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import About from "../Components/About/About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
function Aboutus() {
  return (
    <Box>
      <Head>
        <title>About Us | Florintech Computer College</title>
        <meta
          name="courses"
          content="you can select from our wide range of courses"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Banner
        pageName="Abous Us"
        pageDetails="find out about us and our core values"
      />
      <Box className="faq-container">
        <p style={{ fontSize: "19px" }}>
          Welcome to Florintech College, where we are committed to providing
          high-quality education and training in the field of floriculture and
          horticulture. At Florintech College, we believe that education should
          be both engaging and challenging, and we strive to create an
          environment that fosters curiosity, creativity, and critical thinking.
          Our faculty consists of experienced professionals who bring a wealth
          of knowledge and expertise to the classroom, and we are dedicated to
          helping our students achieve their academic and career goals.
        </p>
        <p style={{ fontSize: "19px" }}>
          we understand that many of our students have busy lives outside of
          school. That's why we offer flexible scheduling options, including
          online courses and evening classes, to accommodate a variety of
          lifestyles. We also offer personalized academic advising, tutoring
          services, and career counseling to help students stay on track and
          achieve their goals. In addition to our academic programs, Florintech
          College offers a range of extracurricular activities and clubs,
          including student government, athletics, and community service
          projects. These activities provide students with opportunities to
          build their leadership skills, make new friends, and give back to
          their communities. We are proud of our diverse student body, which
          includes students from all walks of life and backgrounds.
        </p>
      </Box>
      <About />
      <Footer />
    </Box>
  );
}

export default Aboutus;
