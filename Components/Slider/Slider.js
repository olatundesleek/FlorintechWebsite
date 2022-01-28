import { Box, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Slider() {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      infiniteLoop={true}
      emulateTouch={true}
      showIndicators={false}
    >
      <div>
        <img src="https://res.cloudinary.com/de0x1equu/image/upload/v1600773486/Student_1_hhux1k.png" />
        <Box>
          <Text></Text>
        </Box>
        <p className="legend">Legend 1</p> <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/de0x1equu/image/upload/v1600773475/student1ed_ycght3.png" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://res.cloudinary.com/de0x1equu/image/upload/v1600773441/student2ed_gl6tlj.png" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default Slider;
