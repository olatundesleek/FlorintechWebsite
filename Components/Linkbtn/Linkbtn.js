import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";

function Linkbtn({ caption, to, className, ...rest }) {
  return (
    <Flex>
      <Box as="button" {...rest}>
        <Link legacyBehavior href={to}>
          <a>{caption}</a>
        </Link>
      </Box>
    </Flex>
  );
}

export default Linkbtn;
