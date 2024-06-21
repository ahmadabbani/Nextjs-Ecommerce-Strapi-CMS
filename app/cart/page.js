"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useUser } from "@clerk/nextjs";
import { CartContext } from "app/_context/CartContext";
import productsApi from "app/utils/productsApi";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { CiTrash } from "react-icons/ci";

function CartPage() {
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const strapiHost = "https://strapi-ecommerce-db.onrender.com";
  const { user } = useUser();
  //total amount
  const getTotalAmount = () => {
    let total = 0;
    cart.forEach((element) => {
      total = total + Number(element.product.attributes.price);
    });
    return total;
  };

  //delete item
  const deleteItem = (id) => {
    productsApi
      .deleteItemFromCart(id)
      .then((res) => {
        if (res)
          setCart((oldCart) =>
            oldCart.filter((item) => item.id !== res?.data?.data?.id)
          );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      {user ? (
        <>
          {cart.length ? (
            <>
              <Heading textAlign="center" pt={6}>
                Your Cart
              </Heading>
              <Box w="full" px={20} py={10}>
                {cart?.map((item, index) => (
                  <React.Fragment key={index}>
                    <Flex justify="space-between" align="center">
                      <Flex align="center" gap={2}>
                        <Image
                          src={`${strapiHost}${item?.product?.attributes?.img?.data?.attributes?.formats.small.url}`}
                          w="100px"
                          h="100px"
                          alt={item?.product?.attributes?.title}
                        />
                        <Box>
                          <Heading fontSize="18px">
                            {item?.product?.attributes?.title}
                          </Heading>
                          <Text color="gray" fontSize="16">
                            {item?.product?.attributes?.category}
                          </Text>
                        </Box>
                      </Flex>
                      <Flex gap={3} align="center">
                        <Text fontSize="18" fontWeight="bold">
                          ${item?.product?.attributes?.price}
                        </Text>
                        <Icon
                          onClick={() => deleteItem(item?.id)}
                          boxSize={6}
                          as={CiTrash}
                          _hover={{ color: "red" }}
                          cursor="pointer"
                        />
                      </Flex>
                    </Flex>
                    <Divider borderColor="gray.400" my={2} />
                  </React.Fragment>
                ))}
                <Flex pt={4} gap={18} justifyContent="flex-end">
                  <Heading fontSize={{ base: "20px", sm: "25px", lg: "35px" }}>
                    Total:
                  </Heading>
                  <Heading fontSize={{ base: "20px", sm: "25px", lg: "35px" }}>
                    ${getTotalAmount()}
                  </Heading>
                </Flex>
                <Button
                  onClick={() =>
                    router.push(`/checkout?amount=${getTotalAmount()}`)
                  }
                  href="/checkout"
                  colorScheme="orange"
                >
                  Checkout
                </Button>
              </Box>
            </>
          ) : (
            <Flex
              height="100vh"
              width="100vw"
              position="fixed"
              top="0"
              left="0"
              zIndex="9999"
              alignItems="center"
              justifyContent="center"
            >
              <Heading size={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}>
                Your Cart is empty
              </Heading>
            </Flex>
          )}
        </>
      ) : (
        <Flex
          height="100vh"
          width="100vw"
          position="fixed"
          top="0"
          left="0"
          zIndex="9999"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner
            color="orange"
            size={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
          />
        </Flex>
      )}
    </>
  );
}
export default CartPage;
