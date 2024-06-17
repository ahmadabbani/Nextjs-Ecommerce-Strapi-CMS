"use client";
import React from "react";
import { Box, Flex, Skeleton } from "@chakra-ui/react";
function ProductItemSkeleton() {
  return (
    <Box borderRadius="12px" px={3} py={2}>
      <Skeleton
        width="250px"
        height={{ base: "150px", md: "250px" }}
        mx="auto"
        borderRadius="12px"
      />
      <Skeleton height="15px" width="150px" borderRadius="12px" my={2} />
      <Flex justify="space-between">
        <Skeleton height="10px" width="80px" borderRadius="12px" />
        <Skeleton height="10px" width="80px" borderRadius="12px" />
      </Flex>
    </Box>
  );
}

export default ProductItemSkeleton;
