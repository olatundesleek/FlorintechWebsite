import { Flex, Text, Spacer, Center, Box } from "@chakra-ui/react";
import { MdPhone, MdOutlineMenuBook } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import Link from "next/link";

function Topnav() {
  return (
    <Flex
      bg="primary.1"
      color="#fff"
      borderBottom={"solid 3px #ddbc65"}
      flexDirection={{ base: "column", md: "row", xl: "row" }}
    >
      <Flex justifyContent={{ base: "center" }}>
        <Link legacyBehavior href="/courses">
          <a className="link">
            <BsCardChecklist /> Our Course List
          </a>
        </Link>
        <Link legacyBehavior href="tel:+2348136689745">
          <a className="link">
            <MdPhone />
            08136689745
          </a>
        </Link>
      </Flex>

      <Spacer />
      <Flex justifyContent={{ base: "center" }}>
        <Link legacyBehavior href="/register">
          <a className="link">
            <BsPencil /> Register
          </a>
        </Link>
        <Link legacyBehavior href="/verifycertificate">
          <a className="link">
            <AiOutlineSafetyCertificate /> Verify Certificate
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Topnav;
