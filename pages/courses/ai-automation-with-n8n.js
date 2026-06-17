import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function AIAutomationWithN8N() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        title="AI Automation with N8N Course in Ojo, Lagos | Florintech Computer College"
        description="Learn AI automation and workflow automation with N8N in Ojo, Lagos. No-code automation training for business process automation. Enroll at Florintech today."
        canonical="https://www.florintechcomputercollege.com/courses/ai-automation-with-n8n/"
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/ai-automation-with-n8n/",
          title: "AI Automation with N8N | Florintech Computer College",
          description: "Learn AI automation, workflow automation, and process automation with N8N at Florintech Computer College in Lagos",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/aiautomation.jpg",
              width: 800,
              height: 600,
              alt: "AI Automation with N8N Course",
              type: "image/jpeg",
            },
          ],
          siteName: "Florintech Computer College",
        }}
      />
      <Header />
      <Singlecourse
        courseTitle="AI Automation with N8N"
        courseImage={courseImages.aiautomation}
        aboutCourseText="Automation is transforming how businesses operate. Repetitive tasks that consume hours can be automated in minutes, saving costs and improving efficiency. N8N is a powerful open-source workflow automation platform that integrates with hundreds of tools and services, and when combined with AI, it creates intelligent automation systems that work for you 24/7.

Our AI Automation with N8N course teaches you to build automated workflows without coding. You'll learn to connect APIs, integrate applications, and create intelligent processes that handle everything from data entry to customer communication. Start simple: connect Airtable to Gmail, automate invoice processing, sync data across platforms. Progress to complex workflows: AI-powered customer responses, intelligent lead routing, automated report generation.

By the end of this intensive 6-week course, you'll understand how to identify automation opportunities in any business, design workflows, and implement them using N8N and AI integrations. Freelancers and consultants using N8N automation skills command premium rates. Businesses desperately need people who can streamline their operations."
        courseOutline={[
          "Introduction to Automation and N8N",
          "N8N Interface and Core Concepts",
          "Workflow Basics and Nodes",
          "Triggers and Execution",
          "Understanding APIs",
          "HTTP Requests and API Integration",
          "Creating Your First Workflow",
          "Conditional Logic and Routing",
          "Error Handling and Retry Logic",
          "Data Transformation",
          "Working with JSON",
          "Google Workspace Integration",
          "Email Automation",
          "Airtable and Database Integration",
          "Slack and Communication Tools",
          "Webhook Configuration",
          "Scheduling and Automation",
          "Introduction to AI Integration",
          "OpenAI and ChatGPT Integration",
          "AI-Powered Workflow Creation",
          "Document Processing with AI",
          "Customer Service Automation",
          "Lead Generation and Qualification",
          "Invoice and Data Processing",
          "Building Multi-Step Workflows",
          "Deployment and Monitoring",
          "Real-World Business Use Cases",
          "Final Project: Complete Automation Solution",
        ]}
        coursePrice="150,000"
        courseDuration="6 weeks"
        classType="Physical/Virtual"
      />
    </Box>
  );
}

export default AIAutomationWithN8N;
