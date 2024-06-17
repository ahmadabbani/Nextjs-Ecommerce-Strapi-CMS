import { Box, Button, Heading, Icon, Text, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FiXCircle } from "react-icons/fi";
import React, { useContext } from "react";
import ProductInfoSkeleton from "app/_components/ProductInfoSkeleton";
import productsApi from "app/utils/productsApi";
import { useUser } from "@clerk/nextjs";
import { CartContext } from "app/_context/CartContext";

function ProductInfo({ productInfo }) {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();
  const toast = useToast();

  const handleAddToCart = () => {
    if (!user) {
      toast({
        title: "Login Required!",
        description: "Please log in to continue",
        status: "warning",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: productInfo?.id,
        },
      };
      productsApi.addToCart(data).then(
        (resp) => {
          if (resp) {
            setCart((cart) => [
              ...cart,
              { id: resp?.data?.id, product: productInfo },
            ]);
            toast({
              title: "Item Successfully Added to Your Cart.",
              status: "success",
              position: "top",
              duration: 3000,
              isClosable: true,
            });
          }
        },
        (error) => {
          toast({
            title: { error },
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        }
      );
    }
  };
  return (
    <>
      {productInfo.attributes ? (
        <Box p={8}>
          <Box mb={5}>
            <Heading fontSize={{ base: "20px", sm: "30px", md: "50px" }}>
              {productInfo.attributes?.title}
            </Heading>
            <Text color="gray">
              <strong>{productInfo.attributes?.category}</strong>
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight="500"
              w="70%"
              mb={1}
              fontSize={{ base: "16px", sm: "18px" }}
            >
              {productInfo.attributes?.description}
            </Text>

            {productInfo.attributes?.instantdelivery ? (
              <Box mb={3} display="flex" gap={1} alignItems="center">
                {" "}
                <Icon as={RiCheckboxCircleLine} boxSize={4} color="green" />
                <Text fontSize="13px"> Eligible For Instant Delivery</Text>
              </Box>
            ) : (
              <Box mb={3} display="flex" gap={1} alignItems="center">
                {" "}
                <Icon as={FiXCircle} boxSize={4} color="red" />
                <Text fontSize="13px" color="gray">
                  {" "}
                  Not Eligible For Instant Delivery
                </Text>
              </Box>
            )}

            <Text mb={6} fontSize={{ base: "20px", sm: "25px" }}>
              <strong>${productInfo.attributes?.price}</strong>
            </Text>
            <Button
              onClick={() => handleAddToCart()}
              display="flex"
              gap={2}
              colorScheme="orange"
              size={{ base: "md", md: "lg" }}
            >
              {" "}
              <Icon as={FaShoppingCart} boxSize={{ base: "5", md: "6" }} />
              Add To Cart
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          {" "}
          <ProductInfoSkeleton />
        </Box>
      )}
    </>
  );
}

export default ProductInfo;
