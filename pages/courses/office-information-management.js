import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function officeinformationmgt () {
  return (
    <Box>
      <DefaultSeo    {...SEO}
        title="Office Information Management Course in Lagos | Florintech"
        canonical="https://www.florintechcomputercollege.com/courses/office-information-management/"
        description="Learn modern office information management at Florintech Computer College in Ojo, Lagos. Practical digital skills for office professionals. Register now."
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/office-information-management/",
          title: "Office information managnment | Florintech computer college",
          description:
            " At Florintech Computer College, we recognize the importance of efficient information management in our day-to-day operations. Our staff and faculty members rely on accurate and timely information to make informed decisions, manage resources effectively, and deliver quality education to our students.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/officemgt.jpg",
              width: 800,
              height: 600,
              alt: "officemgt",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
     
      />
      <Header />
      <Singlecourse
        courseTitle="Office Information Management"
        courseImage={courseImages.officemgt}
        aboutCourseText="Office managers who can organize information efficiently are valuable in Lagos corporations—they save time, prevent chaos, and keep operations running smoothly. Our office information management course teaches you the software and systems enterprises use: Microsoft Office at an advanced level, Adobe tools for professional documents, and Peachtree for managing office finances and records.

You'll master complex Excel spreadsheets that track hundreds of data points, create professional documents with advanced Word features, organize files systematically, manage databases, and use software to streamline office workflows. You'll understand how information flows through organizations and how to optimize that flow. By the end, you can walk into any office and immediately make it more efficient.

Companies and large organizations need skilled office professionals. You'll be job ready for senior administrative positions, office management roles, or specialized admin jobs across Lagos' corporate sector."
        courseOutline={[
          "computer Fundementals",
          "Microsoft Office Packages",
          "Adobe pagemaker",
          "Corel Draw",
          "Introduction to Peachtree accounting",
          "Internet Essentails",
        ]}
        courseDuration="4 months"
        coursePrice="80,000"
        classType="Physical"
      />
    </Box>
  );
}

export default officeinformationmgt;
