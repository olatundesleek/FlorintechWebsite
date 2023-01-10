import React from "react";
import images from "../images.json";
import { Box, Flex, Link } from "@chakra-ui/react";
import imgesing from "../../public/images/imageaboutcourse.svg";
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
                Ultimate Facebook Ads Advance Course{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                sem at tortor egestas posuere sed
              </p>
              <img
                src={businesselectronicaccounting}
                className="single-page-image"
              />
              {/* <img src={imgesing} className="single-page-image" /> */}
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
              <h1 className="about-teacher-title-sec">What’s this course about?</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate adipisci fuga nam veniam perferendis, quidem
                  recusandae cum voluptatem debitis. Enim omnis illum laboriosam
                  dolorem blanditiis neque repellat voluptas! Enim, autem?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  voluptate et maiores quasi amet iste sunt eligendi repudiandae
                  quisquam consequatur!
                </p>
                <br />
                <ul className="single-list">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  atque nulla veritatis dolorem esse ad quibusdam ipsam
                  doloribus, dolor vero voluptates alias porro mollitia
                  architecto ex magni magnam? Aut, consequatur.
                </p>
              </div>
            </Box>
          </div>
          {/* the right side of the single page of the courses */}
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
