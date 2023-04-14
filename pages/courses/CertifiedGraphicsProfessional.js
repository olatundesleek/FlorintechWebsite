import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
const certifiedgraphicsprofessionalImg =
  images[2].certifiedgraphicsprofessional;
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";
import { Link } from "next/link";

function CertifiedGraphicsProfessional() {
  return (
    <Box>
      <Header />
      <Singlecourse
        courseTitle=" Certified Graphics Professional"
        courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
        courseImage={certifiedgraphicsprofessionalImg}
        aboutCourseText=" Welcome to Florintech Computer College, where we offer comprehensive training programs for aspiring graphics professionals. Our courses are designed to help individuals develop the skills and knowledge needed to become certified graphics professionals.

Our Certified Graphics Professional program is designed to provide students with a deep understanding of graphic design principles and software tools. Through a combination of classroom instruction, hands-on exercises, and real-world projects, students will learn how to create high-quality graphics that meet the needs of clients and customers.

The program covers a wide range of topics, including graphic design theory, color theory, typography, layout and composition, image editing, and vector graphics. Students will also learn how to use industry-standard software tools, including Adobe Photoshop, Illustrator, and InDesign.

At the end of the program, students will be prepared to take the Certified Graphics Professional exam. This exam is designed to test the skills and knowledge that are essential for success in the field of graphic design. Upon passing the exam, students will receive a certification that demonstrates their expertise and competence as a graphics professional.

Our instructors are experienced professionals who have a deep understanding of the industry and the software tools used by graphics professionals. They provide individualized attention and support to each student, ensuring that they receive the guidance and feedback they need to succeed.

At Florintech Computer College, we are committed to providing our students with the highest-quality education and training. Our Certified Graphics Professional program is just one example of how we are helping individuals develop the skills and knowledge needed to succeed in today's competitive job market.

If you are interested in pursuing a career in graphic design, we invite you to learn more about our Certified Graphics Professional progra,Contact us today to schedule a consultation or to enroll in our next training session."
        whatToLearnListOne="Adobe Illusreator."
        whatToLearnListTwo="Certified desktop publishing"
        whatToLearnListThree="Internet Essentials"
        secondImageText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum reiciendis cupiditate asperiores nulla hic quidem ab,
        voluptatem voluptatibus accusamus ea est eum soluta maiores
        deleniti ratione laudantium. Modi, sequi quasi."
        courseDuration="4 months"
        coursePrice="50,000"
        courseOutline={[
          "All courses in desktop publishing ",
          "All courses in certied desktop publishing ",
          "Adobe Illusreator",
          "Certified desktop publishin",
          "Internet Essential",
        ]}
      />
    </Box>
  );
}

export default CertifiedGraphicsProfessional;
