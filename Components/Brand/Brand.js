import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

function Brand() {
  return (
    <Link href="/">
      <Flex>
        <Image
          src={logo}
          alt="Florintech Computer College Logo"
          width={200}
          height={70}
        />
      </Flex>
    </Link>
  );
}

export default Brand;
