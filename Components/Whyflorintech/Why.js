import { Box, Flex } from "@chakra-ui/react";
import { FcGraduationCap } from "react-icons/fc";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";

import { GrCertificate } from "react-icons/gr";

function Why() {
  return (
    <Box className="advantage">
      <Box className="writecopy">
        <h1>
        Florintech Computer College stands out as a premier computer training school in Ojo, Lagos, empowering individuals and organizations with the skills to thrive in today's digital world. Whether you're a beginner looking to learn the basics, or a seasoned professional seeking to advance your career, Florintech offers a comprehensive range of courses tailored to your needs.

Unleash Your Potential with Our Diverse Curriculum:

Web Development: Master the art of building dynamic websites and applications using industry-standard languages like HTML, CSS, and JavaScript.
Programming Bootcamps: Dive deep into in-demand programming languages like Python, Java, or Javascript and gain the skills to become a sought-after developer.
IT Courses: Enhance your productivity and efficiency with essential office training in Microsoft Office Suite or explore advanced IT skills for network administration or cybersecurity.
And More,
At Florintech Computer School in Ojo, you'll benefit from experienced instructors, a hands-on learning environment, and practical projects that prepare you for real-world challenges.
        </h1>

      </Box>

      <Box>
        <h2 className="why">Why Florintech?</h2>
        <Flex justifyContent={"center"}>
          <Box className="line"></Box>
          <FcGraduationCap className="graduationcap" />
          <Box className="line"></Box>
        </Flex>
        <Flex></Flex>
      </Box>
      <Flex flexDirection="column" className="advantage_main">
        <Flex
          className="left-content"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Flex
            className="advantage_lefttab"
            flex="50%"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Box>
              <GrWorkshop className="advantage_icon" />
            </Box>
            <Box>
              <h2 className="advantage-subtitle">Expert teachers</h2>
              <p>
                Our college is made of university graduates specialized with
                distinction in the various field they teach. They are
                enthusiastic about teaching and assisting students to understand
                technologybeen taught. Each of this instructors are working on
                real life projects for clientsand also developing a pet project
                by the side. You can be sure to trust theknowledge they offer.
              </p>
            </Box>
          </Flex>
          <Flex
            className="advantage_lefttab"
            flex="50%"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Box>
              <GrCertificate className="advantage_icon" />
            </Box>
            <Box>
              <h2 className="advantage-subtitle">Trusted Certification</h2>
              <p>
                Our certificates and diplomas certificates we issued to
                graduands are easily recognized and welcome inreputable
                companies, institutions and other organizations here in Nigeria
                andabroad. This is because Florintech Computer College itself is
                a leading IT training institute in Okokomaiko,Ojo,Lagos,Nigeria
                that is duly registered and recognized by the government to
                impact quality IT skill sets in student.
              </p>
            </Box>
          </Flex>
        </Flex>
        <Flex
          className="right-content"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <Flex
            className="advantage_righttab"
            flex="50%"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Box>
              <HiOutlineTrendingUp className="advantage_icon" />
            </Box>
            <Box>
              <h2 className="advantage-subtitle">Methodology</h2>
              <p>
                We keep learning new methods,as well as updating to latest
                program and programming languages/versions for skill
                advancement. Our mode of training is 100% practical.
              </p>
            </Box>
          </Flex>
          <Flex
            className="advantage_righttab"
            flex="50%"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Box>
              <HiOutlineVideoCamera className="advantage_icon" />
            </Box>
            <Box>
              <h2 className="advantage-subtitle">Video Lessons</h2>
              <p>
                Get ready to be immersed into a world of video guides,
                referencing and video practices.As this video lesson aid in
                better understanding and visual retention of information.
              </p>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Why;
