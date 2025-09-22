import React, { useState, useEffect, useRef } from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NewsLetter from "../../Components/NewsLetter";
// import Faq from "../../Components/Faq/Faq";
import Footer from "../../Components/Footer";
import { FaPlay, FaAward } from "react-icons/fa";
import { BsFileEarmarkFill, BsFileMinusFill } from "react-icons/bs";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoIosPricetag } from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import { TiArrowSync } from "react-icons/ti";
import AboutTeacher from "../../Components/AboutTeacher";
import { SiGoogleclassroom } from "react-icons/si";

const Singlecourse = ({
  //passed the below items as props
  coursePrice,
  courseTitle,
  courseImage,
  aboutCourseText,
  courseDuration,
  courseOutline,
  classType,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const [fixedTop, setFixedTop] = useState(0); // To store the original top offset
  const divRef = useRef(null);
  const [fixedLeft, setFixedLeft] = useState(0); // Store left offset for fixed position
  const [fixedRight, setFixedRight] = useState(0);

  const handleScroll = () => {
    if (divRef.current) {
      // Calculate the element's position relative to the viewport (including scrolling)
      const divTop =
        divRef.current.getBoundingClientRect().top + window.scrollY;

      // If the scroll position has reached the element's top, make it fixed
      if (window.scrollY >= fixedTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  };

  //   useEffect(() => {
  //     if (divRef.current) {
  //       // Calculate the original top, left, and right positions relative to the container and the document
  //       const divTop = divRef.current.getBoundingClientRect().top + window.scrollY;
  //       const divLeft = divRef.current.getBoundingClientRect().left; // Get left relative to the viewport
  //       const divRight = window.innerWidth - divRef.current.getBoundingClientRect().right; // Calculate right offset
  // console.log(divTop);

  //       setFixedTop(divTop);
  //       setFixedLeft(divLeft);
  //       setFixedRight(divRight);
  //     }

  //     if (divRef.current) {
  //       // Set the element's original top position when the component mounts
  //       const divTop = divRef.current.getBoundingClientRect().top + window.scrollY;
  //       setFixedTop(divTop);
  //     }

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, [fixedTop]);

  return (
    <div>
      <section className="single-course-container">
        <div className="single-course-inner">
          <div className="single-course-content">
            <Box>
              <h1 className="single-page-ads">{courseTitle}</h1>
              {/* <p>{courseDetails}</p> */}
              <img
                src={courseImage}
                className="single-page-image"
                alt="course image"
              />
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
              <h1 className="about-teacher-title-sec">Course Outline </h1>
              <div className="last-text">
                {/* <br /> */}

                <ol className="single-list-two">
                  {courseOutline.map((outline, index) => {
                    return <li key={index}>{outline}</li>;
                  })}
                </ol>
              </div>
            </Box>
          </div>

          <Box className="course-info-container">
            <Box
              className={`course-info ${isFixed ? "fixed" : ""}`}
              ref={divRef}
              style={{
                top: isFixed ? `${fixedTop}px` : "auto", // Dynamic top positioning
                left: isFixed ? `${fixedLeft}px` : "auto", // Dynamic left positioning
                right: isFixed ? `${fixedRight}px` : "auto", // Dynamic right positioning
              }}
            >
              {/* the "what is include part of the single course page " */}
              <Box
                boxShadow="md"
                rounded="md"
                bg="white"
                p="0rem 2rem 2rem 2rem"
                m={{ base: "20px 0" }}
              >
                <div className="about-teacher-title-sec">
                  Course Information
                </div>

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
                    {courseDuration}
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
                <Flex alignItems="center">
                  <SiGoogleclassroom />
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
                    {classType}
                  </Text>
                </Flex>
                <Flex alignItems="center">
                  <IoIosPricetag />
                  <Text
                    display={"flex"}
                    alignItems={"center"}
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
                    <TbCurrencyNaira />
                    {coursePrice}
                  </Text>
                </Flex>
                <Link legacyBehavior href="/register">
                  <button className="course-cart-button">Register Now </button>
                </Link>
              </Box>
            </Box>
          </Box>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Singlecourse;
