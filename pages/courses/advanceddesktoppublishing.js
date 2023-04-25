import { Box } from "@chakra-ui/react";
import React from "react";
import { courseImages } from "../../Components/images";

import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function advancedDeskTopPublishing() {
  return (
    <Box>
      <Header />
      <Singlecourse
        courseTitle="Advanced Desktop Publishing "
        courseImage={courseImages.advanceddesktoppublishing}
        aboutCourseText="Welcome to Florintech Computer College, your one-stop solution for professional desktop publishing training and certification. Our Advanced Desktop Publishing program is designed to provide you with the skills and knowledge you need to excel in the world of digital publishing.

Desktop publishing has become an essential skill in today's fast-paced digital world. Whether you're creating brochures, flyers, newsletters, or other marketing materials, having a strong understanding of desktop publishing tools and techniques is crucial. That's where our Advanced Desktop Publishing program comes in.

At Florintech Computer College, we offer a comprehensive training program that covers all aspects of desktop publishing. Our program includes in-depth training on industry-standard software applications such as Adobe InDesign, Adobe Illustrator, and Adobe Photoshop. You'll learn how to create and design professional-grade documents, layouts, and graphics that meet the highest industry standards.

Our Advanced Desktop Publishing program is ideal for both beginners and professionals looking to enhance their skills. Our instructors are industry experts with years of experience in the field, and they'll provide you with practical, hands-on training that will help you master the techniques and tools used in desktop publishing.

Upon completion of our program, you'll be awarded a Advanced Desktop Publishing certification from Florintech Computer College. This certification is recognized worldwide and is a testament to your skills and knowledge in the field of desktop publishing. Our certification is also a great way to enhance your resume and increase your job prospects in the competitive job market.

So why wait? Sign up for our Advanced Desktop Publishing program today and take the first step towards a successful career in digital publishing. With Florintech Computer College, you'll gain the skills and knowledge you need to succeed in today's ever-evolving digital landscape!"
        courseOutline={[
          "All Courses",
          "Powerpoint",
          "Powerpoint",
          "Adobe Photoshop",
          "ADV CorelL Draw",
        ]}
        coursePrice="35,000"
        courseDuration="4 months"
      />
    </Box>
  );
}

export default advancedDeskTopPublishing;
