import { Icon } from "@chakra-ui/react";
import { MdNavigateBefore } from "react-icons/md";
import React from "react";

function PrvArrow({ onClick }) {
  return (
    <Icon
      as={MdNavigateBefore}
      onClick={onClick}
      position="absolute"
      top="-15%"
      right={{ base: "55px", md: "65px" }}
      borderRadius="50%"
      boxSize={{ base: 6, md: 8 }}
      cursor="pointer"
      color="black"
      border="2px"
    />
  );
}

export default PrvArrow;
