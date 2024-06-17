"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useRouter } from "next/router";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
function Checkout() {
  const router = useRouter();
  const { amount } = router.query;
  const options = {
    mode: "payment",
    currency: "usd",
    amount: Number(amount) * 100,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searhParams.get("amount"))} />
    </Elements>
  );
}

export default Checkout;
