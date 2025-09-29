import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

function StudentsTrained() {
  return (
    <Box className="students-trained" py={16} px={8}>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={10}
        maxW="1200px"
        mx="auto"
      >
        {/* Left Text Section */}
        <Box flex="1" className="students-text" color="white">
          <Heading as="h2" size="xl" mb={6}>
            Empowering Thousands of Students with Practical ICT Training in Ojo,
            Lagos
          </Heading>
          <Text fontSize="lg" mb={4} color="gray.200">
            Over the years, <strong>Florintech Computer College</strong>, a
            trusted <strong>computer training school in Ojo, Lagos</strong>, has
            successfully trained{" "}
            <strong>thousands of students and professionals</strong>. From
            beginners learning the basics of computer operation to advanced
            learners in specialized ICT fields, our{" "}
            <strong>100% practical computer training </strong>
            ensures every student graduates with the confidence and digital
            skills to excel in today’s technology-driven world.
          </Text>
          <Text fontSize="lg" color="gray.200">
            Our mission is to make{" "}
            <strong>technology simple, accessible, and career-focused, </strong>
            giving every learner the opportunity to succeed in the digital
            economy.
          </Text>
        </Box>

        {/* Right Image Section */}
        <Box flex="1" className="students-image">
          <Image
            src="https://res.cloudinary.com/de0x1equu/image/upload/q_auto/v1758804840/Students_of_Florintech_Computer_School_in_Ojo_eo3qb2.webp"
            alt="Students enrolled for ICT training at Florintech Computer Training School, Ojo, Lagos"
            borderRadius="lg"
            shadow="2xl"
            width="100%"
            height="auto"
            objectFit="cover"
            transition="transform 0.3s ease, box-shadow 0.3s ease"
            _hover={{
              transform: "scale(1.03)",
              shadow: "dark-lg",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default StudentsTrained;
