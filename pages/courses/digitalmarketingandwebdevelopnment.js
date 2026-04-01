import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function digitalmediaandwebdevelopnment() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        canonical="https://www.florintechcomputercollege.com/courses/digitalmarketingandwebdevelopnment/"
        title="Digital Marketing & Web Development Course in Lagos | Florintech"
        description="Learn digital marketing and web development together at Florintech Computer College in Ojo, Lagos. Practical training for the Nigerian digital economy. Register now."
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/digitalmarketingandwebdevelopnment/",
          title:
            "Digital Marketing And WebDevelopnment | Florintech computer college",
          description:
            "At Florintech Computer College, we understand the importance of staying up-to-date with the latest trends and advancements in technology. That's why we offer a comprehensive range of courses in digital media and web development, designed to equip you with the skills and knowledge you need to succeed in this ever-evolving field.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/digitalandwebdev2.jpg",
              width: 800,
              height: 600,
              alt: "digitalandwebdevelopnment",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle=" Digital Marketing And Web Development"
        courseImage={courseImages.digitalandwebdev2}
        aboutCourseText="Businesses can't survive online without both digital marketing and a fast website—our digital marketing and web development course teaches you both. Master web development (HTML, CSS, JavaScript) to build fast websites, then learn digital marketing (SEO, social media, Google Ads) to drive traffic and sales to those sites. You become the complete solution businesses desperately need.

You'll create responsive websites that load quickly and convert visitors into customers, then optimize those sites for search engines so potential customers actually find them. You'll run paid ads on Facebook and Google, create viral social media content, and understand analytics. By week eight, you've launched a complete digital marketing campaign for a real business website—from designing the site to driving profitable traffic.

This combination is highly valuable in the market. Companies across Lagos need professionals who understand both web development and marketing. You'll be ready to manage digital projects end to end, freelance to businesses scaling online, or take high value remote contracts."
        courseOutline={[
          "All courses in diploma in digital media",
          "All courses in web development",
        ]}
        coursePrice="250,000"
        courseDuration="4 months"
        classType="Physical"
      />
    </Box>
  );
}

export default digitalmediaandwebdevelopnment;
