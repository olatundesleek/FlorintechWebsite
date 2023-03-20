import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
const webdevelopmentImage = images[0].webdevelopment;
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function webdevelopment() {
  return (
    <Box>
      <Header />
      <Singlecourse
        courseTitle="website Development"
        courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
        courseImage={webdevelopmentImage}
        aboutCourseText="Welcome to Florintech Computer College's Web Development program!

        In today's digital age, having a website has become a necessity for businesses and individuals alike. A website not only allows you to reach a wider audience, but it also helps establish credibility and trust with potential customers.
        
        Our Web Development program is designed to equip students with the skills and knowledge necessary to create professional and functional websites. We cover a wide range of topics, including HTML, CSS, JavaScript, and web design principles.
        
        At Florintech Computer College, we believe in a hands-on approach to learning. Our experienced instructors provide practical exercises and real-world examples to ensure that students gain practical skills that they can apply in their careers.
        
        Whether you are interested in starting a career as a web developer or want to enhance your existing skills, our Web Development program is the perfect choice. Join us today and take the first step towards building your own website or developing websites for others.
        
        Don't miss this opportunity! Register now to start your journey in the exciting world of web development. We offer flexible class schedules to accommodate your busy lifestyle.
        
        Enroll now and start building your future in web development with Florintech Computer College!"
        whatToLearnText="Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cupiditate adipisci fuga nam veniam
        perferendis,
         quidem recusandae cum voluptatem
        debitis. Enim omnis illum laboriosam dolorem blanditiis neque
        repellat voluptas! Enim, autem?"
        whatToLearnListOne="Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        whatToLearnListTwo="Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        whatToLearnListThree="Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        whatToLearnListFour="Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        whatToLearnListFive="Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        whatToLearnListSix="Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
        coursePrice="50,000"
      />
    </Box>
  );
}

export default webdevelopment;
