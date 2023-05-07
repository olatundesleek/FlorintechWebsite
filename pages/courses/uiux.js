import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function uiux () {
  return (
    <div>
      <Box>
        <DefaultSeo    {...SEO}
          title="Ui/Ux | Florintech computer college"
          canonical="https://www.florintechcomputercollege.com/courses/uiux/"
          description=" At florintech computer college we ensure that our students have a solid foundation in all aspects of UI/UX design"
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/uiux/",
            title: "Ui/Ux | Florintech computer college",
            description:
              " At florintech computer college we ensure that our students have a solid foundation in all aspects of UI/UX design.",
            images: [
              {
                url: "https://www.florintechcomputercollege.com/images/uiux.jpg",
                width: 800,
                height: 600,
                alt: "ui/ux",
                type: "image/jpeg",
              },
            ],
            siteName: "Florintech Computer College",
          }}
         
        />
        <Header />
        <Singlecourse
          courseTitle="UI/UX"
          courseImage={courseImages.ux}
          aboutCourseText=" Welcome to Florintech Computer College, where we are dedicated to providing our students with the best education in the fields of UI/UX design. Our comprehensive curriculum is designed to equip students with the knowledge, skills, and tools they need to succeed in the ever-evolving world of design.

At Florintech, we believe that a great user experience is at the heart of every successful product, website, or app. Our UI/UX courses cover everything from design principles and user research to wireframing and prototyping, ensuring that our students have a solid foundation in all aspects of UI/UX design.

Our instructors are seasoned professionals with years of experience in the industry. They bring real-world examples and hands-on experience to the classroom, giving our students a glimpse into what it's like to work as a UI/UX designer.

Whether you're a seasoned professional looking to enhance your skills or a beginner just starting out, our UI/UX courses cater to all skill levels. Our small class sizes ensure that each student receives individual attention and support throughout their learning journey.

At Florintech, we believe in providing a holistic learning experience. That's why we offer our students access to the latest design tools and software, as well as opportunities to work on real-world projects and network with industry professionals.

So why choose Florintech Computer College for your UI/UX education? With our expert instructors, comprehensive curriculum, and hands-on approach to learning, we are confident that we can help you achieve your goals and set you on the path to success in the exciting field of UI/UX design.

Enroll now and take the first step towards a rewarding career in UI/UX design!"
          courseOutline={["Figma", "Adobe xd", "Adobe Illustrator"]}
          coursePrice="70,000"
          courseDuration="6 months"
        />
      </Box>
    </div>
  );
};

export default uiux;
