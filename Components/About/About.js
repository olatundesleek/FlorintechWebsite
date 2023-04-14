import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import aboutUs from "../../public/images/2.jpeg";
import aboutUs2 from "../../public/images/businesselectronicaccounting.jpg";
import React from "react";

const About = () => {
  return (
    <>
      <Box>
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
                competent graduates who are ready to take on the challenges of
                the technology industry. Innovation is at the heart of our
                mission, as we strive to stay at the forefront of technological
                advancements and trends. We are committed to providing our
                students with access to the latest tools, resources, and
                technologies, so that they can develop the skills and knowledge
                needed to succeed in the ever-evolving technology landscape.
                Excellence is another key pillar of our mission. We hold
                ourselves to the highest standards of academic rigor and
                excellence, and we are dedicated to ensuring that our students
                receive the best possible education and training. Our faculty is
                made up of experienced professionals and experts in their
                respective fields, who are passionate about teaching and
                mentoring the next generation of tech professionals.
              </p>
            </Box>
          </Flex>
        </Box>
        {/* end of the about page  and begin the award */}
        <Flex
          justifyContent="center"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
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
        {/* begin of the textimonail row */}
        <Box className="about__client">
          {/* <h2>Our Clients Stories</h2> */}
          {/* <Box className="about-container container2">
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
                className="about__image"
                src={aboutUs2}
                alt="About Us Image"
                width={550}
                height={550}
              />
              <Box className="about__container__text ">
                <h3>#HARDFACT</h3>
                <h1> CHANGING THE FUTURE</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Praesentium, explicabo? Laudantium, sed blanditiis modi optio
                  cupiditate unde ut necessitatibus, pariatur iste quis
                  explicabo architecto labore debitis officia ipsam natus
                  molestias quas ullam saepe? Eveniet culpa delectus
                  reprehenderit ut vitae atque provident saepe aperiam
                  praesentium? Natus accusamus, voluptate temporibus magni quo
                  amet, perferendis commodi aut error doloribus ex at nostrum
                  deserunt!
                </p>
                <h3>Mrs Smith ERICK</h3>
              </Box>
            </Flex>
          </Box> */}
        </Box>
        {/* <div className="about__banner">
          <Image
            className="banner__img"
            src="/images/mission.webp"
            alt="Cartoon graduates jump with happiness"
            quality="100"
            layout="responsive"
            position="relative"
            height="60vh"
            width="100%"
          />
          <Box className="about__banner__text">
            <h2> Building a Better Future</h2>
            <p>
              Help us safeguard the air we breathe, the water we drink, and the
              places we treasure.
            </p>
            <Link href="/contactus">
              <button className="about__btn">CONTACT US</button>
            </Link>
          </Box>
        </div> */}
      </Box>
    </>
  );
};

export default About;
