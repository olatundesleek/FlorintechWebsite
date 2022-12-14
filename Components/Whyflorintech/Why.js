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
        <p>
          Florintech computer college is a leading computer school that offers
          computer training to businesses, individuals,institutions and
          organizations. It’s a computer training school located at
          Okokomaiko,Ojo,Lagos state. Our main purpose is to help students
          perform better and have a breaking edge over their competitors. From
          the very basic programs to the most advanced IT training in
          programming languages,we have got you at Florintech computer college.
          Our courses includes but not limited to the list of courses: Web
          development Office training Computer training amongst others. Still
          have some hesitations whether cooperation with us is worth the
          trouble? Check the benefits of choosing us among others.
        </p>
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
      <Flex
        flexDirection="column"
        className="advantage_main"
      >
        <Flex className="left-content"  flexDirection={{ base: "column", sm: "column", md: "column",lg:"row" }}>
          <Flex  className="advantage_lefttab" flex="50%" flexDirection={{ base: "column", sm: "column", md: "row",lg:"row" }}>
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
          <Flex  className="advantage_lefttab" flex="50%" flexDirection={{ base: "column", sm: "column", md: "row",lg:"row" }}>
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
        <Flex className="right-content" flexDirection={{ base: "column", sm: "column", md: "column",lg:"row" }}>
          <Flex   className="advantage_righttab" flex="50%" flexDirection={{ base: "column", sm: "column", md: "row",lg:"row" }}>
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
          <Flex  className="advantage_righttab" flex="50%" flexDirection={{ base: "column", sm: "column", md: "row",lg:"row" }}>
            <Box>
              <HiOutlineVideoCamera className="advantage_icon" />
            </Box>
            <Box>
              <h2 className="advantage-subtitle">Video Lessons</h2>
              <p>
               Get ready to be immersed into a world of video
                guides, referencing and video practices.As this video lesson aid
                in better understanding and visual retention of information.
              </p>
            </Box>
          </Flex>
        </Flex>
      </Flex>
   
    </Box>
  );
}

export default Why;
