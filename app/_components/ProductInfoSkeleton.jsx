"use client";
import { Box, Flex, Skeleton } from "@chakra-ui/react";

const ProductInfoSkeleton = () => (
  <Box p={8}>
    <Box mb={5}>
      <Skeleton height="35px" width="500px" borderRadius="12px" mb={2} />
      <Skeleton height="15px" width="100px" borderRadius="12px" />
    </Box>
    <Box>
      <Box mb={1}>
        <Skeleton height="20px" width="500px" borderRadius="12px" mb={2} />
        <Skeleton height="20px" width="500px" borderRadius="12px" />
      </Box>
      <Skeleton height="20px" width="300px" borderRadius="12px" mb={3} />
      <Skeleton height="20px" width="100px" borderRadius="12px" mb={6} />
      <Skeleton height="35px" width="200px" borderRadius="12px" />
    </Box>
  </Box>
);

export default ProductInfoSkeleton;
