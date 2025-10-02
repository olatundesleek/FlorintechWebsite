import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";
import { Link } from "next/link";

function CertifiedGraphicsProfessional() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        canonical="https://www.florintechcomputercollege.com/courses/certifiedgraphicsprofessional/"
        title="Certified Graphics Design Course in Ojo Lagos | Florintech"
        description="Learn graphics design to become a professional at Florintech, Ojo’s trusted computer school. Practical ICT training in Photoshop, CorelDRAW, Illustrator and more."
        keywords="graphics course, certified graphics professional, graphic design course Ojo Lagos, computer school in Ojo, ICT training Lagos, learn Photoshop, learn Illustrator, CorelDRAW training, design course Nigeria, Florintech computer college"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/certifiedgraphicsprofessional/",
          title:
            "Certified Graphics Professional | Florintech computer college",
          description:
            "Our Certified Graphics Professional program is just one example of how we are helping individuals develop the skills and knowledge needed to succeed in today's competitive job marke.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/certifiedgraphicsprofessional.jpg",
              width: 800,
              height: 600,
              alt: "certifiedgraphicsprofessional",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="Certified Graphics Professional Course"
        courseImage={courseImages.graphics}
        aboutCourseText="Our Graphics Design Course in Ojo, Lagos is designed to help you master the art of creating professional visual content for both digital and print media. At Florintech, a trusted computer school in Ojo, you’ll gain hands-on ICT training with small class sizes for personalized learning.

With guidance from experienced instructors, you will learn industry-standard tools such as Adobe Photoshop, CorelDRAW, and Illustrator to develop logos, posters, flyers, social media graphics, and brand identities.

As a local ICT training center in Lagos, our curriculum is tailored to the Nigerian market while preparing you for global opportunities. Through practical projects and portfolio development, you will graduate with the skills to work as a professional graphics designer, join creative teams, or launch your own freelance career.

Flexible schedules, practical lab sessions, and real-world assignments make this course suitable for both beginners and working professionals.

By the end of the program, you will be confident in your ability to transform ideas into stunning designs that communicate and inspire."
        courseOutline={[
          "All courses in desktop publishing ",
          "All courses in certied desktop publishing ",
          "Adobe Illustrator",
          "Certified desktop publishing",
          "Internet Essential",
        ]}
        coursePrice="60,000"
        courseDuration="4 months"
        classType="Physical"
      />
    </Box>
  );
}

export default CertifiedGraphicsProfessional;
