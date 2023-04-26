import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import { courseImages } from "../../Components/images";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

const DigitalMedia = () => {
  return (
    <div>
      <Box>
        <DefaultSeo {...SEO}
          title="  Digital Media| Florintech computer college"
          description=" At Florintech Computer College, we offer a wide range of courses that cover all the major office applications."
          openGraph={{
            url: "https://www.florintechcomputercollege.com/courses/digitalmedia/",
            title: " Digital Media | Florintech computer college",
            description:
              " At Florintech Computer College, we offer a wide range of courses that cover all the major office applications.",
            images: [
              {
                url: "https://www.florintechcomputercollege.com/images/dg.jpg",
                width: 800,
                height: 600,
                alt: "digitalmedia",
                type: "image/jpeg",
              },
            ],
            siteName: "Florintech Computer College",
          }}
          
        />
        <Header />
        <Singlecourse
          courseTitle="Ultimate Digital Media Course"
          // courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
          courseImage={courseImages.digitalmedia}
          aboutCourseText="Welcome to our website, where we explore the world of digital media and how it impacts our lives. In this article, we will focus on Florintech Computer College, and how they are preparing students for careers in the ever-evolving field of digital media.

Digital media is a broad term that encompasses various forms of communication, including websites, social media, videos, podcasts, and more. With the rise of the internet, digital media has become an essential part of our daily lives, and it continues to shape the way we interact with the world.

Florintech Computer College is a leading institution that provides students with the skills and knowledge necessary to succeed in the digital media industry. The college offers various courses, ranging from web development and graphic design to digital marketing and video production.

One of the unique aspects of Florintech Computer College is its focus on hands-on learning. Students have access to state-of-the-art facilities and equipment, including high-end computers, cameras, and software. This allows them to gain practical experience and develop their skills in real-world scenarios.

The college also places a significant emphasis on industry partnerships, ensuring that students have access to relevant and up-to-date knowledge. Florintech Computer College has established partnerships with various digital media companies, providing students with internship opportunities and exposure to industry experts.

In addition to its academic programs, Florintech Computer College also offers a range of extracurricular activities, including clubs and events that allow students to network and connect with peers who share similar interests.

Whether you are interested in pursuing a career in web development, graphic design, or digital marketing, Florintech Computer College provides a solid foundation for success. With its commitment to hands-on learning, industry partnerships, and extracurricular activities, students at Florintech Computer College can gain the skills and experience necessary to thrive in the fast-paced world of digital media.

If you are interested in learning more about Florintech Computer College and its programs, we encourage you to explore our website and contact us for more information.!"
          //   listOne=" Lorem ipsum dolor sit amet consectetur
          // adipisicing elit."
          //   listTwo=" Lorem ipsum dolor sit amet consectetur
          // adipisicing elit."
          //   listThree=" Lorem ipsum dolor sit amet consectetur
          // adipisicing elit."
          //   aboutCourseTextTwo="Lorem ipsum dolor sit amet consectetur
          // adipisicing elit. Optio atque nulla veritatis dolorem esse ad
          // quibusdam ipsam doloribus, dolor vero
          // voluptates alias porro mollitia architecto ex magni magnam?
          // Aut, consequatur."
          //   whatToLearnText="  Lorem ipsum dolor sit amet consectetur
          // adipisicing elit. Cupiditate adipisci fuga nam veniam
          // perferendis,
          //  quidem recusandae cum voluptatem
          // debitis. Enim omnis illum laboriosam dolorem blanditiis neque
          // repellat voluptas! Enim, autem?"
          courseOutline={[
            "internet Essential",
            "introduction",
            "content/keyword marketing",
            "introduction to online market",
            "search Engine optimization",
          ]}
          //   secondImageText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          // Harum reiciendis cupiditate asperiores nulla hic quidem ab,
          // voluptatem voluptatibus accusamus ea est eum soluta maiores
          // deleniti ratione laudantium. Modi, sequi quasi."
          courseDuration="4 months"
          coursePrice="30,000"
        />
      </Box>
    </div>
  );
};

export default DigitalMedia;
