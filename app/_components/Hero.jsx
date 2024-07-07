import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <Flex h="85vh" position="relative" className="hero-flex">
      <Box
        className="hero-text"
        pt={6}
        position="absolute"
        left={{ base: "auto", lg: "0px" }}
        right={{ base: "50px", lg: "auto" }}
        top="20px"
        bottom="0"
        w="fit-content"
        h="auto"
      >
        <Heading
          fontSize={{ base: "25px", sm: "30px", md: "35px" }}
          pl={4}
          pt={{ base: 4, md: 10 }}
        >
          {" "}
          UNLOCK
        </Heading>
        <Heading
          fontSize={{ base: "40px", sm: "45px", md: "50px" }}
          pl={12}
          pt={{ base: 4, md: 10 }}
        >
          {" "}
          YOUR
        </Heading>
        <Heading
          fontSize={{ base: "55px", sm: "60px", md: "65px" }}
          pl={20}
          pt={{ base: 4, md: 10 }}
        >
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
          as={Link}
          href="#products"
          bgColor="black"
          color="white"
          size={{ base: "sm", sm: "md", md: "lg" }}
          borderRadius={0}
          fontWeight="700"
          ml={12}
          mt={{ base: 6, md: 12 }}
          _hover={{
            opacity: "0.9",
          }}
        >
          SHOP NOW
        </Button>
      </Box>
      <Box flexBasis="100%">
        <Image
          className="hero-img"
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
