import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OpeningDays from "../Components/OpeningDays";
import { FiPhoneCall } from "react-icons/fi";

import { HiOutlineMailOpen } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";
import Banner from "../Components/Banner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function Termsandconditions() {

  return (
    <Box className="Terms">
      <DefaultSeo noindex={true}
        title="terms and conditions | Florintech computer college"
        description="Florintech Computer College terms and conditions"
        canonical="https://www.florintechcomputercollege.com/termsandconditions/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/termsandconditions/",
          title: "terms and conditions | Florintech Computer College",
          description: "Florintech Computer College terms and conditions",

          siteName: "Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/logo.jpg",
              width: 800,
              height: 600,
              alt: "Florintech Computer College",
              type: "image/jpeg",
            },
          ],
        }}
        {...SEO}
      />
      <Header />
      <Banner pageName="Terms and Conditions" pageDetails="Terms and Conditions" />

<Box  p={{ base: "20px",sm: "20px",md: "35px",lg: "40px",}} m="auto" maxW="1000px">
<h2>1. Acceptance of Terms</h2>
    <text>By enrolling at Florintech Computer College, you agree to abide by the terms and conditions outlined here. These terms govern your participation in courses, use of facilities, and interaction with staff and fellow students.</text>

    <h2>2. Non-Refundable Fees</h2>
    <text>All fees paid to Florintech Computer College, including but not limited to tuition, registration, and administrative fees, are <strong>non-refundable</strong>. Students are encouraged to review the program details carefully before making any payments, as no refunds will be provided once payments have been made.</text>

    <h2>3. Right to Refuse Service</h2>
    <text>Florintech Computer College reserves the right to refuse admission, enrollment, or any service to any student at its discretion. This decision may be based on non-compliance with application requirements, non-payment of fees, or other reasons as deemed necessary by the management.</text>

    <h2>4. Student Conduct and Compliance</h2>
    <text>Students are expected to adhere to the rules and regulations of Florintech Computer College. These rules include, but are not limited to:</text>
    <ul className="student-rules">
        <li>Respecting fellow students, instructors, and staff.</li>
        <li>Maintaining academic integrity.</li>
        <li>Following classroom and facility guidelines.</li>
        <li>Adhering to the dress code and any other behavioral expectations.</li>
    </ul>
    <text>Failure to comply with these rules may result in disciplinary actions, including the suspension or termination of the student’s enrollment in any program or course.</text>

    <h2>5. Suspension or Termination of Program</h2>
    <text>Florintech Computer College reserves the right to <strong>suspend or terminate</strong> a student’s enrollment if they fail to comply with the institution’s rules, engage in misconduct, or disrupt the learning environment. The decision of the College in such cases will be final, and no refunds will be issued in the event of suspension or termination.</text>

    <h2>6. Changes to Terms</h2>
    <text>Florintech Computer College may update or revise these terms and conditions at any time. It is the responsibility of the students to stay informed about any changes.</text>

    <h2>7. Liability</h2>
    <text>Florintech Computer College is not liable for any personal injuries, damages, or loss of property that may occur on the premises. Students are responsible for their personal belongings and well-being while at the College.</text>

    <h2>8. Intellectual Property</h2>
    <text>All course materials, including but not limited to videos, documents, and software provided by Florintech Computer College, are for the exclusive use of the student enrolled in the program. These materials cannot be shared, distributed, or reproduced without the prior written consent of the College.</text>

</Box>

      <Footer />
    </Box>
  );
}

export default Termsandconditions;
