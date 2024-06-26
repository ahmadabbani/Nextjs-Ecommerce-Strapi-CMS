"use client";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { CartContext } from "app/_context/CartContext";
import productsApi from "app/utils/productsApi";
import Cart from "./Cart";
import { RiArrowDownSLine } from "react-icons/ri";
function Header() {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const [cartOpen, setCartOpen] = useState(false);
  useEffect(() => {
    user && getCartItems();
  }, [user]);

  //when refresh the page, items fetched from backend to cart
  const getCartItems = () => {
    productsApi
      .getUserCartItems(user?.primaryEmailAddress.emailAddress)
      .then((resp) => {
        const items = resp?.data?.data;
        items &&
          items.forEach((item) => {
            setCart((cart) => [
              ...cart,
              { id: item?.id, product: item?.attributes?.products?.data[0] },
            ]);
          });
      });
  };

  return (
    <Flex justify="space-between" p={4}>
      <Flex gap={{ base: "3", sm: "4", md: "6" }} align="center">
        <Image src="/logo.svg" alt="logo" />
        <UnorderedList
          display="flex"
          gap={{ base: "4", sm: "6" }}
          listStyleType="none"
          alignItems="center"
          fontWeight="700"
        >
          <Button
            as={Link}
            href="/"
            bgColor="transparent"
            fontSize={{ base: "15px", sm: "20px" }}
            color="black"
            fontWeight="700"
            size={{ base: "sm", md: "md" }}
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            Home
          </Button>
          <ListItem fontSize={{ base: "15px", sm: "20px" }} color="black">
            <Menu>
              <MenuButton
                as={Button}
                bgColor="transparent"
                fontSize={{ base: "15px", sm: "20px" }}
                color="black"
                fontWeight="700"
                size={{ base: "sm", md: "md" }}
                rightIcon={<RiArrowDownSLine />}
                _hover={{
                  bg: "black",
                  color: "white",
                }}
              >
                Products
              </MenuButton>
              <MenuList
                borderRadius="12px"
                border="none"
                boxShadow="3px 3px 12px rgba(0, 0, 0, 0.35)"
              >
                <MenuItem
                  as={Link}
                  href="#products"
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  color="black"
                  onClick={() => {}}
                  fontSize={{ base: "15px", sm: "20px" }}
                >
                  <strong>For Women</strong>
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="#products"
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  color="black"
                  onClick={() => {}}
                  fontSize={{ base: "15px", sm: "20px" }}
                >
                  <strong>For Men</strong>
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="#products"
                  _hover={{
                    bg: "black",
                    color: "white",
                  }}
                  color="black"
                  onClick={() => {}}
                  fontSize={{ base: "15px", sm: "20px" }}
                >
                  <strong>For Kids</strong>
                </MenuItem>
              </MenuList>
            </Menu>
          </ListItem>
          <Button
            as={Link}
            href="/"
            bgColor="transparent"
            fontSize={{ base: "15px", sm: "20px" }}
            size={{ base: "sm", md: "md" }}
            color="black"
            fontWeight="700"
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            About Us
          </Button>
          <Button
            as={Link}
            href="#contact"
            bgColor="transparent"
            fontSize={{ base: "15px", sm: "20px" }}
            size={{ base: "sm", md: "md" }}
            color="black"
            fontWeight="700"
            _hover={{
              bg: "black",
              color: "white",
            }}
          >
            Contact
          </Button>
        </UnorderedList>
      </Flex>
      {!user ? (
        <Flex gap={2} align="center">
          <Button
            as={Link}
            href="/sign-in"
            size={{ base: "sm", sm: "md" }}
            color="white"
            bg="black"
            fontWeight="700"
            _hover={{
              bg: "gray.700",
            }}
          >
            Sign In
          </Button>
          <Button
            as={Link}
            href="/sign-up"
            size={{ base: "sm", sm: "md" }}
            color="white"
            bg="black"
            fontWeight="700"
            _hover={{
              bg: "gray.700",
            }}
          >
            Sign Up
          </Button>
        </Flex>
      ) : (
        <Flex gap={8} align="center">
          <Box position="relative">
            <Icon
              onClick={() => {
                setCartOpen(!cartOpen);
              }}
              as={FaShoppingCart}
              boxSize={{ base: "4", sm: "5", md: "6" }}
              cursor="pointer"
              display="block"
            />
            <Text
              w="21px"
              h="21px"
              position="absolute"
              right="-80%"
              top="-60%"
              borderRadius="100%"
              bgColor="orange"
              color="white"
              fontSize="12px"
              textAlign="center"
              fontWeight="600"
              lineHeight="21px"
            >
              {cart?.length}
            </Text>

            <Box position="absolute" top="100%" right="80%" zIndex={1}>
              {cartOpen && <Cart />}
            </Box>
          </Box>
          <UserButton afterSignOutUrl="/sign-in" />
        </Flex>
      )}
    </Flex>
  );
}

export default Header;
