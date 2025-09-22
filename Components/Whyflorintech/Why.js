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
          Florintech Computer College – Leading Computer School in Ojo, Lagos
        </h1>
        {/* <h1>
          Florintech Computer College is the leading computer school in Ojo,
          Lagos, dedicated to empowering individuals and organizations with the
          digital skills needed to thrive in today’s technology driven world. As
          a trusted computer training school in Ojo, we provide hands-on, career
          focused courses designed for beginners and professionals alike. Our
          state of the art ICT training center located in Okokomaiko, Ojo,
          offers a wide range of certified courses including web development,
          digital marketing, cybersecurity, graphic design, and more.
          <br /> At Florintech, you’ll learn from industry experienced
          instructors and gain practical skills through real world projects.
          Join thousands of successful students who have launched or advanced
          their careers by choosing the best computer school in Ojo Lagos.
          Whether you want to start a new career, upgrade your skills, or become
          a tech entrepreneur, Florintech is your go to destination for quality
          ICT education.
        </h1> */}
        <p>
          Florintech Computer College is a{" "}
          <strong>computer school in Ojo, Lagos</strong>, known for 100%
          practical ICT training. We help students, professionals, and
          organizations gain the digital and computer skills they need to
          succeed in today’s technology-driven world. Whether you’re searching
          for a <strong>computer training school in Ojo</strong> or a place to
          build your tech career, Florintech provides hands-on learning with
          industry-recognized programs.
        </p>
      </Box>

      <Box>
        <h2 className="why">Why Choose Our Computer School in Ojo?</h2>
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
                Our instructors are ICT professionals working on real-life
                projects. They guide students step by step, making our computer
                school in Ojo one of the most practical places to learn.
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
                Our certificates and diplomas are widely recognized and accepted
                by reputable companies, institutions, and organizations in
                Nigeria and abroad. This is because Florintech Computer College,
                a leading IT training institute in Okokomaiko, Ojo, Lagos, is
                duly registered and recognized by the government to provide
                students with quality IT skills. To give our students and
                employers extra confidence, we also provide an online
                certificate verification portal, allowing anyone to instantly
                verify the authenticity of our certificates and diplomas.
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
                We keep learning new methods, as well as updating to the latest
                programs, programming languages, and versions for skill
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
                referencing and video practices. As these video lessons aid
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
