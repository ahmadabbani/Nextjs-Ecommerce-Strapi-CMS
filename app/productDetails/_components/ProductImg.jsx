"use client";
import { Image, Skeleton } from "@chakra-ui/react";
import React from "react";
function ProductImg({ productImg }) {
  const imageUrl =
    productImg.attributes?.img.data.attributes.formats.medium.url;
  const strapiHost = "https://strapi-sqlite-yh3g.onrender.com";
  // Construct the full image URL
  const fullImageUrl = `${strapiHost}${imageUrl}`;
  return (
    <>
      {productImg.attributes ? (
        <Image
          src={fullImageUrl}
          alt={productImg.attributes?.title}
          borderRadius="12px"
          w="500px"
          h="400px"
        />
      ) : (
        <Skeleton w="500px" h="400px" borderRadius="12px" />
      )}
    </>
  );
}

export default ProductImg;
