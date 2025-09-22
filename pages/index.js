import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";

import Slider from "../Components/Slider/Slider";

import { appContext } from "./_app";
import Why from "../Components/Whyflorintech/Why";
import CourseTab from "../Components/Coursetab/CourseTab";
import Trending from "../Components/Trendingcourses/Trending";
import Singlecourse from "../Components/single-course/Singlecourse";
import Header from "../Components/Header";

import NewsLetter from "../Components/NewsLetter";
import Testimonial from "../Components/Testimonial/Testimonial";
import Footer from "../Components/Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { useState } from "react";
export default function Home() {
  return (
    <div className={styles.container}>
      <DefaultSeo
        {...SEO}
        title="Florintech computer college"
        canonical="https://www.florintechcomputercollege.com/"
        description="Florintech is a top computer school in Ojo. Learn web development, digital marketing, cybersecurity & more. Kickstart your tech career today!"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/",
          title: "Florintech Computer College",
          description:
            "Florintech is a top computer school in Ojo. Learn web development, digital marketing, cybersecurity & more. Kickstart your tech career today!",

          siteName: "Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/logo.png",
              width: 800,
              height: 600,
              alt: "Florintech Computer College",
              type: "image/png",
            },
          ],
        }}
      />
      <Head>
        <title>Florintech Computer College</title>
        <meta
          name="Florintech Computer College"
          content="Florintech is a top computer school in Ojo. Learn web development, digital marketing, cybersecurity & more. Kickstart your tech career today!"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.florintechcomputercollege.com/images/logo.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              name: "Florintech Computer College",
              url: "https://www.florintechcomputercollege.com/",
              logo: "https://www.florintechcomputercollege.com/images/logo.png",
              description:
                "Florintech Computer College is a trusted computer school in Ojo, Lagos, dedicated to helping students, professionals, and organizations gain the practical digital skills they need to succeed in today’s technology-driven world. With experienced instructors, hands-on training, and industry-recognized programs, we make learning technology simple, accessible, and career-focused.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9 Kemberi Road, Okokomaiko",
                addressLocality: "Ojo",
                addressRegion: "Lagos",
                postalCode: "102101",
                addressCountry: "NG",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2348136689745",
                contactType: "Customer Service",
                areaServed: "NG",
              },
              email: "info@florintechcomputercollege.com",
              sameAs: [
                "https://www.facebook.com/florintechcomputers",
                "https://www.instagram.com/florintechcomputercollege/",
                "https://x.com/florintechcc",
                "https://ng.linkedin.com/company/florintech-computer-college",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "19:30",
                },
              ],
            }),
          }}
        />
      </Head>

      <Box listStyleType="none" textDecoration="none" m={0}>
        <Header />
        <Slider />
        <Box
          className="page-main-content"
          padding={{ base: "10px", sm: "10px", md: "40px", lg: "50px" }}
        >
          <Why />
          <Trending />
          <Testimonial />
        </Box>

        <Footer />
      </Box>
    </div>
  );
}
