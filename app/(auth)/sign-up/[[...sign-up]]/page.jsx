import { Flex } from "@chakra-ui/react";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <Flex w="100%" justify="center" align="center" pt={4}>
      <SignUp />
    </Flex>
  );
}
