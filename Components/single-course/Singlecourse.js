import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NewsLetter from "../../Components/NewsLetter";
// import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer";
import { FaPlay, FaAward } from "react-icons/fa";
import { BsFileEarmarkFill, BsFileMinusFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { TiArrowSync } from "react-icons/ti";
import AboutTeacher from "../../Components/AboutTeacher";

const Singlecourse = ({
  //passed the below items as props
  courseTitle,
  courseDetails,
  courseImage,
  aboutCourseText,
  listOne,
  listTwo,
  listThree,
  aboutCourseTextTwo,
  whatToLearnText,
  whatToLearnListOne,
  whatToLearnListTwo,
  whatToLearnListThree,
  whatToLearnListFour,
  whatToLearnListFive,
  whatToLearnListSix,
  secondImageText,
}) => {
  return (
    <div>
      <section className="single-course-container">
        <div className="single-course-inner">
          <div className="single-course-content">
            <Box>
              <h1 className="single-page-ads">{courseTitle}</h1>
              <p>{courseDetails}</p>
              <img src={courseImage} className="single-page-image" />
            </Box>
            {/* the about teacher */}
            <AboutTeacher
              teacherTitle="About the teacher"
              teacherName="JOHN SMILGA"
              teacherText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officiis.
            ipsum ducimus inventore totam corporis unde."
            />
            {/* end of about teacher */}
            <Box>
              <h1 className="about-teacher-title-sec">
                What’s this course about?
              </h1>
              <div>
                <p>{aboutCourseText}</p>
                <br />
                <ul className="single-list">
                  <li>{listOne}</li>

                  <li>{listTwo}</li>
                  <li>{listThree}</li>
                </ul>
                <br />
                <p>{aboutCourseTextTwo}</p>
              </div>
            </Box>
            <Box boxShadow="md" rounded="md" bg="white">
              <img src={courseImage} className="single-page-image" />
              <div style={{ padding: "2.5rem 0" }}>
                <p>{secondImageText}</p>
              </div>
            </Box>
            <Box>
              <h1 className="about-teacher-title-sec">What you’ll learn </h1>
              <div className="last-text">
                <p>{whatToLearnText}</p>
                <br />
                <ul className="single-list-two">
                  <li>{whatToLearnListOne}</li>
                  <li>{whatToLearnListTwo}</li>

                  <li>{whatToLearnListThree}</li>

                  <li>{whatToLearnListFour}</li>

                  <li>{whatToLearnListFive}</li>

                  <li>{whatToLearnListSix}</li>
                </ul>
              </div>
              <div className="join-class-container">
                <Link href="/" className="join-class">
                  <a>Join the Class </a>
                </Link>
              </div>
            </Box>
          </div>
          {/* the right side of the single page of the courses */}

          <Box>
            <div className="single-course-content-two">
              <div className="about-teacher-title-sec">Get this Course</div>
              <div className="content">
                Augue neque gravida in fermentum et sollicitudin ac orci. Velit
                egestas dui id
              </div>

              <div className="course-amount">
                <span className="amount"> $ 699.00 USD</span>
                <span className="discount">$ 1,200.00 USD</span>
              </div>
              <button className="course-cart-button">Join the Class </button>
            </div>
            {/* the "what is include part of the single course page " */}
            <Box boxShadow="md" rounded="md" bg="white" p="0rem 2rem 2rem 2rem">
              <div className="about-teacher-title-sec">What’s included?</div>
              <Flex alignItems="center">
                <FaPlay />
                <Text
                  fontSize={{
                    base: "25px",
                    sm: "25px",
                    md: "30px",
                    lg: "30px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={700}
                >
                  Video's: <bold className="about-teacher-title">6</bold>
                </Text>
              </Flex>
              <Flex alignItems="center">
                <BsFileEarmarkFill />
                <Text
                  fontSize={{
                    base: "25px",
                    sm: "25px",
                    md: "30px",
                    lg: "30px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={700}
                >
                  Downloadable Files:
                  <bold className="about-teacher-title">6</bold>
                </Text>
              </Flex>
              <Flex alignItems="center">
                <BiTimeFive />
                <Text
                  fontSize={{
                    base: "25px",
                    sm: "25px",
                    md: "30px",
                    lg: "30px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={700}
                >
                  Duration:
                  <bold className="about-teacher-title">5hr 40min</bold>
                </Text>
              </Flex>
              <Flex alignItems="center">
                <BsFileMinusFill />
                <Text
                  fontSize={{
                    base: "25px",
                    sm: "25px",
                    md: "30px",
                    lg: "30px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={700}
                >
                  Access Anywhere
                </Text>
              </Flex>
              <Flex alignItems="center">
                <FaAward />
                <Text
                  fontSize={{
                    base: "23px",
                    sm: "23px",
                    md: "30px",
                    lg: "30px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={700}
                >
                  Certificate of Completion
                </Text>
              </Flex>
              <Flex alignItems="center">
                <TiArrowSync />
                <Text
                  fontSize={{
                    base: "25px",
                    sm: "25px",
                    md: "30px",
                    lg: "30px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={700}
                >
                  Lifetime Access
                </Text>
              </Flex>
            </Box>
          </Box>
        </div>
      </section>
      {/* <Faq /> */}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Singlecourse;
