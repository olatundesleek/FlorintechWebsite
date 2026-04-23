import { Box } from "@chakra-ui/react";
import React from "react";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function AutocadSpecialist() {
  return (
    <div>
      <Box>
        <DefaultSeo
          {...SEO}
          canonical="https://www.florintechcomputercollege.com/courses/autocadspecialist/"
          title="AutoCAD Specialist Course in Ojo, Lagos | Florintech Computer College"
          description="Become an AutoCAD specialist at Florintech Computer College in Ojo, Lagos. Training for architects, engineers and designers. Practical ICT training. Register now."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/autocadspecialist/",
            title: "AutoCad Specialist | Florintech computer college",
            description:
              " At Florintech Computer College, our AutoCAD Specialist program is designed to give students a comprehensive understanding of the software and how it's used in real-world applications.",
            images: [
              {
                url: "https://www.florintechcomputercollege.com/images/autocad.jpg",
                width: 800,
                height: 600,
                alt: "autocadSpecialist",
                type: "image/jpeg",
              },
            ],
            siteName: "Florintech Computer College",
          }}
        />
        <Header />
        <Singlecourse
          courseTitle="AutoCad Specialist Course"
          courseImage={courseImages.autocad}
          aboutCourseText="AutoCAD is the industry standard for architects, engineers, and designers across Africa and the world. If you can design in AutoCAD, you can work for construction companies, oil and gas firms, manufacturing businesses, or architectural firms—all booming sectors in Nigeria.

Our AutoCAD specialist course teaches you to create precise 2D and 3D technical drawings, from building blueprints to mechanical parts. You'll master drawing tools, layers, annotations, dimensioning, and professional standards. You'll work on real projects: designing a house, creating mechanical assemblies, producing construction documents. By month two, you're building complex designs with professional accuracy. By the end, you understand CAD workflow exactly as employers expect.

Nigeria's construction and engineering sectors constantly need AutoCAD specialists. You'll be job ready for technical positions, contract work with multinational firms, or high value freelance projects designing commercial and residential buildings."
          courseOutline={["Autocad 2D", "Autocad 3D"]}
          coursePrice="200,000"
          courseDuration="2 months"
          classType="Physical/Virtual"
        />
      </Box>
    </div>
  );
}

export default AutocadSpecialist;
