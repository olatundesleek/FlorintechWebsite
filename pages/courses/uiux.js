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
          description="Master UI/UX design at Florintech Computer College. Learn design principles, user research, wireframing, and prototyping from industry professionals. Enhance your skills and advance your career in UI/UX with our comprehensive course. Duration: 4 months. Certification included. Enroll now"
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/uiux/",
            title: "Ui/Ux | Florintech computer college",
            description:
              " Master UI/UX design at Florintech Computer College. Learn design principles, user research, wireframing, and prototyping from industry professionals. Enhance your skills and advance your career in UI/UX with our comprehensive course. Duration: 4 months. Certification included. Enroll now.",
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
          aboutCourseText="Learn UI/UX Design at Florintech Computer College.

          At Florintech Computer College, we believe that a great user experience is at the heart of every successful product, website, or app. Our UI/UX courses cover everything from design principles and user research to wireframing and prototyping, ensuring that our students have a solid foundation in all aspects of UI/UX design.
          
          Our instructors are seasoned professionals with years of experience in the industry. They bring real-world examples and hands-on experience to the classroom, giving our students a glimpse into what it's like to work as a UI/UX designer. You'll gain valuable insights and practical skills that are in high demand in today's job market.
          
          Whether you are a seasoned professional looking to enhance your skills or a beginner just starting out, our UI/UX courses cater to all skill levels. As a top computer school in Ojo, we ensure that each student receives individual attention and support throughout their learning journey with our small class sizes.
          
          At Florintech Computer College, we believe in providing a holistic learning experience. Our comprehensive curriculum and state-of-the-art facilities will equip you with the expertise needed to excel in the field of UI/UX design. Upon completion, you'll receive a certification that can boost your resume and career prospects.
          
          Join us to learn UI/UX design and advance your career in this dynamic field. Don't miss this opportunity to become a skilled UI/UX designer and make an impact in the tech industry.
          
          Contact Florintech Computer College today to learn more about our UI/UX courses and start your journey to success. Enroll now and take the first step towards a rewarding career in UI/UX design!"
          courseOutline={["Figma", "Adobe xd", "Adobe Illustrator"]}
          coursePrice="150,000"
          courseDuration="3 months"
           classType="Physical/Virtual"
        />
      </Box>
    </div>
  );
};

export default uiux;
