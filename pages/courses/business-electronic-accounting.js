import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function BusinessElectronicAccounting() {
  return (
    <div>
      <Box>
        <DefaultSeo {...SEO}
        canonical="https://www.florintechcomputercollege.com/courses/business-electronic-accounting/"
          title="Electronic Accounting Course in Ojo, Lagos | Florintech Computer College"
          description="Learn QuickBooks and business electronic accounting at Florintech Computer College in Ojo, Lagos. Ideal for students and business owners. Enroll today."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/business-electronic-accounting/",
            title:
              "Business Electronic Accounting | Florintech computer college",
            description:
              " Our business management courses cover the principles of business management, including strategic planning, marketing, and project management.",
            images: [
              {
                url: "https://www.florintechcomputercollege.com/images/electronicsbusiness.jpg",
                width: 800,
                height: 600,
                alt: "electronicsbusiness",
                type: "image/jpeg",
              },
            ],
            siteName: "Florintech Computer College",
          }}
          
        />
        <Header />
        <Singlecourse
          courseTitle="Business Electronic Accounting"
          courseImage={courseImages.businesselectronicaccounting}
          aboutCourseText="Every business needs someone who can manage finances accurately and quickly—but manual accounting is slow and error prone. Our electronic accounting course trains you in QuickBooks and Peachtree, software that automates bookkeeping, generates financial reports instantly, and keeps businesses compliant with Nigerian tax law. Companies will pay to have someone do in hours what used to take days.

You'll learn to set up businesses in accounting software, record transactions, reconcile accounts, generate profit and loss statements, and prepare tax reports. You'll understand tax obligations in Nigeria, manage multiple client accounts, and provide insights that help businesses make smarter financial decisions. By week four, you're working with real client data. By week eight, you could manage accounting for a small business or freelance to multiple clients.

Demand is constant across businesses and NGOs who need accounting support. You'll be ready to work for businesses, accounting firms, or build your own accounting service."
          courseOutline={[
            "Computer Fundemental",
            "Microsoft office packages",
            "Introductions Peach tree Accounting",
            "Internet Essentials",
          ]}
          coursePrice="60,000"
          courseDuration="2 months"
           classType="Physical"
        />
      </Box>
    </div>
  );
};

export default BusinessElectronicAccounting;
