import React from "react";
import images from "../images.json";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NewsLetter from "./../NewsLetter";
import Footer from "./../Footer/Footer";
import { FaPlay, FaAward } from "react-icons/fa";
import { BsFileEarmarkFill, BsFileMinusFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { TiArrowSync } from "react-icons/ti";
import AboutTeacher from "../AboutTeacher";
const businesselectronicaccounting = images[4].businesselectronicaccounting;

const Singlecourse = (props) => {
  return (
    <div>
      <section className="single-course-container">
        <div className="single-course-inner">
          <div className="single-course-content">
            <Box>
              {/* <h1 className="single-page-ads">{props.title}</h1> */}
              <h1 className="single-page-ads">
                Ultimate Facebook Ads Advance Course
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sem at tortor egestas posuere sed
              </p>
              <img
                src={businesselectronicaccounting}
                className="single-page-image"
              />
            </Box>
            {/* the about teacher */}
            <AboutTeacher />
            {/* <advancedgraphicsdesign/> */}
            <Box>
              <h1 className="about-teacher-title-sec">
                What’s this course about?
              </h1>
              <div>
                <p>
                  Lorem ipsum dolor <strong>sit amet consectetur </strong>
                  adipisicing elit. Cupiditate adipisci fuga nam veniam
                  perferendis,
                  <strong> quidem recusandae cum voluptatem</strong>
                  debitis. Enim omnis illum laboriosam dolorem blanditiis neque
                  repellat voluptas! Enim, autem?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor <strong>sit amet consectetur</strong>
                  adipisicing elit. Autem voluptate et maiores quasi amet iste
                  sunt eligendi <strong>repudiandae </strong>quisquam
                  consequatur!
                </p>
                <br />
                <ul className="single-list">
                  <li>
                    Lorem ipsum dolor sit amet <strong>consectetur</strong>
                    adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum <strong>dolor sit amet</strong> consectetur
                    adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur
                    <strong>adipisicing elit</strong>.
                  </li>
                </ul>
                <br />
                <p>
                  Lorem ipsum dolor sit <strong>amet consectetur</strong>
                  adipisicing elit. Optio atque nulla veritatis dolorem esse ad
                  quibusdam <strong>ipsam doloribus</strong>, dolor vero
                  voluptates alias porro mollitia architecto ex magni magnam?
                  Aut, consequatur.
                </p>
              </div>
            </Box>
            <Box boxShadow="md" rounded="md" bg="white">
              {/* <img src={autocadspecialist} className="single-page-image" /> */}
              <div style={{ padding: "2.5rem 0" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum reiciendis cupiditate asperiores nulla hic quidem ab,
                  voluptatem voluptatibus accusamus ea est eum soluta maiores
                  deleniti ratione laudantium. Modi, sequi quasi.
                </p>
              </div>
            </Box>
            <Box>
              <h1 className="about-teacher-title-sec">What you’ll learn</h1>
              <div className="last-text">
                <p>
                  Lorem ipsum dolor <strong>sit amet consectetur </strong>
                  adipisicing elit. Cupiditate adipisci fuga nam veniam
                  perferendis,
                  <strong> quidem recusandae cum voluptatem</strong>
                  debitis. Enim omnis illum laboriosam dolorem blanditiis neque
                  repellat voluptas! Enim, autem?
                </p>
                <br />
                <ul className="single-list-two">
                  <li>
                    Lorem ipsum dolor sit amet <strong>consectetur</strong>
                    adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum <strong>dolor sit amet</strong> consectetur
                    adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur
                    <strong>adipisicing elit</strong>.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur
                    <strong>adipisicing elit</strong>.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur
                    <strong>adipisicing elit</strong>.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur
                    <strong>adipisicing elit</strong>.
                  </li>
                </ul>
              </div>
              <Link href="/" className="join-class">
                <a>Join the Class</a>
              </Link>
            </Box>
          </div>
          {/* the right side of the single page of the courses */}
          {/* <div> */}
          <Box>
            <div className="single-course-content-two">
              <div className="course-header">Get this Course</div>
              <div className="content">
                Augue neque gravida in fermentum et sollicitudin ac orci. Velit
                egestas dui id
              </div>
              <div>
                <select id="select-courses" className="select-course">
                  <option selected>Course</option>
                </select>
              </div>
              <div className="course-amount">
                <span className="amount"> $ 699.00 USD</span>
                <span className="discount">$ 1,200.00 USD</span>
              </div>
              <button className="course-cart-button">Add to cart</button>
            </div>
            {/* the "what is include part of the single course page " */}
            <Box boxShadow="md" rounded="md" bg="white" p="0rem 2rem 2rem 2rem">
              <div className="about-teacher-title-sec">What’s included?</div>
              <Flex alignItems="center">
                <FaPlay />
                <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
                  Video's: <bold className="about-teacher-title">6</bold>
                </Text>
              </Flex>
              <Flex alignItems="center">
                <BsFileEarmarkFill />
                <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
                  Downloadable Files:{" "}
                  <bold className="about-teacher-title">6</bold>
                </Text>
              </Flex>
              <Flex alignItems="center">
                <BiTimeFive />
                <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
                  Duration:{" "}
                  <bold className="about-teacher-title">5hr 40min</bold>
                </Text>
              </Flex>
              <Flex alignItems="center">
                <BsFileMinusFill />
                <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
                  Access Anywhere
                </Text>
              </Flex>
              <Flex alignItems="center">
                <FaAward />
                <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
                  Certificate of Completion
                </Text>
              </Flex>
              <Flex alignItems="center">
                <TiArrowSync />
                <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
                  Lifetime Access
                </Text>
              </Flex>
            </Box>
          </Box>
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Singlecourse;
