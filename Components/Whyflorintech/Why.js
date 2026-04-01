import { Box, Flex } from "@chakra-ui/react";
import { FcGraduationCap } from "react-icons/fc";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { FiUsers, FiClock } from "react-icons/fi";

import { GrCertificate } from "react-icons/gr";

function Why() {
  return (
    <Box className="advantage">
      <Box className="writecopy">
        <h1>
          Florintech Computer College – Leading Computer School in Ojo, Lagos
        </h1>

        <p>
          Florintech Computer College is a leading
          <strong> computer school in Ojo, Lagos</strong>, known for 100%
          practical ICT and computer training. We help students, professionals,
          and organizations gain the digital and computer skills they need to
          succeed in today’s technology-driven world. Whether you’re searching
          for a <strong>computer training school in Ojo, Lagos </strong>
          or a place to build your tech career, Florintech provides hands-on
          learning with industry-recognized programs.
        </p>
        <p>
          Conveniently located in Ojo, we serve students from across Lagos
          including Festac Town, Mile 2, Satellite Town, Amuwo-Odofin, Agbara,
          and Badagry.
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
                Our instructors are practicing professionals who bring real
                industry experience into every lesson. They guide you
                step-by-step through practical projects, ensuring you don’t just
                learn theory but gain the technical confidence needed to solve
                real problems.
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
                Upon completion, students receive an industry-recognized
                certificate with a unique batch number that can be verified on
                our portal. Our certificates are widely accepted by employers
                across Nigeria and serve as a strong addition to your CV or
                professional profile.
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
              <h2 className="advantage-subtitle">
                Proven Learning Methodology
              </h2>
              <p>
                Each course follows a structured, project-based curriculum.
                Students complete real assignments, build portfolios, and
                participate in hands-on activities that help them retain
                knowledge faster and apply skills immediately.
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
              <h2 className="advantage-subtitle">Video Lessons & Materials</h2>
              <p>
                Students receive supportive video lessons, PDF notes, templates,
                and resources to help them revise at home. This blended learning
                model ensures you never fall behind even if you miss a class.
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
              <FiClock className="advantage_icon" />
            </Box>
            <Box>
              <h2 className="advantage-subtitle">Flexible Timing</h2>
              <p>
                We understand that students have different schedules. That’s why
                we provide morning, afternoon, evening, and weekend batches so
                you can learn at your convenience without missing out on quality
                training.
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
              <FiUsers className="advantage_icon" />
            </Box>
            <Box>
              <h2 className="advantage-subtitle">
                Supportive Learning Community
              </h2>
              <p>
                At Florintech, students learn in a welcoming environment where
                instructors and classmates support each other. Our
                community-based learning approach helps students stay motivated,
                confident, and engaged throughout their training.
              </p>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Why;
