import { Box } from "@chakra-ui/react";
import React from "react";
import images from "../../Components/images.json";
const computernetworkingImg = images[5].computernetworking;
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

const BusinessElectronicAccounting = () => {
  return (
    <div>
      <Box>
        <Header />
        <Singlecourse
          courseTitle="BusinessElectronicAccounting"
          courseDetails="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsem at tortor egestas posuere sed"
          courseImage={computernetworkingImg}
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
          secondImageText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Harum reiciendis cupiditate asperiores nulla hic quidem ab,
        voluptatem voluptatibus accusamus ea est eum soluta maiores
        deleniti ratione laudantium. Modi, sequi quasi."
          coursePrice="50,000"
        />
      </Box>
    </div>
  );
};

export default BusinessElectronicAccounting;
