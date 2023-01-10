import React from "react";
import images from "../images.json";
import { Box } from "@chakra-ui/react";
const autocadspecialist = images[3].autocadspecialist;
const businesselectronicaccounting = images[4].businesselectronicaccounting;

function Singlecourse() {
  return (
    <div>
      <section className="single-course-container">
        <div className="single-course-inner">
          <div className="single-course-content">
            <Box>
              <h1>Ultimate Facebook Ads Advance Course </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sem at tortor egestas posuere sed
              </p>
              <img src={autocadspecialist} className="single-page-image" />
            </Box>
            <Flex>
              <img src={businesselectronicaccounting} alt="Person"  className="person-image" />
            </Flex>
          </div>
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
      </section>
    </div>
  );
}

export default Singlecourse;
