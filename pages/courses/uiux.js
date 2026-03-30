import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function uiux() {
  return (
    <div>
      <Box>
        <DefaultSeo
          {...SEO}
          title="UI/UX Design Course in Ojo, Lagos | Florintech Computer College"
          canonical="https://www.florintechcomputercollege.com/courses/uiux/"
          description="Learn UI/UX design at Florintech, a computer school in Ojo, Lagos. Hands-on ICT training, real projects, portfolio building, and flexible schedules."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/uiux/",
            title: "UI/UX | Florintech Computer College",
            description:
              "Learn UI/UX design at Florintech Computer College. Master design principles, user research, wireframing, and prototyping from industry professionals. Enhance your skills and advance your career in UI/UX with our comprehensive course. Duration: 4 months. Certification included. Enroll now.",
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
          aboutCourseText="Our UI/UX Design Course in Ojo, Lagos is designed to help you master the skills needed to create user-friendly websites and applications. At Florintech, you’ll benefit from practical ICT training in small class sizes, ensuring personalized learning from experienced instructors with real-world design expertise.

As a local computer school in Ojo, our curriculum is tailored to meet the needs of the Nigerian digital market. You’ll gain hands-on experience through projects and portfolio building, preparing you to work as a UI/UX designer, join development teams, or take on freelance projects.

This course includes flexible schedules and practical lab sessions, making it suitable for beginners and professionals. By the end of your training, you will be proficient in design tools like Figma and Adobe XD, and confident in user research, wireframing, prototyping, and usability testing.

Start your journey to becoming a skilled UI/UX designer with Florintech today."
          courseOutline={["Figma", "Adobe xd", "Adobe Illustrator"]}
          coursePrice="200,000"
          courseDuration="3 months"
          classType="Physical/Virtual"
        />
      </Box>
    </div>
  );
}

export default uiux;
