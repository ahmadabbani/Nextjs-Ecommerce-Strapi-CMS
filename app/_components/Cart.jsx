"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { CartContext } from "app/_context/CartContext";

import React, { useContext } from "react";

function Cart() {
  const { cart } = useContext(CartContext);
  const strapiHost = "https://strapi-sqlite-yh3g.onrender.com";
  return (
    <Box
      w="300px"
      h="300px"
      borderRadius="12px"
      bgColor="white"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1), 0px -4px 8px rgba(0, 0, 0, 0.1)"
      p={5}
      overflow="auto"
      zIndex={1}
      sx={{
        "&::-webkit-scrollbar": {
          width: "12px",
        },
        "&::-webkit-scrollbar-track": {
          background: "gray.200",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "gray.400",
          borderRadius: "6px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "gray.600",
        },
      }}
    >
      {cart?.map((item, index) => (
        <>
          <Flex key={index}>
            <Image
              src={`${strapiHost}${item?.product?.attributes?.img?.data?.attributes?.formats.small.url}`}
              w="80px"
              h="80px"
              alt={item?.product?.attributes?.title}
            />
            <Box>
              <Heading fontSize="18px">
                {item?.product?.attributes?.title}
              </Heading>
              <Text color="gray" fontSize="14">
                {item?.product?.attributes?.category}
              </Text>
              <Text fontSize="13" fontWeight="bold">
                ${item?.product?.attributes?.price}
              </Text>
            </Box>
          </Flex>
          <Divider borderColor="gray.400" my={2} />
        </>
      ))}
      <Button
        as={Link}
        href="/cart"
        w="full"
        colorScheme="orange"
        mt={2}
        mb={5}
        textDecor="none"
      >
        View my cart ({cart?.length})
      </Button>
      <Link
        color="gray.600"
        w="full"
        fontWeight="500"
        textAlign="center"
        display="block"
      >
        Continue Shopping
      </Link>
    </Box>
  );
}

export default Cart;
