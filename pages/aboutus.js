import React from "react";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import About from "../Components/About/About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Image from "next/image";
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
      <Box className="about-container">
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
          school. That is why we offer flexible scheduling options, including
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
      <Box className="about-container">
        <Flex
          justifyContent="around"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Image
            src="/images/mission.webp"
            alt="About Us Image"
            width={550}
            height={550}
          />
          <Box className="about__container__text">
            <h3>OUR MISSION</h3>
            <p>
              Our mission is centered on three key pillars: innovation,
              excellence, and community. We believe that these values are
              essential to achieving our goal of producing highly skilled and
              competent graduates who are ready to take on the challenges of the
              technology industry. Innovation is at the heart of our mission, as
              we strive to stay at the forefront of technological advancements
              and trends. We are committed to providing our students with access
              to the latest tools, resources, and technologies, so that they can
              develop the skills and knowledge needed to succeed in the
              ever-evolving technology landscape. Excellence is another key
              pillar of our mission. We hold ourselves to the highest standards
              of academic rigor and excellence, and we are dedicated to ensuring
              that our students receive the best possible education and
              training. Our faculty is made up of experienced professionals and
              experts in their respective fields, who are passionate about
              teaching and mentoring the next generation of tech professionals.
            </p>
          </Box>
        </Flex>
      </Box>
      {/* end of the about page  and begin the award */}
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        flexDirection={{
          base: "row",
          sm: "row",
          md: "row",
          lg: "row",
        }}
      >
        <Box className="award__class">
          <h2>45</h2>
          <p>Certificates & Awards</p>
        </Box>
        <Box className="award__class">
          <h2>10</h2>
          <p>Dedicated Teachers</p>
        </Box>
        <Box className="award__class">
          <h2>13</h2>
          <p>Courses</p>
        </Box>
        {/* <Box className="award__class">
            <h2>3 305</h2>
            <p>Dedicated Volunteers</p>
          </Box> */}
      </Flex>
      {/* <About /> */}
      <Footer />
    </Box>
  );
}

export default Aboutus;
