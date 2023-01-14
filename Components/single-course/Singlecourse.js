import React from "react";
import images from "../images.json";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NewsLetter from "./../NewsLetter";
import Footer from "./../Footer/Footer";
import { FaPlay } from "react-icons/fa";
import { BsFileEarmarkFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
const autocadspecialist = images[3].autocadspecialist;
const businesselectronicaccounting = images[4].businesselectronicaccounting;

function Singlecourse() {
  return (
    <div>
      <section className="single-course-container">
        <div className="single-course-inner">
          <div className="single-course-content">
            <Box>
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
            <Flex
              justify="space-around"
              mt={10}
              className="about-teacher-container"
              boxShadow="md"
              rounded="md"
              bg="white"
            >
              <Box>
                <img
                  src={autocadspecialist}
                  alt="Person"
                  className="person-image"
                />
              </Box>
              <Box className="about-teacher">
                <h1 className="about-teacher-title">About the teacher</h1>
                <p mt={5}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quasi quas ipsum ducimus inventore totam corporis unde.
                </p>
                <Link href="/" className="about-link">
                  <a>Learn more</a>
                </Link>
              </Box>
            </Flex>

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
              <img src={autocadspecialist} className="single-page-image" />
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
          <div>
            <div className="single-course-content-two">
              <div className="header">Get this Course</div>
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
          </div>
        </div>
        {/* the "what is include part of the single course page " */}
        <Box>
          <div className="about-teacher-title-sec">What’s included?</div>
          <Flex justify="center" alignItems="center">
            <FaPlay />
            <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
              Video's: 6
            </Text>
          </Flex>
          <Flex justify="center" alignItems="center">
            <BsFileEarmarkFill />
            <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
              Downloadable Files: 6
            </Text>
          </Flex>
          <Flex justify="center" alignItems="center">
            <BiTimeFive />
            <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
              Duration: 5hr 40min
            </Text>
          </Flex>
          <Flex justify="center" alignItems="center">
            <FaPlay />
            <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
              Access Anywhere
            </Text>
          </Flex>
          <Flex justify="center" alignItems="center">
            <FaPlay />
            <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
              Certificate of Completion
            </Text>
          </Flex>
          <Flex justify="center" alignItems="center">
            <FaPlay />
            <Text fontSize="30px" color="gray" ml={8} fontWeight={700}>
              Lifetime Access
            </Text>
          </Flex>
        </Box>
      </section>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Singlecourse;
