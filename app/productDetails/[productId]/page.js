"use client";

import React, { useEffect, useState } from "react";
import productsApi from "app/utils/productsApi";
import ProductImg from "../_components/ProductImg";
import ProductInfo from "../_components/ProductInfo";
import { Box, Flex, Heading, Skeleton, SkeletonText } from "@chakra-ui/react";
import BreadCrumb from "app/_components/BreadCrumb";
import ProductList from "app/_components/ProductList";
import { usePathname } from "next/navigation";
import ProductItemSkeleton from "app/_components/ProductItemSkeleton";
function ProductDetails({ params }) {
  const [productDetails, setProductDetail] = useState({});
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const path = usePathname();

  useEffect(() => {
    getProductById_();
  }, [params.productId]);

  //product details
  const getProductById_ = () => {
    productsApi.getProductById(params.productId).then((res) => {
      setProductDetail(res.data.data);
      //call //recommended products function
      getProductsByCategory_(res.data.data);
    });
  };

  //recommended products (same category)
  const getProductsByCategory_ = (product) => {
    productsApi
      .getProductsByCategory(product.attributes?.category)
      .then((res) => {
        setRecommendedProducts(res.data.data);
      });
  };

  return (
    <Box>
      <Box p={4}>
        {" "}
        <BreadCrumb path={path} />
      </Box>

      <Flex pt={5} flexDirection={{ base: "column", md: "row" }}>
        <Box flexBasis="50%">
          <ProductImg productImg={productDetails} />
        </Box>

        <Box flexBasis="50%">
          <ProductInfo productInfo={productDetails} />
        </Box>
      </Flex>

      <Box mt={{ base: 2, md: 6, lg: 12 }} id="similars">
        {recommendedProducts.length ? (
          <>
            <Heading p={4}>
              More for {productDetails?.attributes?.category}
            </Heading>
            <ProductList products={recommendedProducts} />
          </>
        ) : (
          <>
            <Skeleton
              w="120px"
              h="25px"
              mt={{ base: 2, md: 6, lg: 12 }}
              ml={4}
              mb={4}
            ></Skeleton>
            <Flex justify="space-between">
              <ProductItemSkeleton />
              <ProductItemSkeleton />
              <ProductItemSkeleton />
              <ProductItemSkeleton />
            </Flex>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductDetails;
