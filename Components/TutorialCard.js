import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const TutorialCard = ({ img, info, children, title, to }) => {
  return (
    <Box className="card-container">
      <Box className="video-con">
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${img}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          borderRadius="20px"
        />
      </Box>
      <Stack mt={6} spacing="3">
        <Heading size="5">{title}</Heading>

        <Text w={320}>{info}</Text>
      </Stack>
      <Divider />
      <Box>
        <Link legacyBehavior href={to} passHref>
          <a>
            <ButtonGroup spacing="2" m={2}>
              <Button variant="solid" colorScheme="blue">
                {children}
              </Button>
            </ButtonGroup>
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default TutorialCard;
