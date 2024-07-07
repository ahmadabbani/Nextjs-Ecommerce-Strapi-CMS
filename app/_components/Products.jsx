"use client";

import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import productsApi from "../utils/productsApi";
import ProductItemSkeleton from "./ProductItemSkeleton";
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");

  useEffect(() => {
    getProducts_();
  }, []);

  const getProducts_ = () => {
    productsApi.getProducts().then((res) => {
      setProducts(res.data.data);
      setFilteredProducts(res.data.data); // Show all products by default
    });
  };

  // Utility function to parse the price state
  const parsePrice = (price) => {
    if (price === "All") {
      return { minPrice: 0, maxPrice: "All" };
    } else if (price.endsWith("AndAbove")) {
      const minPrice = parseInt(price.split("And")[0], 10);
      return { minPrice, maxPrice: Infinity };
    } else {
      const [minPrice, maxPrice] = price.split("And").map(Number);
      return { minPrice, maxPrice };
    }
  };

  //filter products by category
  const handleCategoryChange = (category, minPrice, maxPrice) => {
    setCategory(category);
    if (category === "All" && maxPrice === "All") {
      setFilteredProducts(products);
    } else if (category === "All" && maxPrice !== "All") {
      const filtered = products.filter(
        (product) =>
          product.attributes.price >= minPrice &&
          product.attributes.price <= maxPrice
      );
      setFilteredProducts(filtered);
    } else if (category !== "All" && maxPrice === "All") {
      const filtered = products.filter(
        (product) =>
          product.attributes.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      const filtered = products.filter(
        (product) =>
          product.attributes.price >= minPrice &&
          product.attributes.price <= maxPrice &&
          product.attributes.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  //filter products by price with filtered category
  const handlePriceChange = (minPrice, maxPrice, category) => {
    if (maxPrice === Infinity) {
      setPrice(`${minPrice}AndAbove`);
    } else if (maxPrice === "All") {
      setPrice("All");
    } else {
      setPrice(`${minPrice}And${maxPrice}`);
    }
    if (maxPrice === "All" && category === "All") {
      setFilteredProducts(products);
    } else if (maxPrice === "All" && category !== "All") {
      const filtered = products.filter(
        (product) =>
          product.attributes.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else if (maxPrice !== "All" && category === "All") {
      const filtered = products.filter(
        (product) =>
          product.attributes.price >= minPrice &&
          product.attributes.price <= maxPrice
      );
      setFilteredProducts(filtered);
    } else {
      const filtered = products.filter(
        (product) =>
          product.attributes.price >= minPrice &&
          product.attributes.price <= maxPrice &&
          product.attributes.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  //slides postition reset when filtering..
  const [sliderKey, setSliderKey] = useState(0);
  const resetSlider = () => {
    setSliderKey((prevKey) => prevKey + 1);
  };

  const getCategoryBtnStyle = (currentCategory) => ({
    bordercolor: category === currentCategory ? "black" : "white",
    border: category === currentCategory ? "2px" : "0px",
  });
  const categoryBackgroundColor =
    category === "Men"
      ? "hsl(204, 85%, 90%)"
      : category === "Women"
      ? "hsl(330, 100%, 90%)"
      : category === "Kids"
      ? "hsl(57, 100%, 80%)"
      : "transparent";

  return (
    <>
      <Heading pt={16} pb={6} pl={4}>
        Trending Now
      </Heading>
      <Flex gap={6} id="products" flexWrap="wrap">
        <Flex pl={4} gap={3} flexWrap="wrap">
          <Button
            onClick={() => {
              resetSlider();
              const { minPrice, maxPrice } = parsePrice(price);
              handleCategoryChange("All", minPrice, maxPrice);
            }}
            {...getCategoryBtnStyle("All")}
          >
            All
          </Button>
          <Button
            onClick={() => {
              resetSlider();
              const { minPrice, maxPrice } = parsePrice(price);
              handleCategoryChange("Men", minPrice, maxPrice);
            }}
            {...getCategoryBtnStyle("Men")}
          >
            Men
          </Button>
          <Button
            onClick={() => {
              resetSlider();
              const { minPrice, maxPrice } = parsePrice(price);
              handleCategoryChange("Women", minPrice, maxPrice);
            }}
            {...getCategoryBtnStyle("Women")}
          >
            Women
          </Button>
          <Button
            onClick={() => {
              resetSlider();
              const { minPrice, maxPrice } = parsePrice(price);
              handleCategoryChange("Kids", minPrice, maxPrice);
            }}
            {...getCategoryBtnStyle("Kids")}
          >
            Kids
          </Button>
        </Flex>
        <Box>
          <Menu>
            <MenuButton
              as={Button}
              bgColor="orange"
              rightIcon={<RiArrowDownSLine />}
            >
              <strong>
                {price === "All"
                  ? "All prices"
                  : price === "0And10"
                  ? "$0 To $10"
                  : price === "10And20"
                  ? "$10 To $20"
                  : price === "20AndAbove"
                  ? "Above $20"
                  : ""}
              </strong>
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  resetSlider();
                  handlePriceChange(0, "All", category);
                }}
              >
                <strong>All</strong>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  resetSlider();
                  handlePriceChange(0, 10, category);
                }}
              >
                <strong>$0 To $10</strong>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  resetSlider();
                  handlePriceChange(10, 20, category);
                }}
              >
                <strong>$10 To $20</strong>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  resetSlider();
                  handlePriceChange(20, Infinity, category);
                }}
              >
                <strong>$20 And Above</strong>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      {products.length ? (
        <>
          <Box>
            <Heading
              px={4}
              pt={8}
              pb={3}
              fontSize={{ base: "20px", sm: "25px", md: "30px", lg: "35px" }}
              display="block"
              position="relative"
              w="fit-content"
              color="gray"
              fontWeight="900"
            >
              {category}
              <div
                style={{
                  position: "absolute",
                  backgroundColor: categoryBackgroundColor,
                  borderRadius: "2px",
                  height: "50%",
                  width: "80%",
                  top: "60%",
                  left: "50%",
                  transform: "translateY(-50%)",
                  zIndex: "-1",
                }}
              ></div>
            </Heading>

            <ProductList products={filteredProducts} sliderKey={sliderKey} />
          </Box>
        </>
      ) : (
        <>
          <Skeleton
            w="120px"
            h="25px"
            mt={{ base: 6, lg: 12 }}
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
    </>
  );
}

export default Products;
