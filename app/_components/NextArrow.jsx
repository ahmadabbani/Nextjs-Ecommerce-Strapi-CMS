import { Icon } from "@chakra-ui/react";
import React from "react";
import { MdNavigateNext } from "react-icons/md";

function NextArrow({ onClick }) {
  return (
    <Icon
      as={MdNavigateNext}
      onClick={onClick}
      position="absolute"
      top="-15%"
      right="20px"
      borderRadius="50%"
      boxSize={{ base: 6, md: 8 }}
      cursor="pointer"
      color="black"
      border="2px"
    />
  );
}

export default NextArrow;
