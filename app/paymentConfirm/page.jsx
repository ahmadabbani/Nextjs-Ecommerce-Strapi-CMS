"use client";
import { Box, Center, Heading, Text, Button, Link } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";

const SuccessPayment = () => {
  const router = useRouter();

  return (
    <Box p={8} maxW="600px" mx="auto" textAlign="center">
      <Center mb={8}>
        <FiCheckCircle size={72} color="green" />
      </Center>
      <Heading mb={4} color="green">
        Payment Successful!
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={8}>
        Thank you for your order. Your payment has been successfully processed
        and your order has been placed.
      </Text>
      <Button
        colorScheme="blue"
        onClick={() => router.push("/")}
        size="lg"
        px={8}
        mb={8}
      >
        Continue Shopping
      </Button>
      <Text fontSize="sm" color="gray.400">
        Need help? Contact <Link>support.stripe.com</Link>
      </Text>
    </Box>
  );
};

export default SuccessPayment;
