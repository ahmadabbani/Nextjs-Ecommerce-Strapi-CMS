import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <Flex h="85vh" bgGradient="linear(to-r, blue.200, orange.500)" pl={4}>
      <Flex flexBasis="50%" direction="column" align="center" justify="center">
        <Heading fontSize="55px">
          Unlock Your{" "}
          <Box
            display="inline"
            w="fit-content"
            bgGradient="linear(to-r, orange.500, blue.500)"
            bgClip="text"
          >
            Style
          </Box>
        </Heading>
        <Text
          mt={10}
          mb={5}
          textAlign="center"
          color="gray.6
        00"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eaque
          in corporis magni commodi repellendus soluta aliquid accusamus
          dignissimos sed eligendi, perferendis molestias aperiam nemo?
        </Text>
        <Button
          variant="outline"
          bg="black"
          color="white"
          size={{ base: "sm", sm: "md", md: "lg" }}
          border="1px"
          borderRadius={0}
          borderColor="black"
          _hover={{
            opacity: "0.8",
          }}
        >
          <Box bgGradient="linear(to-r, blue.300, orange.400)" bgClip="text">
            SHOP NOW
          </Box>
        </Button>
      </Flex>
      <Box flexBasis="50%">
        <Image src="/hero.jpg" alt="hero" w="100%" maxW="100%" h="100%" />
      </Box>
    </Flex>
  );
}

export default Hero;
