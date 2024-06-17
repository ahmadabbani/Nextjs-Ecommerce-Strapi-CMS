"use client";
import React, { Suspense } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
function Checkout() {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;

  const options = {
    mode: "payment",
    currency: "usd",
    amount: amount * 100,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
}

// Wrap the Checkout component with Suspense
function CheckoutWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Checkout />
    </Suspense>
  );
}

export default CheckoutWrapper;
