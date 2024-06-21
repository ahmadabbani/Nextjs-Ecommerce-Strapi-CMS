"use client";
import { Image, Skeleton } from "@chakra-ui/react";
import React from "react";
function ProductImg({ productImg }) {
  const imageUrl =
    productImg.attributes?.img.data.attributes.formats.medium.url;
  const strapiHost = "https://strapi-ecommerce-db.onrender.com";
  // Construct the full image URL
  const fullImageUrl = `${strapiHost}${imageUrl}`;
  return (
    <>
      {productImg.attributes ? (
        <Image
          src={fullImageUrl}
          alt={productImg.attributes?.title}
          borderRadius="12px"
          mx="auto"
          w={{ base: "300px", sm: "400px", md: "500px" }}
          h={{ base: "250px", sm: "300px", md: "400px" }}
          objectFit="cover"
        />
      ) : (
        <Skeleton
          w={{ base: "300px", sm: "400px", md: "500px" }}
          h={{ base: "250px", sm: "300px", md: "400px" }}
          borderRadius="12px"
          mx="auto"
        />
      )}
    </>
  );
}

export default ProductImg;
