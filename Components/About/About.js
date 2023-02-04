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
          <Flex justifyContent="around">
            <Image
              src={aboutUs}
              alt="About Us Image"
              width={550}
              height={550}
            />
            <Box className="about__container__text">
              <h3>ABOUT US</h3>
              <h1>OUR MISSION</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium, explicabo? Laudantium, sed blanditiis modi optio
                cupiditate unde ut necessitatibus, pariatur iste quis explicabo
                architecto labore debitis officia ipsam natus molestias quas
                ullam saepe? Eveniet culpa delectus reprehenderit ut vitae atque
                provident saepe aperiam praesentium? Natus accusamus, voluptate
                temporibus magni quo amet, perferendis commodi aut error
                doloribus ex at nostrum deserunt!
              </p>
              <h3>Founder/CEO</h3>
            </Box>
          </Flex>
        </Box>
        {/* end of the about page  and begin the award */}
        <Flex justifyContent="center">
          <Box className="award__class">
            <h2>2 345</h2>
            <p>Certificates Awards</p>
          </Box>
          <Box className="award__class">
            <h2>6 320</h2>
            <p>Dedicated Teachers</p>
          </Box>
          <Box className="award__class">
            <h2>1 045</h2>
            <p>Successful Campaign</p>
          </Box>
          <Box className="award__class">
            <h2>3 305</h2>
            <p>Dedicated Volunteers</p>
          </Box>
        </Flex>
        {/* begin of the textimonail row */}
        <Box className="about__client">
          <h2>Our Client's Stories</h2>
          <Box className="about-container container2">
            <Flex justifyContent="around">
              <Image
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
          </Box>
        </Box>
        <div className="about__banner">
          <Image
            className="banner__img"
            src="/images/computerprogramming.jpg"
            alt="Cartoon graduates jump with happiness"
            quality="100"
            layout="responsive"
            position="relative"
            height="40vh"
            width="100%"
          />
          <Box className="about__banner__text">
            <h2> Building a Better Future</h2>
            <p>
              Help us safeguard the air we breathe, the water we drink, and the
              places we treasure.
            </p>
            <Link href="/contact" passHref>
              <button className="about__btn">CONTACT US</button>
            </Link>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default About;
