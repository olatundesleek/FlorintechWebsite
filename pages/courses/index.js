import { Box, Text, Grid } from "@chakra-ui/react";
import React from "react";
import CourseTab from "../../Components/Coursetab/CourseTab";
import Header from "../../Components/Header";
import images from "../../Components/images.json";
import { Flex } from "@chakra-ui/react";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";
const webdevelopment = images[0].webdevelopment;
const desktoppublishing = images[1].desktoppublishing;
const certifiedgraphicsprofessional = images[2].certifiedgraphicsprofessional;
const computernetworking = images[5].computernetworking;
const computerprogramming = images[6].computerprogramming;
const databaseadministration = images[7].databaseadministration;
const officeapplication = images[8].officeapplication;
const digitalmedia = images[9].digitalmedia;
const computersecurity = images[10].computersecurity;
const ux = images[11].ux;
const grapic = images[12].graphics;

function index() {
  return (
    <Box>
      <Header />
      {/* the courses text */}
      <Flex align="center" justify="center" className="course-text">
        <Box>
          <h1 className="course-text-left">Courses</h1>
        </Box>
        <Box className="course-text-right">
          explore the list of our numerous courses
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
        p={{ base: 0, sm: 0, md: 0, lg: 0, xl: 0 }}
      >
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/webdevelopment"
            courseText="A website not only allows you to reach a wider audience, but it also helps establish credibility and trust with potential customers.
        
        Our Web Development program is designed to equip students with the skills and knowledge necessary to create professional and functional websites. We cover a wide range of topics, including HTML, CSS, JavaScript, and web design principles.
        
        At Florintech Computer College, we believe in a hands-on approach to learning. Our experienced instructors provide practical exercises and real-world examples to ensure that students gain practical skills that they can apply in their careers.
        
        Whether you are interested in starting a career as a web developer or want to enhance your existing skills, our Web Development program is the perfect choice. Join us today and take the first step towards building your own website or developing websites for others.
        
        Don't miss this opportunity! Register now to start your journey in the exciting world of web developmen."
            courseTitle="Web Development"
            courseImage={webdevelopment}
            price="50000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/certifiedgraphicsprofessional"
            courseText=" we offer comprehensive training programs for aspiring graphics professionals. Our courses are designed to help individuals develop the skills and knowledge needed to become certified graphics professionals.

Our Certified Graphics Professional program is designed to provide students with a deep understanding of graphic design principles and software tools. Through a combination of classroom instruction, hands-on exercises, and real-world projects, students will learn how to create high-quality graphics that meet the needs of clients and customers.

The program covers a wide range of topics, including graphic design theory, color theory, typography, layout and composition, image editing, and vector graphics. Students will also learn how to use industry-standard software tools, including Adobe Photoshop, Illustrator, and InDesign.

At the end of the program, students will be prepared to take the Certified Graphics Professional exam."
            courseTitle="Certified Graphics Professional"
            courseImage={grapic}
            price="50000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/desktoppublishing"
            courseText=" we offer comprehensive courses on desktop publishing that cover everything from basic concepts to advanced techniques. Our courses are designed to teach students how to use desktop publishing software to create professional documents with ease and efficiency. We provide hands-on training using the latest software tools and techniques, so you can gain practical experience in the field.

Our instructors are experienced professionals with years of experience in the desktop publishing industry."
            courseTitle="Desktop Publishing"
            courseImage={desktoppublishing}
            price="30000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/officeapplication"
            courseText="Office applications are an essential part of any modern workplace, and mastering them is a must for anyone who wants to succeed in their career."
            courseTitle="Office Application"
            courseImage={officeapplication}
            price="15000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/autocadspecialist"
            courseText="AutoCAD is a computer-aided design (CAD) software used by architects, engineers, and designers to create precise 2D and 3D drawings. It is a versatile tool that allows users to design everything from buildings and infrastructure to mechanical parts and products.

Why Become an AutoCAD Specialist?

Becoming an AutoCAD specialist can open up a world of opportunities in various industries. As an AutoCAD specialist, you'll have the skills to create detailed technical drawings, schematics, and models that are essential to many different types of projects. You could find work in fields such as architecture, engineering, construction, manufacturing, and more.

At Florintech Computer College, our AutoCAD Specialist program is designed to give students a comprehensive understanding of the software and how it's used in real-world applications. Our program covers topics such as:
."
            courseTitle="AutoCad Specialist Course"
            courseImage={databaseadministration}
            price="50000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/certifieddesktoppublishing"
            courseText="Welcome to Florintech Computer College, your one-stop solution for professional desktop publishing training and certification. Our Certified Desktop Publishing program is designed to provide you with the skills and knowledge you need to excel in the world of digital publishing.

Desktop publishing has become an essential skill in today's fast-paced digital world. Whether you're creating brochures, flyers, newsletters, or other marketing materials, having a strong understanding of desktop publishing tools and techniques is crucial. That's where our Certified Desktop Publishing program comes in.

At Florintech Computer College, we offer a comprehensive training program that covers all aspects of desktop publishing. Our program includes in-depth training on industry-standard software applications such as Adobe InDesign, Adobe Illustrator, and Adobe Photoshop. You'll learn how to create and design professional-grade documents, layouts, and graphics that meet the highest industry standards.

Our Certified Desktop Publishing program is ideal for both beginners and professionals looking to enhance their skills. Our instructors are industry experts with years of experience in the field, and they'll provide you with practical, hands-on training that will help you master the techniques and tools used in desktop publishing.

Upon completion of our program, you'll be awarded a Certified Desktop Publishing certification from Florintech Computer College. This certification is recognized worldwide and is a testament to your skills and knowledge in the field of desktop publishing. Our certification is also a great way to enhance your resume and increase your job prospects in the competitive job market."
            courseTitle="Certified Desktop Publishing"
            courseImage={computerprogramming}
            price="70000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/digitalmediaandwebdevelopnment"
            courseText="Digital media is a term that encompasses a wide range of digital technologies, including social media, mobile applications, digital advertising, and more. Our courses cover a variety of topics related to digital media, including social media marketing, digital branding, and content creation.

In addition to digital media, we also offer courses in web development. With more and more businesses relying on their online presence to reach customers, web development is a rapidly growing field. Our courses cover a variety of web development languages and technologies, including HTML, CSS, JavaScript, and more.

Whether you're looking to start a career in digital media or web development, or simply looking to enhance your skills, Florintech Computer College has the courses you need. Our experienced instructors are dedicated to helping you achieve your goals and succeed in this exciting and dynamic field.

We offer a range of programs and courses to suit your needs, including flexible scheduling options to fit your busy lifestyle."
            courseTitle="Digital Media And Web Development"
            courseImage={digitalmedia}
            price="30000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/businesselectronicaccounting"
            courseText="we offer a range of courses that are designed to help individuals acquire the skills and knowledge needed to succeed in electronic accounting. Our courses cover the following areas:

Accounting software: We offer courses on popular accounting software such as QuickBooks, Xero, and MYOB. Our courses cover everything from basic bookkeeping to advanced financial reporting.

Taxation: Our taxation courses cover the fundamentals of taxation, including income tax, GST, and payroll tax.

Financial analysis: Our financial analysis courses cover the techniques and tools used to analyze financial data and make informed business decisions."
            courseTitle="Business Electronic Accounting"
            courseImage={computernetworking}
            price="70000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/officeinformationmgt"
            courseText="Welcome to our website dedicated to Office Information Management, where we explore the importance of efficient information management in the workplace, and how it can be achieved using modern technologies and strategies. In this page, we will specifically highlight the benefits of Office Information Management for Florintech Computer College.

At Florintech Computer College, we recognize the importance of efficient information management in our day-to-day operations. Our staff and faculty members rely on accurate and timely information to make informed decisions, manage resources effectively, and deliver quality education to our students.

To achieve these goals, we have implemented an Office Information Management system that is tailored to our specific needs and requirements. This system encompasses a range of software, hardware, and policies that allow us to collect, store, process, and share information securely and efficiently.

One of the key benefits of our Office Information Management system is improved productivity.."
            courseTitle="Office Information Management"
            courseImage={computersecurity}
            price="50000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/uiux"
            courseText="we believe that a great user experience is at the heart of every successful product, website, or app. Our UI/UX courses cover everything from design principles and user research to wireframing and prototyping, ensuring that our students have a solid foundation in all aspects of UI/UX design.

Our instructors are seasoned professionals with years of experience in the industry. They bring real-world examples and hands-on experience to the classroom, giving our students a glimpse into what it's like to work as a UI/UX designer.

Whether you're a seasoned professional looking to enhance your skills or a beginner just starting out, our UI/UX courses cater to all skill levels. Our small class sizes ensure that each student receives individual attention and support throughout their learning journey.

At Florintech, we believe in providing a holistic learning experience."
            courseTitle="UI/UX"
            courseImage={ux}
            price="80000"
          />
        </Flex>
        <Flex
          justifyContent="center"
          p={{ base: 0, sm: 5, md: 10, lg: 10 }}
          width={{ base: "100%", sm: "auto" }}
          margin="20px 0"
        >
          <CourseTab
            to="courses/digitalmedia"
            courseText="Welcome to our website dedicated to Office Information Management, where we explore the importance of efficient information management in the workplace, and how it can be achieved using modern technologies and strategies. In this page, we will specifically highlight the benefits of Office Information Management for Florintech Computer College.

At Florintech Computer College, we recognize the importance of efficient information management in our day-to-day operations. Our staff and faculty members rely on accurate and timely information to make informed decisions, manage resources effectively, and deliver quality education to our students.

To achieve these goals, we have implemented an Office Information Management system that is tailored to our specific needs and requirements. This system encompasses a range of software, hardware, and policies that allow us to collect, store, process, and share information securely and efficiently.

One of the key benefits of our Office Information Management system is improved productivity.."
            courseTitle="Digital Media"
            courseImage={computersecurity}
            price="50000"
          />
        </Flex>
      </Flex>
      <NewsLetter />
      <Footer />
    </Box>
  );
}

export default index;
