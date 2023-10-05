import { Box } from "@chakra-ui/react";
import NextLink from "next/link";

function Link({ href, children, ...rest }) {
  return (
    <Box as="span" {...rest}>
      <NextLink legacyBehavior href={href}>
        <a>{children}</a>
      </NextLink>
    </Box>
  );
}

export default Link;
