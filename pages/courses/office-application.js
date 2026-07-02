import { Box } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import React from "react";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function officeapplication (){
  return (
    <div>
      <Box>
        <DefaultSeo
         {...SEO}
          title="Microsoft Office Application Course in Ojo, Lagos | Florintech"
          canonical="https://www.florintechcomputercollege.com/courses/office-application/"
          description="Master Microsoft Office applications at Florintech Computer College in Ojo, Lagos. Essential digital skills for students and professionals. Enroll today."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/office-application/",
            title: "Office Application | Florintech computer college",
            description:
              "learn Microsoft Office applications like Word, Excel, PowerPoint, and Access. Enroll now and boost your career productivity.",
            images: [
              {
                url: "https://www.florintechcomputercollege.com/images/officeapplication.jpg",
                width: 800,
                height: 600,
                alt: "office application",
                type: "image/jpeg",
              },
            ],
            siteName: "Florintech Computer College",
          }}
         
        />
        <Header />
        <Singlecourse
          courseTitle="Office Application"
          courseImage={courseImages.officeapplication}
          aboutCourseText='Microsoft Office skills are a necessity for every office job. Our office application course teaches you Word, Excel, and PowerPoint—the tools that administrative staff, accountants, project managers, and business professionals use daily. Mastery of these applications dramatically speeds up your work and makes you more valuable to employers.

If you want to learn Microsoft Word, Excel, in Lagos, build practical digital skills, or join computer training for beginners and computer classes for adults in Lagos, this programme is designed for you. We also support learners who need computer courses with certificate, computer training with certificate, and flexible weekend computer classes or evening computer classes. Florintech is a strong option for those looking for an affordable computer school in Lagos, a computer school with certificate in Lagos, and a trusted ICT training centre for career growth.

You will master Word for professional documents, Excel for data analysis and financial tracking, and PowerPoint for presentations that actually influence decisions. You will learn shortcuts, formulas, and advanced features that save hours weekly. You will create spreadsheets that analyze sales data, write reports that impress leadership, and build presentations that close deals. By the end, you are not just using Office, you are leveraging it strategically.

Every company in Lagos needs employees who can work efficiently in Microsoft Office. You will be job-ready for administrative roles, banking positions, or corporate jobs where these skills are required every day.'
        
          courseOutline={[
            "Computer fundemantals and information tech",
            "Ms Word",
            "Ms Excel",
            "Ms PowerPoint",
            "Internet Essentials",
          ]}
         
          coursePrice="30,000"
          courseDuration="1 month"
          classType="Physical"
        />
      </Box>
    </div>
  );
};

export default officeapplication;
