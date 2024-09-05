import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";
import { Link } from "next/link";

function Cybersecurity() {
  return (
    <Box>
      <DefaultSeo {...SEO}
      canonical="https://www.florintechcomputercollege.com/courses/cybersecurity/"
        title="Cybersecurity | Florintech computer college"
        description="Enroll in our Junior Security Analyst course to learn cybersecurity from the ground up. Gain practical skills in network security, cryptography, cloud security, and more to kickstart your career in cybersecurity. Perfect for beginners!."
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/cybersecurity/",
          title:
            "Cybersecurity | Florintech computer college",
          description:
            "Enroll in our Junior Security Analyst course to learn cybersecurity from the ground up. Gain practical skills in network security, cryptography, cloud security, and more to kickstart your career in cybersecurity. Perfect for beginners!.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/cybersecurity.jpg",
              width: 800,
              height: 600,
              alt: "cybersecurity",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
        
      />
      <Header />
      <Singlecourse
        courseTitle="Cybersecurity"
        courseImage={courseImages.Cybersecurity}
        aboutCourseText="The Junior Security Analyst course provides a comprehensive introduction to the field of cybersecurity. It is designed for individuals who want to learn cybersecurity from the ground up, equipping them with the knowledge and practical skills necessary to identify, analyze, and mitigate cyber threats. This course is ideal for beginners looking to start a career in cybersecurity or those interested in securing their digital environments."
        courseOutline={[
          "Introduction to Cybersecurity",
  "Cyber Threats and Attacks",
  "Network Security",
  "Cryptography",
  "Endpoint Security",
  "Web Application Security",
  "Cloud Security",
  "Identity and Access Management (IAM)",
  "Security Operations",
  "Risk Management and Compliance",
  "Cybersecurity Frameworks and Standards",
  "Emerging Technologies and Trends",
  "Cybersecurity Careers and Skills",
  "Capstone Project"
        ]}
        coursePrice="150,000"
        courseDuration="3 months"
         classType="Physical & Virtual"
      />
    </Box>
  );
}

export default Cybersecurity;
