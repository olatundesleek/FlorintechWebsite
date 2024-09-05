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
          title="Office Application | Florintech computer college"
          canonical="https://www.florintechcomputercollege.com/courses/officeapplication/"
          description=" learn Microsoft Office applications like Word, Excel, PowerPoint, and Access. Enroll now and boost your career productivity."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/officeapplication/",
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
          aboutCourseText="Our Microsoft Office courses are designed to equip you with the skills and knowledge needed to excel in today's fast-paced office environments. Microsoft Office applications are essential in modern workplaces, and mastering them is key to career success. Whether you're an administrative assistant, project manager, or business owner, learning how to use Microsoft Office effectively can save you time and significantly boost your productivity.

          At Florintech Computer College, we offer a comprehensive range of Microsoft Office courses covering all the popular programs, including Word, Excel, PowerPoint, and Access. Taught by experienced professionals, our courses provide hands-on learning with practical exercises and real-world examples to ensure you can apply your Microsoft Office knowledge effectively in your work"
        
          courseOutline={[
            "Computer fundemantals and information tech",
            "Ms Word",
            "Ms Excel",
            "Ms PowerPoint",
            "Internet Essentials",
          ]}
         
          coursePrice="25,000"
          courseDuration="1 month"
          classType="Physical/Virtual"
        />
      </Box>
    </div>
  );
};

export default officeapplication;
