"use client";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "./ProductItem";
import Link from "next/link";
import NextArrow from "./NextArrow";
import PrvArrow from "./PrvArrow";
function ProductList({ products, sliderKey }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrvArrow />,
  };

  return (
    <>
      {products.length ? (
        <div style={{ position: "relative", marginLeft: "20px" }}>
          <Slider key={sliderKey} {...settings}>
            {products.map((item, index) => (
              <Box
                border="1px"
                borderColor="gray.400"
                borderRadius="12px"
                key={index}
                as={Link}
                display="block"
                href={`/productDetails/${item?.id}`}
                passHref
                px={3}
                py={2}
              >
                <>
                  <ProductItem item={item} />
                </>
              </Box>
            ))}
          </Slider>
        </div>
      ) : (
        <Heading fontSize="25px" py="80px" textAlign="center">
          No Products Matching Your Filter
        </Heading>
      )}
    </>
  );
}

export default ProductList;
