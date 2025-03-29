import React from "react";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import About from "../Components/About/About";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Image from "next/image";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
function Aboutus() {
  return (
    <Box className="about-container-overall">
       <DefaultSeo {...SEO}
        title="About Us | Florintech computer college"
        description="Florintech Computer College about us Page"
        canonical = 'https://www.florintechcomputercollege.com/aboutus/'
        openGraph={{
          url: "https://www.florintechcomputercollege.com/aboutus/",
          title: "About Us | Florintech Computer College",
          description: "Florintech Computer College About us Page",

          siteName: "Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/logo.jpg",
              width: 800,
              height: 600,
              alt: "Florintech Comuter College",
              type: "image/jpeg",
            },
          ],
        }}
         />
      <Head>
        <title>About Us | Florintech Computer College</title>
        <meta
          name="About Us"
          content="Florintech Computer College is a leading institution in Lagos, Nigeria, dedicated to providing high-quality education and training in the field of technology. With a focus on practical, hands-on learning, we equip our students with the skills and knowledge necessary to excel in today's digital world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner
        pageName="About Us"
        pageDetails="Florintech Computer College stands out as a leading institution in Lagos, Nigeria, dedicated to providing top-notch education and training in technology. As a trusted computer school in Ojo, we pride ourselves on delivering a curriculum that emphasizes practical, hands-on learning to prepare our students for success in today’s competitive digital landscape.

At Florintech Computer College, we are committed to equipping our students with the skills and knowledge they need to thrive in the ever-evolving tech industry. Whether you're taking your first steps into the world of technology or looking to advance your career, our programs are designed to meet your needs and help you achieve your goals.

Join us at the foremost computer school in Lagos and experience a learning environment where innovation meets excellence. Your journey to mastering technology starts here."
      />
      <Box className="about-container">
        <p style={{ fontSize: "19px" }}>
        At Florintech College, we are passionate about delivering exceptional education and training across various fields. Our mission is to inspire curiosity, foster creativity, and nurture critical thinking in a learning environment that is both engaging and challenging.

Our esteemed faculty comprises experienced professionals who bring a wealth of industry expertise and academic excellence into the classroom. Their dedication ensures that our students not only achieve their academic aspirations but also excel in their careers.

We take immense pride in our vibrant and diverse student body, which represents individuals from all walks of life and cultural backgrounds. Together, we create a supportive and inclusive community where everyone can thrive.



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
        alignItems="center"
        flexWrap="wrap"
        flexDirection={{
          base: "row",
          sm: "row",
          md: "row",
          lg: "row",
        }}
        className="card-content-card"
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
          <h2>15</h2>
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
