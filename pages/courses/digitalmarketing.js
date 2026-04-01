import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function DigitalMarketing  () {
  return (
    <div>
      <Box>
        <DefaultSeo {...SEO}
          title="Digital Marketing Course in Ojo, Lagos | Florintech Computer College"
          canonical="https://www.florintechcomputercollege.com/courses/digitalmarketing/"
          description="Learn digital marketing at Florintech Computer College in Ojo, Lagos. Master SEO, social media, and content creation. Practical training for all levels. Enroll today."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/digitalmarketing/",
            title: " Digital Marketing | Florintech computer college",
            description:
              " At Florintech Computer College, we offer a wide range of courses that cover all the major office applications.",
            images: [
              {
                url: "https://www.florintechcomputercollege.com/images/dg.jpg",
                width: 800,
                height: 600,
                alt: "digitalmarketing",
                type: "image/jpeg",
              },
            ],
            siteName: "Florintech Computer College",
          }}
          
        />
        <Header />
        <Singlecourse
          courseTitle="Digital Marketing"
         
          courseImage={courseImages.digitalmedia}
          aboutCourseText="Every business needs to reach customers online—but most don't know how. Digital marketers who understand SEO, paid ads, content strategy, and social media are valuable professionals. Our digital marketing course teaches you to grow businesses and build personal income simultaneously. Learn content marketing, SEO optimization, Google Ads, Facebook ads, and social media strategy.

You'll start with fundamentals—keyword research, content planning, SEO basics—then move to paid advertising where you spend real money and track real results. You'll manage actual campaigns measuring clicks, conversions, and ROI. You'll create content that ranks in Google, ads that convert curiosity into sales, and social strategies that build engaged audiences.

Agencies across Lagos actively hire digital marketers. E commerce businesses constantly need marketing specialists. You could work for agencies, manage marketing for businesses, or build your own lucrative freelance practice."
     
          courseOutline={[
            "introduction to internet Essential",
            "content/keyword marketing",
            "introduction to online marketing",
            "search Engine optimization",
          ]}
        
          courseDuration="6 weeks"
          coursePrice="60,000"
           classType="Physical/Virtual"
        />
      </Box>
    </div>
  );
};

export default DigitalMarketing;
