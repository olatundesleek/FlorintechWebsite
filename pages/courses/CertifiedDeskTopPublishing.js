import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
const certifiedgraphicsprofessionalImg =
  images[2].certifiedgraphicsprofessional;
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function CertifiedDeskTopPublishing() {
  return (
    <Box>
      <Header />
      <Singlecourse
        courseTitle="Ultimate Advance Grapgics Design Course"
        courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
        courseImage={certifiedgraphicsprofessionalImg}
        aboutCourseText="Welcome to Florintech Computer College, your one-stop solution for professional desktop publishing training and certification. Our Certified Desktop Publishing program is designed to provide you with the skills and knowledge you need to excel in the world of digital publishing.

Desktop publishing has become an essential skill in today's fast-paced digital world. Whether you're creating brochures, flyers, newsletters, or other marketing materials, having a strong understanding of desktop publishing tools and techniques is crucial. That's where our Certified Desktop Publishing program comes in.

At Florintech Computer College, we offer a comprehensive training program that covers all aspects of desktop publishing. Our program includes in-depth training on industry-standard software applications such as Adobe InDesign, Adobe Illustrator, and Adobe Photoshop. You'll learn how to create and design professional-grade documents, layouts, and graphics that meet the highest industry standards.

Our Certified Desktop Publishing program is ideal for both beginners and professionals looking to enhance their skills. Our instructors are industry experts with years of experience in the field, and they'll provide you with practical, hands-on training that will help you master the techniques and tools used in desktop publishing.

Upon completion of our program, you'll be awarded a Certified Desktop Publishing certification from Florintech Computer College. This certification is recognized worldwide and is a testament to your skills and knowledge in the field of desktop publishing. Our certification is also a great way to enhance your resume and increase your job prospects in the competitive job market.

So why wait? Sign up for our Certified Desktop Publishing program today and take the first step towards a successful career in digital publishing. With Florintech Computer College, you'll gain the skills and knowledge you need to succeed in today's ever-evolving digital landscape!"
        listOne=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        listTwo=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        listThree=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        aboutCourseTextTwo="Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Optio atque nulla veritatis dolorem esse ad
        quibusdam ipsam doloribus, dolor vero
        voluptates alias porro mollitia architecto ex magni magnam?
        Aut, consequatur."
        whatToLearnText="  Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cupiditate adipisci fuga nam veniam
        perferendis,
         quidem recusandae cum voluptatem
        debitis. Enim omnis illum laboriosam dolorem blanditiis neque
        repellat voluptas! Enim, autem?"
        courseOutline={[
          "All Courses",
          "Powerpoint",
          "Powerpoint",
          "Adobe Photoshop",
          "ADV CorelL Draw",
        ]}
        secondImageText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum reiciendis cupiditate asperiores nulla hic quidem ab,
        voluptatem voluptatibus accusamus ea est eum soluta maiores
        deleniti ratione laudantium. Modi, sequi quasi."
        courseDuration="4 months"
        coursePrice="40,000"
      />
    </Box>
  );
}

export default CertifiedDeskTopPublishing;
