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

function Privacypolicy() {
  return (
    <Box className="Terms">
      <DefaultSeo
        noindex={true}
        title="Privacy Policy | Florintech computer college"
        description="Florintech Computer College Privacy Policy"
        canonical="https://www.florintechcomputercollege.com/privacypolicy/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/privacypolicy/",
          title: "Privacy Policy | Florintech Computer College",
          description: "Florintech Computer College Privacy Policy",

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
      <Banner pageName="Privacy Policy" pageDetails="Privacy Policy" />

      <Box
        p={{ base: "20px", sm: "20px", md: "35px", lg: "40px" }}
        m="auto"
        maxW="1000px"
      >
        <h1>Privacy Policy</h1>
        <text>
          <strong>Effective Date:</strong> January 2024{" "}
        </text>

        <text>
          Florintech Computer College
          (&quot;we&quot;,&quot;our&quot;,&quot;or&quot;,&quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, disclose, and safeguard your information when you
          visit our website or use our services. Please read this policy
          carefully. If you do not agree with the terms of this privacy policy,
          please do not access the site or use our services.
        </text>

        <h2>1. Information We Collect</h2>
        <text>
          We may collect personal information from you in various ways,
          including when you:
        </text>
        <ul>
          <li>Register for courses.</li>
          <li>Subscribe to our newsletters.</li>
          <li>Request information or make inquiries.</li>
          <li>Interact with our website or social media pages.</li>
        </ul>
        <text>
          The types of personal information we collect include, but are not
          limited to:
        </text>
        <ul>
          <li>
            <strong>Contact Information:</strong> Name, email address, phone
            number, postal address.
          </li>
          <li>
            <strong>Educational Information:</strong> Your academic interests,
            qualifications, and enrollment history.
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <text>
          We use the information we collect for various purposes, including:
        </text>
        <ul>
          <li>To provide and maintain our services.</li>
          <li>To process your course registration and manage your account.</li>
          <li>
            To communicate with you, including sending newsletters, promotions,
            or updates.
          </li>
          <li>To improve our website and services based on user feedback.</li>
          <li>To comply with legal obligations or respond to legal claims.</li>
        </ul>

        <h2>3. Disclosure of Your Information</h2>
        <text>
          We may share your information with third parties under the following
          circumstances:
        </text>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information
            with trusted third-party providers who assist us in operating our
            website, conducting business, or providing services to you.
          </li>
          <li>
            <strong>Legal Requirements:</strong> If required by law, we may
            disclose your information in connection with legal proceedings,
            regulatory obligations, or law enforcement inquiries.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or asset sale, your information may be transferred as
            part of that transaction.
          </li>
          <li>
            <strong>Employers and Institutions:</strong> We may share your
            information with your employers or other institutions upon their
            request, particularly for verification of your enrollment, academic
            progress, or completion of our programs.
          </li>
        </ul>

        <h2>4. Data Security</h2>
        <text>
          We implement security measures to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction.
          However, please note that no method of electronic storage or
          transmission over the internet is 100% secure. We encourage you to use
          caution when submitting personal information online.
        </text>

        <h2>5. Your Privacy Rights</h2>
        <text>
          Depending on your jurisdiction, you may have the following rights:
        </text>
        <ul>
          <li>
            <strong>Access:</strong> Request access to your personal data.
          </li>
          <li>
            <strong>Correction:</strong> Request corrections to any inaccurate
            or incomplete personal data.
          </li>
          <li>
            <strong>Deletion:</strong> Request the deletion of your personal
            data where applicable.
          </li>
          <li>
            <strong>Opt-Out:</strong> Unsubscribe from our marketing
            communications at any time.
          </li>
        </ul>
        <text>
          To exercise these rights, please contact us at{" "}
          <a href="mailto:info@florintechcomputercollege.com">
            info@florintechcomputercollege.com
          </a>
          .
        </text>

        <h2>6. Cookies and Tracking Technologies</h2>
        <text>
          Our website uses cookies to enhance your browsing experience. Cookies
          are small text files stored on your device by a website. You can set
          your browser to refuse cookies or alert you when cookies are being
          sent, but this may limit your ability to use certain features of the
          website.
        </text>

        <h2>7. Third-Party Links</h2>
        <text>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these external
          sites. We recommend reviewing the privacy policies of any third-party
          sites you visit.
        </text>

        <h2>8. Changes to This Privacy Policy</h2>
        <text>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this policy periodically to stay informed about how we
          protect your information.
        </text>

        <h2>9. Contact Us</h2>
        <text>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </text>
        <text>
          <strong>Florintech Computer College</strong>
          <br />
          Phone: 08136689745
          <br />
          Email:{" "}
          <a href="mailto:info@florintechcomputercollege.com">
            info@florintechcomputercollege.com
          </a>
        </text>
      </Box>

      <Footer />
    </Box>
  );
}

export default Privacypolicy;
