import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../assets/logo.png";

function Brand() {
  return (
    <Flex justifyContent="center" borderBottom={"1.7px solid #092038"} p={3}>
      <Image
        src={logo}
        alt="Florintech Computer College Logo"
        width={200}
        height={65}
      />
    </Flex>
  );
}

export default Brand;
