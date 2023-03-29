import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
const desktoppublishingImg = images[1].desktoppublishing;
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

function desktoppublishing() {
  return (
    <Box>
      <Header />
      <Singlecourse
        courseTitle="Ultimate Desktop Publishing Course"
        courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
        courseImage={desktoppublishingImg}
        aboutCourseText="Welcome to Florintech Computer College's page on desktop publishing! In today's world, creating professional-looking documents is an essential skill for businesses and individuals alike. Whether you're designing a brochure, creating a newsletter, or publishing a book, desktop publishing is the key to producing polished, visually appealing documents.

At Florintech Computer College, we offer comprehensive courses on desktop publishing that cover everything from basic concepts to advanced techniques. Our courses are designed to teach students how to use desktop publishing software to create professional documents with ease and efficiency. We provide hands-on training using the latest software tools and techniques, so you can gain practical experience in the field.

Our instructors are experienced professionals with years of experience in the desktop publishing industry. They provide expert guidance and support to ensure that you get the most out of your training. We also provide a comfortable learning environment, with fully equipped computer labs and small class sizes, so you can get personalized attention and support.

Our desktop publishing courses cover a range of topics, including typography, layout design, image manipulation, and printing techniques. We teach you how to use industry-standard software like Adobe InDesign, Illustrator, and Photoshop, so you can create professional-grade documents that are ready for print or digital distribution.

Whether you're looking to start a new career in desktop publishing, or just want to improve your skills for personal or business use, Florintech Computer College has the training you need. Our courses are flexible and affordable, with options for both in-person and online learning. We also offer customized training programs for businesses and organizations, tailored to your specific needs and goals.

In conclusion, desktop publishing is an essential skill for anyone looking to create professional documents in today's digital age. At Florintech Computer College, we provide the training and support you need to master this skill and take your career to the next level. Contact us today to learn more about our desktop publishing courses and start your journey!."
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
        courseOutline={[
          "Computer Fundamentals and information tech",
          "Typing Tutor",
          "Word Pad",
          "MS Paint",
          "Ms Word",
          "Ms Excel",
          "Ms PowerPoint",
          "Internet Essentials",
        ]}
        secondImageText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum reiciendis cupiditate asperiores nulla hic quidem ab,
        voluptatem voluptatibus accusamus ea est eum soluta maiores
        deleniti ratione laudantium. Modi, sequi quasi."
        coursePrice="30,000"
      />
    </Box>
  );
}

export default desktoppublishing;
