import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
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
      </Box>
    </>
  );
};

export default About;
