import { Box, Text, Grid } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import CourseTab from "../../Components/Coursetab/CourseTab";
import Header from "../../Components/Header";
import { courseImages } from "../../Components/images";
import { Flex } from "@chakra-ui/react";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";

function index() {
  return (
    <Box>
      <DefaultSeo
        {...SEO}
        title="Computer & ICT Courses in Ojo, Lagos | Florintech Computer College"
        canonical="https://www.florintechcomputercollege.com/courses/"
        description="Learn web development, graphics design, digital marketing, cybersecurity & data analysis at Florintech Computer College, Ojo Lagos. Enroll today."
        openGraph={{
          url: "https://www.florintechcomputercollege.com/courses/",
          title: "Computer & ICT Courses in Ojo, Lagos | Florintech Computer College",
          description:
            "Learn web development, graphics design, digital marketing, cybersecurity & data analysis at Florintech Computer College, Ojo Lagos. Enroll today.",
          siteName: "Florintech Computer College",
          images: [
            {
              url: "https://www.florintechcomputercollege.com/images/logo.jpg",
              width: 800,
              height: 600,
              alt: "Florintech Computer College Logo",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Header />
      <Banner
        pageName="Courses"
        pageDetails="At Florintech, we provide ICT training and professional courses designed to equip students with essential digital skills. As a computer school in Ojo, Lagos, our focus is on practical, hands-on learning that prepares learners for real opportunities in tech. Our courses cover web development, digital marketing, cybersecurity, graphics design, data analysis and more, giving you the tools to build a successful career in today’s digital world."
      />
      {/* the courses text */}
      <Flex align="center" justify="center" className="course-text">
        <Box>{/* <h1 className="course-text-left">Courses</h1> */}</Box>
        <Box className="course-text-right">
          <h2>Explore Our Courses</h2>
        </Box>
      </Flex>
      {/*  the courses images */}
      <Flex
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
        flexFlow="wrap"
        p={{ base: "0 20px", sm: 0, md: 0, lg: 0, xl: 0 }}
        // variants={container}
        // initial="hidden"
        // animate="visible"
      >
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/web-development"
            courseText="Our Web Development program is designed to equip students with the skills and knowledge necessary to create professional and functional websites. We cover a wide range of topics, including HTML, CSS, JavaScript, and web design principles.
        
        At Florintech Computer College, we believe in a hands-on approach to learning. Our experienced instructors provide practical exercises and real-world examples to ensure that students gain practical skills that they can apply in their careers.
        
        Whether you are interested in starting a career as a web developer or want to enhance your existing skills, our Web Development program is the perfect choice. Join us today and take the first step towards building your own website or developing websites for others.
        
        Don't miss this opportunity! Register now to start your journey in the exciting world of web developmen."
            courseTitle="Web Development"
            courseImage={courseImages.webdevelopment}
            price="200,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/frontend-web-development"
            courseText="This comprehensive React.js course is designed to equip students with the skills and knowledge necessary to become proficient React.js developers. students will start with a strong foundation in HTML, CSS, and JavaScript before diving into React.js, a popular JavaScript library for building modern web applications. Throughout the course, students will gain hands-on experience through practical projects and assignments, enabling them to create interactive and dynamic web applications."
            courseTitle="Front End Web Development with React.js "
            courseImage={courseImages.reactjs}
            price="300,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/backend-development"
            courseText="Our Backend Development course with Node.js is tailored for individuals aspiring to become proficient backend developers. This comprehensive course equips you with the skills and knowledge needed to excel in the dynamic world of backend development using Node.js, one of the most versatile and in-demand technologies in the field."
            courseTitle="Back-End Development with Node.js "
            courseImage={courseImages.nodejs}
            price="400,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/full-stack-web-development"
            courseText="This intensive program covers a wide spectrum of skills, technologies, and industry best practices to ensure that graduates are well-equipped for success in the ever-evolving field of web development.

            Throughout this immersive journey, you will learn the intricacies of both front-end and back-end development, gaining expertise in the latest web technologies, frameworks, and tools."
            courseTitle="Full-Stack Web Development "
            courseImage={courseImages.fullstack}
            price="600,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/web-design-with-wordpress"
            courseText="Learn web design with WordPress at Florintech Computer College! Master how to build and customize professional, responsive websites using the world’s leading CMS."
            courseTitle="Web Design with Wordpress"
            courseImage={courseImages.wordpress}
            price="100,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/certified-graphics-professional"
            courseText=" we offer comprehensive training programs for aspiring graphics professionals. Our courses are designed to help individuals develop the skills and knowledge needed to become certified graphics professionals.

Our Certified Graphics Professional program is designed to provide students with a deep understanding of graphic design principles and software tools. Through a combination of classroom instruction, hands-on exercises, and real-world projects, students will learn how to create high-quality graphics that meet the needs of clients and customers.

The program covers a wide range of topics, including graphic design theory, color theory, typography, layout and composition, image editing, and vector graphics. Students will also learn how to use industry-standard software tools, including Adobe Photoshop, Illustrator, and InDesign.

At the end of the program, students will be prepared to take the Certified Graphics Professional exam."
            courseTitle="Certified Graphics Professional"
            courseImage={courseImages.graphics}
            price="80,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/desktop-publishing"
            courseText=" we offer comprehensive courses on desktop publishing that cover everything from basic concepts to advanced techniques. Our courses are designed to teach students how to use desktop publishing software to create professional documents with ease and efficiency. We provide hands-on training using the latest software tools and techniques, so you can gain practical experience in the field.

Our instructors are experienced professionals with years of experience in the desktop publishing industry."
            courseTitle="Desktop Publishing"
            courseImage={courseImages.desktoppublishing}
            price="60,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/office-application"
            courseText="Office applications are an essential part of any modern workplace, and mastering them is a must for anyone who wants to succeed in their career."
            courseTitle="Office Application"
            courseImage={courseImages.officeapplication}
            price="30,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/autocad-specialist"
            courseText="AutoCAD is a computer-aided design (CAD) software used by architects, engineers, and designers to create precise 2D and 3D drawings. It is a versatile tool that allows users to design everything from buildings and infrastructure to mechanical parts and products.

Why Become an AutoCAD Specialist?

Becoming an AutoCAD specialist can open up a world of opportunities in various industries. As an AutoCAD specialist, you'll have the skills to create detailed technical drawings, schematics, and models that are essential to many different types of projects. You could find work in fields such as architecture, engineering, construction, manufacturing, and more.

At Florintech Computer College, our AutoCAD Specialist program is designed to give students a comprehensive understanding of the software and how it's used in real-world applications. Our program covers topics such as:
."
            courseTitle="AutoCad Specialist"
            courseImage={courseImages.autocad}
            price="200,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/advanced-desktop-publishing"
            courseText="Our Advanced Desktop Publishing program is designed to provide you with the skills and knowledge you need to excel in the world of digital publishing.

Desktop publishing has become an essential skill in today's fast-paced digital world. Whether you're creating brochures, flyers, newsletters, or other marketing materials, having a strong understanding of desktop publishing tools and techniques is crucial. That's where our Advanced Desktop Publishing program comes in.

At Florintech Computer College, we offer a comprehensive training program that covers all aspects of desktop publishing. Our program includes in-depth training on industry-standard software applications such as Adobe InDesign, Adobe Illustrator, and Adobe Photoshop. You'll learn how to create and design professional-grade documents, layouts, and graphics that meet the highest industry standards.

Our Advanced Desktop Publishing program is ideal for both beginners and professionals looking to enhance their skills. Our instructors are industry experts with years of experience in the field, and they'll provide you with practical, hands-on training that will help you master the techniques and tools used in desktop publishing.

Upon completion of our program, you'll be awarded a Advanced Desktop Publishing certification from Florintech Computer College. This certification is recognized worldwide and is a testament to your skills and knowledge in the field of desktop publishing. Our certification is also a great way to enhance your resume and increase your job prospects in the competitive job market."
            courseTitle="Advanced Desktop Publishing"
            courseImage={courseImages.advanceddesktoppublishing}
            price="70,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/digital-marketing-and-web-development"
            courseText="Digital media is a term that encompasses a wide range of digital technologies, including social media, mobile applications, digital advertising, and more. Our courses cover a variety of topics related to digital media, including social media marketing, digital branding, and content creation.

In addition to digital media, we also offer courses in web development. With more and more businesses relying on their online presence to reach customers, web development is a rapidly growing field. Our courses cover a variety of web development languages and technologies, including HTML, CSS, JavaScript, and more.

Whether you're looking to start a career in digital media or web development, or simply looking to enhance your skills, Florintech Computer College has the courses you need. Our experienced instructors are dedicated to helping you achieve your goals and succeed in this exciting and dynamic field.

We offer a range of programs and courses to suit your needs, including flexible scheduling options to fit your busy lifestyle."
            courseTitle="Digital Marketing And Web Development"
            courseImage={courseImages.digitalandwebdev2}
            price="250,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/business-electronic-accounting"
            courseText="we offer a range of courses that are designed to help individuals acquire the skills and knowledge needed to succeed in electronic accounting. Our courses cover the following areas:

Accounting software: We offer courses on popular accounting software such as QuickBooks, Xero, and MYOB. Our courses cover everything from basic bookkeeping to advanced financial reporting.

Taxation: Our taxation courses cover the fundamentals of taxation, including income tax, GST, and payroll tax.

Financial analysis: Our financial analysis courses cover the techniques and tools used to analyze financial data and make informed business decisions."
            courseTitle="Business Electronic Accounting"
            courseImage={courseImages.businesselectronicaccounting}
            price="60,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/office-information-management"
            courseText="we explore the importance of efficient information management in the workplace, and how it can be achieved using modern technologies and strategies. In this page, we will specifically highlight the benefits of Office Information Management for Florintech Computer College.

At Florintech Computer College, we recognize the importance of efficient information management in our day-to-day operations. Our staff and faculty members rely on accurate and timely information to make informed decisions, manage resources effectively, and deliver quality education to our students.

To achieve these goals, we have implemented an Office Information Management system that is tailored to our specific needs and requirements. This system encompasses a range of software, hardware, and policies that allow us to collect, store, process, and share information securely and efficiently.

One of the key benefits of our Office Information Management system is improved productivity.."
            courseTitle="Office Information Management"
            courseImage={courseImages.officemgt}
            price="80,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/ui-ux"
            courseText="we believe that a great user experience is at the heart of every successful product, website, or app. Our UI/UX courses cover everything from design principles and user research to wireframing and prototyping, ensuring that our students have a solid foundation in all aspects of UI/UX design.

Our instructors are seasoned professionals with years of experience in the industry. They bring real-world examples and hands-on experience to the classroom, giving our students a glimpse into what it's like to work as a UI/UX designer.

Whether you're a seasoned professional looking to enhance your skills or a beginner just starting out, our UI/UX courses cater to all skill levels. Our small class sizes ensure that each student receives individual attention and support throughout their learning journey.

At Florintech, we believe in providing a holistic learning experience."
            courseTitle="UI/UX"
            courseImage={courseImages.ux}
            price="200,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/cybersecurity"
            courseText="The Junior Security Analyst course provides a comprehensive introduction to the field of cybersecurity. It is designed for individuals who want to learn cybersecurity from the ground up."
            courseTitle="Cybersecurity"
            courseImage={courseImages.Cybersecurity}
            price="300,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/digital-marketing"
            courseText="This course is designed for individuals who want to gain practical skills and knowledge in the field of digital media and marketing. It is suitable for marketing professionals, entrepreneurs, small business owners, and anyone interested in understanding and utilizing digital marketing strategies effectively."
            courseTitle="Digital Marketing"
            courseImage={courseImages.digitalmedia}
            price="60,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/data-analysis"
            courseText="This course is designed for individuals who want to gain practical skills and knowledge in the field of data analysis. It is suitable for data analysts, business intelligence professionals, and anyone interested in understanding and utilizing data analysis techniques effectively."
            courseTitle="Data Analysis"
            courseImage={courseImages.dataanalysis}
            price="250,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/video-editing"
            courseText="Learn professional video editing and video production in Lagos. Master DaVinci Resolve and Adobe Premiere Pro. Transform raw footage into compelling stories with hands-on video editing training at Florintech Computer College."
            courseTitle="Professional Video Editing"
            courseImage={courseImages.videoediting}
            price="250,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/2d-animation"
            courseText="Master 2D animation and character animation in Lagos. Learn frame-by-frame animation, Adobe Animate, and Toon Boom. Create engaging animated characters and explainer videos with professional-quality techniques at Florintech."
            courseTitle="2D Animation Fundamentals"
            courseImage={courseImages.twodanimation}
            price="350,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/3d-animation"
            courseText="Learn 3D animation and 3D modeling in Lagos. Master Blender, character rigging, and visual effects. Create stunning three-dimensional worlds and professional-quality animated sequences at Florintech Computer College."
            courseTitle="3D Animation & Modeling"
            courseImage={courseImages.threedanimation}
            price="500,000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/ai-automation-with-n8n"
            courseText="Learn AI automation and workflow automation with N8N in Lagos. Master no-code automation, business process automation, and AI integration. Build intelligent automated workflows without coding at Florintech."
            courseTitle="AI Automation with N8N"
            courseImage={courseImages.aiautomation}
            price="150,000"
          />
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
}

export default index;
