import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../assets/logo.png";

function Brand() {
  return (
    <Flex  >
      <Image
        src={logo}
        alt="Florintech Computer College Logo"
        width={300}
        height={100}
      />
    </Flex>
  );
}

export default Brand;
