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
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import "../globals.css";
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

  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Flex p={4} className="header" id="header" justify="space-between">
      <Box
        id="nav-menu"
        className={`nav-menu ${showMenu ? "show-menu" : ""}`}
        w="full"
      >
        <Flex justify="space-between" alignItems="center" className="nav-list">
          <Flex
            gap={{ base: "3", sm: "4", md: "6" }}
            align="center"
            className="nav-list-left"
          >
            <Image src="/logo.svg" alt="logo" className="logo" />
            <UnorderedList
              className="list"
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
                onClick={() => {
                  handleToggle();
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
                      onClick={() => {
                        handleToggle();
                      }}
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
                      onClick={() => {
                        handleToggle();
                      }}
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
                      onClick={() => {
                        handleToggle();
                      }}
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
                onClick={() => {
                  handleToggle();
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
                onClick={() => {
                  handleToggle();
                }}
              >
                Contact
              </Button>
            </UnorderedList>
          </Flex>
        </Flex>
      </Box>
      <Button id="nav-toggle" className="nav-toggle" onClick={handleToggle}>
        {showMenu ? <IoClose /> : <FiMenu />}
      </Button>
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
        <Flex gap={8} align="center" className="cart-user">
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
