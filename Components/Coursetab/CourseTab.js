import { Card, Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const CourseTab = ({ courseTitle, courseText, to, price, courseImage }) => {
  const altTextMapping = {
    "webdevelopment.jpg": "Web development course at Florintech Computer College Ojo Lagos",
    "reactjsimg.png": "Frontend web development with React.js course in Ojo Lagos",
    "nodejs.png": "Backend development with Node.js training in Lagos",
    "fullstack.jpg": "Full-stack web development course at Florintech Ojo Lagos",
    "wordpress.jpg": "Web design with WordPress course in Ojo Lagos",
    "graphic-pic.jpg": "Certified graphics design course at Florintech Computer College Lagos",
    "desktoppublishing.jpg": "Desktop publishing training in Ojo Lagos",
    "officeapplication.jpg": "Microsoft Office application course in Ojo Lagos",
    "autocad.jpg": "AutoCAD specialist training at Florintech Computer College Lagos",
    "advanceddesktoppublishing.jpg": "Advanced desktop publishing course in Ojo Lagos",
    "digitalandwebdev2.jpg": "Digital marketing and web development course in Lagos",
    "electronicsbusiness.jpg": "Business electronic accounting course at Florintech Lagos",
    "officemgt.jpg": "Office information management training in Ojo Lagos",
    "ui2.jpg": "UI/UX design course at Florintech Computer College Ojo Lagos",
    "cybersecurity.jpg": "Cybersecurity training course in Ojo Lagos Nigeria",
    "digitalmedia.jpg": "Digital marketing course at Florintech Computer College Lagos",
    "data-analysis.jpg": "Data analysis course at Florintech Computer College Ojo Lagos",
  };

  const imageFilename = courseImage ? courseImage.split("/").pop().toLowerCase() : "";
  const altText =
    altTextMapping[imageFilename] ||
    `${courseTitle} course at Florintech Computer College Ojo Lagos`;

  return (
    <Box className="course-card">
      <Link legacyBehavior href={to}>
        <a>
          <Box className="image-wrapper">
            <Image
              className="course-image"
              src={courseImage}
              alt={altText}
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
