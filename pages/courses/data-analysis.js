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
        title="Data Analysis Course in Ojo, Lagos | Florintech Computer College"
        keywords="data analysis course in ojo, data analysis course in lagos, data analysis training in ojo, data analysis training in lagos, data analytics course in ojo, data analytics course in lagos, learn data analysis in ojo, learn data analysis in lagos"
        description="Learn data analysis with Excel, SQL, Power BI and Python at Florintech Computer College in Ojo, Lagos. Hands-on training for aspiring analysts. Register now."
        canonical="https://www.florintechcomputercollege.com/courses/data-analysis/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/data-analysis/",
          title: "Data Analysis | Florintech Computer College",
          description:
            "Learn Data Analysis at Florintech, Ojo’s trusted computer school. Gain ICT training in Excel, SQL, Power BI, Python, and data visualization for real-world projects.",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/data-analysis.jpg",
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
        aboutCourseText="Data analysts are the most valuable employees in companies because they turn numbers into profits. If you can collect data, clean it, analyze it, and tell a story with it, businesses will seek you out. Our data analysis course teaches you Excel, SQL, Power BI,Panda and Python. The exact tools companies use to make every important decision. You will learn to extract data from databases using SQL, clean messy real-world data that is full of errors, create visualizations that make complex trends obvious, and build dashboards executives actually use. You will work with real datasets: retail sales, customer behavior, financial performance. You will answer questions like Why are customers leaving ?, and Which products are most profitable? By month two, you understand data analysis workflows. By month three, you are presenting insights to decision-makers.

If you are searching for data analysis training in Lagos, ICT courses in Lagos, or professional computer training for students and career changers, this programme is a strong fit. We also make it easy for learners to compare computer training fees and understand computer school admission requirements before enrolling.
Data analysts are highly sought after across banks, fintech, e-commerce, and tech companies. You will be job-ready for analyst positions, business intelligence roles, or consulting contracts."
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
