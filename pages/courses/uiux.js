import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

const UIUX = () => {
  return (
    <div>
      <Box>
        <Header />
        <Singlecourse
          courseTitle="UI/UX"
          courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
          courseImage={courseImages.ux}
          aboutCourseText=" Welcome to Florintech Computer College, where we are dedicated to providing our students with the best education in the fields of UI/UX design. Our comprehensive curriculum is designed to equip students with the knowledge, skills, and tools they need to succeed in the ever-evolving world of design.

At Florintech, we believe that a great user experience is at the heart of every successful product, website, or app. Our UI/UX courses cover everything from design principles and user research to wireframing and prototyping, ensuring that our students have a solid foundation in all aspects of UI/UX design.

Our instructors are seasoned professionals with years of experience in the industry. They bring real-world examples and hands-on experience to the classroom, giving our students a glimpse into what it's like to work as a UI/UX designer.

Whether you're a seasoned professional looking to enhance your skills or a beginner just starting out, our UI/UX courses cater to all skill levels. Our small class sizes ensure that each student receives individual attention and support throughout their learning journey.

At Florintech, we believe in providing a holistic learning experience. That's why we offer our students access to the latest design tools and software, as well as opportunities to work on real-world projects and network with industry professionals.

So why choose Florintech Computer College for your UI/UX education? With our expert instructors, comprehensive curriculum, and hands-on approach to learning, we are confident that we can help you achieve your goals and set you on the path to success in the exciting field of UI/UX design.

Enroll now and take the first step towards a rewarding career in UI/UX design!"
          listOne=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
          listTwo=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
          listThree=" Lorem ipsum dolor sit amet consectetur
        adipisicing elit."
          aboutCourseTextTwo="Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Optio atque nulla veritatis dolorem esse ad
        quibusdam ipsam doloribus, dolor vero
        voluptates alias porro mollitia architecto ex magni magnam?
        Aut, consequatur."
          whatToLearnText="  Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Cupiditate adipisci fuga nam veniam
        perferendis,
         quidem recusandae cum voluptatem
        debitis. Enim omnis illum laboriosam dolorem blanditiis neque
        repellat voluptas! Enim, autem?"
          courseOutline={["Figma", "Adebo", "Illustrator"]}
          secondImageText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum reiciendis cupiditate asperiores nulla hic quidem ab,
        voluptatem voluptatibus accusamus ea est eum soluta maiores
        deleniti ratione laudantium. Modi, sequi quasi."
          courseDuration="4 months"
          coursePrice="70,000"
        />
      </Box>
    </div>
  );
};

export default UIUX;
