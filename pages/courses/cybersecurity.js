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
        title="Cybersecurity Course in Ojo, Lagos | Florintech Computer College"
        description="Start a career in cybersecurity at Florintech Computer College in Ojo, Lagos. Our Junior Security Analyst course is ideal for beginners. Register now."
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
        aboutCourseText="Cyberattacks cost Nigerian businesses millions annually—companies desperately need security professionals who can identify threats, secure networks, and protect data. Our cybersecurity course teaches you to think like a hacker so you can defend like a professional. You'll learn how systems get compromised, then how to prevent it.

You'll start with network security fundamentals, then move to threat analysis, encryption, secure coding, and security frameworks. You'll work with real world scenarios: responding to a security incident, securing a user database, detecting malicious traffic. You'll earn security certifications and build a portfolio that proves your capabilities to employers.

Nigeria's fintech, banking, and tech sectors all prioritize cybersecurity. Your skills are immediately valuable—companies across industries need security expertise. You'll be job ready for bank security roles, fintech security positions, or lucrative remote contracts with tech companies."
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
        coursePrice="300,000"
        courseDuration="3 months"
         classType="Physical & Virtual"
      />
    </Box>
  );
}

export default Cybersecurity;
