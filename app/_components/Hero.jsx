import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <Flex h="85vh" position="relative">
      <Box
        pt={6}
        position="absolute"
        left="0"
        top="0"
        bottom="0"
        w="full"
        h="auto"
      >
        <Heading fontSize="35px" pl={4} pt={10}>
          {" "}
          UNLOCK
        </Heading>
        <Heading fontSize="50px" pl={12} pt={10}>
          {" "}
          YOUR
        </Heading>
        <Heading fontSize="65px" pl={20} pt={10}>
          <Box
            display="inline"
            w="fit-content"
            bgGradient="linear(to-r, black, gray.300)"
            bgClip="text"
          >
            Style
          </Box>
        </Heading>
        <Button
          bgColor="black"
          color="white"
          size={{ base: "sm", sm: "md", md: "lg" }}
          borderRadius={0}
          fontWeight="700"
          ml={12}
          mt={12}
          _hover={{
            opacity: "0.9",
          }}
        >
          SHOP NOW
        </Button>
      </Box>
      <Box flexBasis="100%">
        <Image
          src="/hero31.jpg"
          alt="hero"
          h="100%"
          w="full"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}

export default Hero;
