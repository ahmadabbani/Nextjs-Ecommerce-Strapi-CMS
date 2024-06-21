"use client";
import { CartContext } from "@/app/_context/CartContext";
import productsApi from "@/app/utils/productsApi";
import { Box, Button, Flex, Heading, useToast } from "@chakra-ui/react";
import { useUser } from "@clerk/nextjs";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { cart } = useContext(CartContext);
  const toast = useToast();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };

    createOrder_();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }

    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const clientSecret = await res.json();
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret: clientSecret,
      elements,
      confirmParams: {
        return_url: "https://strapi-ecommerce-db.onrender.com/paymentConfirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  //create order after submit payment
  const createOrder_ = () => {
    let productsIds = [];
    cart.forEach((element) => {
      productsIds.push(element?.product?.id);
    });
    const data = {
      data: {
        username: user?.fullName,
        email: user?.primaryEmailAddress.emailAddress,
        amount: amount,
        products: productsIds,
      },
    };
    productsApi.createOrder(data).then((resp) => {
      if (resp) {
        cart.forEach((item) => {
          productsApi.deleteItemFromCart(item?.id).then((res) => {});
        });
      }
    });
  };

  return (
    <Flex direction="column" justify="center">
      <Heading py={12} pl="80px">
        Please Fill Out Payment Information
      </Heading>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "0 80px",
        }}
      >
        <PaymentElement className="payment-element" />
        <Button
          type="submit"
          bgColor="green"
          color="white"
          borderRadius="0"
          mt={4}
          _hover={{ opacity: "0.8" }}
        >
          Place Order
        </Button>
      </form>
    </Flex>
  );
};

export default CheckoutForm;
