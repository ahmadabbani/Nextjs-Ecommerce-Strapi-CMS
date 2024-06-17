import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra,
} from "@chakra-ui/react";
import { FaChevronRight, FaHome } from "react-icons/fa";
import React from "react";
import Link from "next/link";
const ChakraFaChevronRight = chakra(FaChevronRight);

function BreadCrumb({ path }) {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<ChakraFaChevronRight color="orange" fontSize="12px" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          href="/"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <FaHome />
          <strong>Home</strong>
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          href={`/productDetails/${path?.split("/")[2]}`}
          textDecor="none"
        >
          <strong>{path?.split("/")[1]}</strong>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={`/productDetails/${path?.split("/")[2]}`}
          textDecor="none"
        >
          <strong>{path?.split("/")[2]}</strong>
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default BreadCrumb;
