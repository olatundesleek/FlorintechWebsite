import { Box } from "@chakra-ui/react";
import images from "../../Components/images.json";
const officeapplicationImg = images[8].officeapplication;
import React from "react";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

const OfficeApplication = () => {
  return (
    <div>
      <Box>
        <Header />
        <Singlecourse
          courseTitle="Ultimate Office Application Course"
          courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
          courseImage={officeapplicationImg}
          aboutCourseText="Welcome to Florintech Computer College, where we specialize in providing top-notch training in office applications. Our courses are designed to equip you with the skills and knowledge you need to excel in today's fast-paced office environments.

Office applications are an essential part of any modern workplace, and mastering them is a must for anyone who wants to succeed in their career. Whether you are an administrative assistant, a project manager, or a business owner, knowing how to use office applications effectively can save you time and make you more productive.

At Florintech Computer College, we offer a wide range of courses that cover all the major office applications, including Microsoft Office, Google Workspace, and more. Our instructors are experts in their field and have years of experience teaching students of all levels.

Our Microsoft Office courses cover all the popular programs, such as Word, Excel, PowerPoint, Access, and Outlook. We also offer courses on more specialized programs, such as Project and Visio. Our Google Workspace courses cover all the popular programs, such as Google Docs, Sheets, Slides, and Gmail.

Our courses are designed to be hands-on and interactive, so you will have plenty of opportunities to practice using the software in real-life situations. We also offer flexible scheduling options, so you can choose a course that fits your busy schedule.

When you enroll in one of our courses, you can be confident that you will receive top-quality training that will help you achieve your goals. Our instructors are passionate about what they do and are dedicated to helping you succeed.

So if you want to take your office skills to the next level, enroll in one of our courses today! Visit our website to learn more about our course offerings and to sign up for a course that fits your needs.!"
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
            "Computer fundemantals and information tech",
            "Ms Word",
            "Ms Excel",
            "Ms PowerPoint",
            "Internet Essentials",
          ]}
          secondImageText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum reiciendis cupiditate asperiores nulla hic quidem ab,
        voluptatem voluptatibus accusamus ea est eum soluta maiores
        deleniti ratione laudantium. Modi, sequi quasi."
          coursePrice="40,000"
        />
      </Box>
    </div>
  );
};

export default OfficeApplication;
