"use client";
import Hero from "./_components/Hero";
import Products from "./_components/Products";
import React from "react";

function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Products />
      </section>
    </>
  );
}

export default Home;
