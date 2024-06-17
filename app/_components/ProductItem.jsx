"use client";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function ProductItem({ item }) {
  const imageUrl = item?.attributes?.img?.data?.attributes?.formats.small.url;
  const strapiHost = "https://strapi-sqlite-yh3g.onrender.com";
  // Construct the full image URL
  const fullImageUrl = `${strapiHost}${imageUrl}`;

  return (
    <div>
      <Image
        w="250px"
        h={{ base: "150px", md: "250px" }}
        mx="auto"
        src={fullImageUrl}
        alt={item?.attributes?.title}
      />
      <Text mt={2}>
        <strong>{item?.attributes?.title}</strong>
      </Text>
      <Flex justify="space-between">
        <Text color="gray">{item?.attributes?.category}</Text>
        <Text>${item?.attributes?.price}</Text>{" "}
      </Flex>
    </div>
  );
}

export default ProductItem;
