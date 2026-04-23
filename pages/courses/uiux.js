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
          description="Learn UI/UX design at Florintech Computer College in Ojo, Lagos. Master wireframing, prototyping, and user research with expert instructors. Enroll today."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/uiux/",
            title: "UI/UX | Florintech Computer College",
            description:
              "Learn UI/UX design at Florintech Computer College. Master design principles, user research, wireframing, and prototyping from industry professionals. Enhance your skills and advance your career in UI/UX with our comprehensive course. Duration: 4 months. Certification included. Enroll now.",
            images: [
              {
                url: "https://www.florintechcomputercollege.com/images/ui2.jpg",
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
          aboutCourseText="Companies only hire UI/UX designers who can prove they understand how real users interact with apps and websites. Our UI/UX design course teaches you to research user needs, design intuitive interfaces, and create prototypes that actually work before developers build them. You’ll learn from day one that design isn’t art—it’s solving problems.

You’ll master Figma, the industry standard for design collaboration, plus Adobe XD for prototyping. You’ll learn user research methods, wireframing, interaction design, and usability testing. You’ll redesign real apps and websites, getting feedback from actual users, then iterate based on data. By month two, you’ve built a professional portfolio. By month three, you understand design like companies expect.

Tech startups, fintech firms, and e commerce companies across Lagos actively hire UI/UX designers. You’ll be ready to land junior design roles, freelance high value design projects, or startup design positions."
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
