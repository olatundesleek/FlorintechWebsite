import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";

import Slider from "../Components/Slider/Slider";
import Faq from "../Components/Faq/Faq";
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
import StudentsTrained from "../Components/Whyflorintech/StudentTrained";
export default function Home() {
  return (
    <div className={styles.container}>
      <DefaultSeo
        {...SEO}
        title="Florintech Computer College – Top Computer School in Ojo, Lagos | 100% Practical ICT Training"
        canonical="https://www.florintechcomputercollege.com/"
        description="Learn tech skills at Florintech Computer College, the top computer school in Ojo, Lagos offering 100% practical ICT & computer training in graphics, web development, data analysis & more."
        keywords="computer school in Ojo, ICT training in Lagos, computer training in Ojo, Florintech Computer College, learn web design, graphics design, data analysis, digital marketing, cybersecurity"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/",
          title: "Florintech Computer College",
          description:
            "Learn tech skills at Florintech Computer College, the top computer school in Ojo, Lagos offering 100% practical ICT & computer training in graphics, web development, data analysis & more.",

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
        <title>
          Florintech Computer College – Top Computer School in Ojo, Lagos | 100%
          Practical ICT Training
        </title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.florintechcomputercollege.com/images/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Florintech Computer College – Computer School in Ojo, Lagos"
        />
        <meta
          name="twitter:description"
          content="100% practical ICT training at Florintech Computer College in Ojo, Lagos. Learn computer skills, digital tools, and build your tech career."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/de0x1equu/image/upload/q_auto/v1758804840/Students_of_Florintech_Computer_School_in_Ojo_eo3qb2.webp"
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              additionalType: "https://schema.org/School",
              name: "Florintech Computer College",
              url: "https://www.florintechcomputercollege.com/",
              logo: "https://www.florintechcomputercollege.com/images/logo.png",
              image:
                "https://res.cloudinary.com/de0x1equu/image/upload/q_auto/v1758804840/Students_of_Florintech_Computer_School_in_Ojo_eo3qb2.webp",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "372",
              },
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
          <StudentsTrained />
          <Testimonial />
          <Faq />
        </Box>

        <Footer />
      </Box>
    </div>
  );
}
