import { Box } from "@chakra-ui/react";
import appContext from '../../pages/_app'
function Hamburger({ onClick, isActiveStatus }) {
  return (
    <Box overflow={"hidden"}
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
