"use client";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./_components/Header";
import ContactUs from "./_components/ContactUs";
import { ClerkProvider } from "@clerk/nextjs";
import { CartContext } from "./_context/CartContext";
import React, { useState } from "react";

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ClerkProvider>
      <CartContext.Provider value={{ cart, setCart }}>
        <html lang="eng">
          <body>
            <ChakraProvider>
              <nav>
                <Header />
              </nav>
              <main>{children}</main>
              <section>
                <ContactUs />
              </section>
            </ChakraProvider>
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
