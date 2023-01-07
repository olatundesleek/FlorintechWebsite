import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../../Components/Header";
import Singlecourse from "../../Components/single-course/Singlecourse";

const ComputerProgramming = () => {
  return (
    <div>
      <Box>
        <Header />
        <Singlecourse />
      </Box>
    </div>
  );
};

export default ComputerProgramming;
