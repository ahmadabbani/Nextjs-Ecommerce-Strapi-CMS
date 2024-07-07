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
  const strapiHost = "https://strapi-ecommerce-db.onrender.com";
  return (
    <Box
      w={{ base: "250px", sm: "350px" }}
      minH="200px"
      maxH="300px"
      borderRadius="12px"
      bgColor="white"
      boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1), 0px -4px 8px rgba(0, 0, 0, 0.1)"
      p={5}
      zIndex={200}
      overflow="auto"
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
      {cart?.length === 0 ? (
        <Flex
          direction="column"
          h="full"
          justify="center"
          align="center"
          zIndex={200}
        >
          <Heading fontSize={{ base: "16px", sm: "20px", lg: "23px" }}>
            Cart is currently empty.
          </Heading>
          <Link
            href="/"
            fontSize="14px"
            color="gray.600"
            w="full"
            fontWeight="500"
            textAlign="center"
            display="block"
          >
            Keep looking to find what you need.
          </Link>
        </Flex>
      ) : (
        <>
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
            mb={4}
            textDecor="none"
          >
            View my cart ({cart?.length})
          </Button>
          <Link
            href="/"
            color="gray.600"
            w="full"
            fontWeight="500"
            textAlign="center"
            display="block"
          >
            Continue Shopping
          </Link>
        </>
      )}
    </Box>
  );
}

export default Cart;
