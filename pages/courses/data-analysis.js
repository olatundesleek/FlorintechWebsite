import { Box } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function DataAnalysis() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        title="Data Analysis Course in Ojo, Lagos | Florintech ICT Training"
        keywords="data analysis course in ojo, data analysis course in lagos, data analysis training in ojo, data analysis training in lagos, data analytics course in ojo, data analytics course in lagos, learn data analysis in ojo, learn data analysis in lagos"
        description="Learn Data Analysis at Florintech, Ojo’s trusted computer school. Gain ICT training in Excel, SQL, Power BI, Python, and data visualization for real-world projects."
        canonical="https://www.florintechcomputercollege.com/courses/data-analysis/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/data-analysis/",
          title: "Data Analysis | Florintech Computer College",
          description:
            "Learn Data Analysis at Florintech, Ojo’s trusted computer school. Gain ICT training in Excel, SQL, Power BI, Python, and data visualization for real-world projects.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/dataanalysis.jpg",
              width: 800,
              height: 600,
              alt: "data analysis",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="Data Analysis"
        courseImage={courseImages.dataanalysis}
        aboutCourseText="Our Data Analysis Course in Ojo, Lagos equips you with the skills to collect, clean, and interpret data for smarter decision making. At Florintech, we don’t just teach theory, we focus on practical ICT training that helps you become job-ready.

With small class sizes, you’ll get personalized guidance from expert instructors while working on real-world projects that prepare you for internships, freelance roles, or professional positions in Lagos and beyond.

This training covers Excel, SQL, Power BI, and Python – the essential tools of modern data analysts. You’ll also learn data visualization and storytelling, making it easy to present insights clearly and effectively. By the end of the course, you’ll be confident in analyzing datasets, creating dashboards, and supporting business decisions with data."
        courseOutline={[
          "Introduction to Data Analysis",
          "Microsoft Excel for Data Analysis",
          "Data Cleaning and Transformation",
          "Descriptive Statistics and Data Summarization",
          "SQL for Data Analysis",
          "Data Visualization with Excel and Power BI",
          "Introduction to Python for Data Analysis",
          "Working with Pandas and NumPy",
          "Exploratory Data Analysis (EDA)",
          "Data Storytelling and Presentation",
          "Dashboards and Interactive Reports",
          "Case Studies and Real-World Projects",
        ]}
        coursePrice="250,000"
        courseDuration="3 months"
        classType="Physical/Virtual"
      />
    </Box>
  );
}

export default DataAnalysis;
