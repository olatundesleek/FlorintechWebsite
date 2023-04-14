import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
const databaseadministrationImg = images[7].databaseadministration;
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

const AutoCadSpecialist = () => {
  return (
    <div>
      <Box>
        <Header />
        <Singlecourse
          courseTitle="AutoCad Specialist Course"
          courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
          courseImage={databaseadministrationImg}
          aboutCourseText=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cupiditate adipisci fuga nam veniam
        perferendis,
         quidem recusandae cum voluptatem
        debitis. Enim omnis illum laboriosam dolorem blanditiis neque
        repellat voluptas! Enim, autem?
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Autem voluptate et maiores quasi amet iste
        sunt eligendi repudiandaequisquam
        consequatur!"
          listOne=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
          listTwo=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
          listThree=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
          aboutCourseTextTwo="Welcome to Florintech Computer College, where we specialize in providing high-quality training and education in AutoCAD. Our team of experts is dedicated to helping students master this powerful software and develop the skills they need to excel in their careers.

What is AutoCAD?

AutoCAD is a computer-aided design (CAD) software used by architects, engineers, and designers to create precise 2D and 3D drawings. It is a versatile tool that allows users to design everything from buildings and infrastructure to mechanical parts and products.

Why Become an AutoCAD Specialist?

Becoming an AutoCAD specialist can open up a world of opportunities in various industries. As an AutoCAD specialist, you'll have the skills to create detailed technical drawings, schematics, and models that are essential to many different types of projects. You could find work in fields such as architecture, engineering, construction, manufacturing, and more.

At Florintech Computer College, our AutoCAD Specialist program is designed to give students a comprehensive understanding of the software and how it's used in real-world applications. Our program covers topics such as:

Understanding the AutoCAD interface and workspace
Creating and editing basic drawings
Using layers, annotations, and dimensions
Working with blocks and attributes
Creating and managing layouts and templates
Applying advanced drawing techniques
Our experienced instructors are certified AutoCAD professionals who bring real-world expertise to the classroom. They provide personalized attention and guidance to each student, ensuring that everyone has the opportunity to master the material.

Why Choose Florintech Computer College?

Florintech Computer College is committed to providing high-quality, affordable education that prepares students for success in their chosen fields. Our AutoCAD Specialist program is designed to be flexible and accommodating, with both in-person and online learning options available.

We offer hands-on training that allows students to apply their skills in a practical setting. Our state-of-the-art facilities are equipped with the latest technology and software, ensuring that students have access to the tools they need to succeed.

Whether you're just starting out in your career or looking to enhance your skills, Florintech Computer College can help you achieve your goals. Contact us today to learn more about our AutoCAD Specialist program and how we can help you reach your full potential."
          whatToLearnText="  Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cupiditate adipisci fuga nam veniam
        perferendis,
         quidem recusandae cum voluptatem
        debitis. Enim omnis illum laboriosam dolorem blanditiis neque
        repellat voluptas! Enim, autem?"
          courseOutline={["Autocad 2D", "Autocad 3D"]}
          secondImageText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum reiciendis cupiditate asperiores nulla hic quidem ab,
        voluptatem voluptatibus accusamus ea est eum soluta maiores
        deleniti ratione laudantium. Modi, sequi quasi."
          coursePrice="100,000"
          courseDuration="4 months"
        />
      </Box>
    </div>
  );
};

export default AutoCadSpecialist;
