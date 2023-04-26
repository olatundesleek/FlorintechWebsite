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
  coursePrice,
  courseTitle,
  courseImage,
  aboutCourseText,
  courseDuration,
  courseOutline,
}) => {
  return (
    <div>
      <section className="single-course-container">
        <div className="single-course-inner">
          <div className="single-course-content">
            <Box>
              <h1 className="single-page-ads">{courseTitle}</h1>
              {/* <p>{courseDetails}</p> */}
              <img src={courseImage} className="single-page-image" />
            </Box>
            {/* the about teacher */}
            {/* <AboutTeacher
              teacherTitle="About the teacher"
              teacherName="JOHN SMILGA"
              teacherText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quas Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, officiis.
            ipsum ducimus inventore totam corporis unde."
            /> */}
            {/* end of about teacher */}
            <Box>
              <h3 className="about-teacher-title-sec">
                What’s this course about?
              </h3>
              <div>
                <p>{aboutCourseText}</p>

                {/* <p>{aboutCourseTextTwo}</p> */}
              </div>
            </Box>
            {/* <Box boxShadow="md" rounded="md" bg="white">
              <img src={courseImage} className="single-page-image" />
              <div style={{ padding: "2.5rem 0" }}>
                <p>{secondImageText}</p>
              </div>
            </Box> */}
            <Box>
              <h1 className="about-teacher-title-sec">What you’ll learn </h1>
              <div className="last-text">
                {/* <br /> */}

                <ul className="single-list-two">
                  {courseOutline.map((outline, index) => {
                    return <li key={index}>{outline}</li>;
                  })}
                </ul>
              </div>
           
            </Box>
          </div>
         

          <Box>
            <div className="single-course-content-two">
              <div className="about-teacher-title-sec">
                Register for this Course
              </div>

              <div className="course-amount">
                <span className="amount">{coursePrice}Naira</span>
              </div>
              <Link legacyBehavior href="/register">
                <button className="course-cart-button">Register Now </button>
              </Link>
            </div>
            {/* the "what is include part of the single course page " */}
            <Box boxShadow="md" rounded="md" bg="white" p="0rem 2rem 2rem 2rem">
              <div className="about-teacher-title-sec">What’s included?</div>

              <Flex alignItems="center">
                <BsFileEarmarkFill />
                <Text
                  fontSize={{
                    base: "20px",
                    sm: "20px",
                    md: "25px",
                    lg: "25px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={500}
                >
                  Downloadable Files
                </Text>
              </Flex>
              <Flex alignItems="center">
                <BiTimeFive />
                <Text
                  fontSize={{
                    base: "20px",
                    sm: "20px",
                    md: "25px",
                    lg: "25px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={500}
                >
                  Duration:
                  <bold className="about-teacher-title">{courseDuration}</bold>
                </Text>
              </Flex>
              <Flex alignItems="center">
                <BsFileMinusFill />
                <Text
                  fontSize={{
                    base: "20px",
                    sm: "20px",
                    md: "25px",
                    lg: "25px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={500}
                >
                  Access Anywhere
                </Text>
              </Flex>
              <Flex alignItems="center">
                <FaAward />
                <Text
                  fontSize={{
                    base: "20px",
                    sm: "20px",
                    md: "25px",
                    lg: "25px",
                  }}
                  color="gray"
                  ml={8}
                  fontWeight={500}
                >
                  Certificate of Completion
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
