import { Card, Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const CourseTab = ({ courseTitle, courseText, to, price, courseImage }) => {
  return (
    <Box className="course-card">
      <Link legacyBehavior href={to}>
        <a>
          <Box className="image-wrapper">
            <Image
              className="course-image"
              src={courseImage}
              alt="Picture of the author"
              width={500}
              height={300}
            />
          </Box>
          <Box className="course-main-content">
            <Box>
              <h3 className="coursetitle">{courseTitle}</h3>
            </Box>
            <Box style={{ height: "150px", overflow: "hidden" }}>
              <p className="coursetext">{courseText}</p>
            </Box>
            <Box className="divider">
              <Box className="divider-content"></Box>
            </Box>
            <Flex justifyContent="space-between">
              <Box>
                <h3 className="learnmore">Learn more</h3>
              </Box>
              <Box>
                <h3 className="courseprice">NGN{price}</h3>
              </Box>
            </Flex>
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default CourseTab;
