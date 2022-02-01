import { Box } from "@chakra-ui/react";

function Hamburger({ onClick, isActiveStatus }) {
  return (
    <Box
      d={{ base: "block", md: "none" }}
      className={isActiveStatus == false ? "hamburger" : "hamburger open"}
      onClick={onClick}
    >
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
    </Box>
  );
}

export default Hamburger;
