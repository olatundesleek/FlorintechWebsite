import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { reviewData } from "./testimonialData";
import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { transform } from "framer-motion";

function Testimonial() {
  const [slideIndex, setSlideIndex] = useState(0);

  setTimeout(() => {
    if (slideIndex > reviewData.length - 2) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }, 5000);

  return (
    <Box marginTop="150px" id="testimonial">
      <h2 className="testimonial-title">Testimonial</h2>
      <Flex justifyContent="center">
        <Flex justifyContent="center" className="testimonial-slider-container">
          <Flex width="100%">
            {reviewData.map((data, index) => {
              return (
                <Box
                  key={index}
                  className="testimonial-slide"
                  transform="auto"
                  translateX={-slideIndex + "00%"}
                >
                  <Flex>
                    <Flex className="leftquote">
                      <FaQuoteLeft className="quote" />
                    </Flex>
                    <h2>{data.review}</h2>
                    <Flex className="rightquote">
                      <FaQuoteRight className="quote" />
                    </Flex>
                  </Flex>
                  <Flex justifyContent="center" marginTop="50px">
                    {" "}
                    <Image
                      className="testimonial-image"
                      src={data.photo}
                      width="80"
                      height="80"
                    />
                  </Flex>
                  <h2 color="#ffffff">{data.name}</h2>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Testimonial;
