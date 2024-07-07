import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Textarea,
  UnorderedList,
} from "@chakra-ui/react";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
function ContactUs() {
  return (
    <>
      <Box mt={16} bgColor="black" id="contact" pl={{ base: "4", md: "0" }}>
        <Heading color="white" p={4}>
          Contact Us
        </Heading>
        <Flex
          justify="space-around"
          pt={6}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "8", md: "0" }}
        >
          <Flex
            flexBasis="40%"
            direction="column"
            w={{ base: "60%", md: "auto" }}
          >
            <Heading fontSize="20px" color="white">
              Get in touch
            </Heading>
            <form>
              <Input
                type="text"
                placeholder="Your Name"
                mb={3}
                required
                border="none"
                borderBottom="2px"
                borderColor="white"
                color="white"
                borderRadius="0"
                _focus={{
                  outline: "none",
                  borderColor: "blue.200",
                  boxShadow: "none",
                }}
              />
              <Input
                type="email"
                placeholder="Your Email"
                border="none"
                borderBottom="2px"
                borderColor="white"
                borderRadius="0"
                color="white"
                _focus={{
                  outline: "none",
                  borderColor: "blue.200",
                  boxShadow: "none",
                }}
                mb={3}
                required
              />
              <Textarea
                placeholder="say hi.."
                required
                mb={3}
                color="white"
                border="2px"
                borderColor="white"
                borderRadius="0"
                _focus={{
                  outline: "none",
                  borderColor: "blue.200",
                  boxShadow: "none",
                }}
              ></Textarea>
              <Button
                type="submit"
                bgColor="transparent"
                color="white"
                border="2px"
                borderColor="white"
                size={{ base: "md", lg: "lg" }}
                _hover={{
                  opacity: "0.7",
                }}
              >
                Send
              </Button>
            </form>
          </Flex>
          <Grid
            gap={12}
            color="white"
            flexBasis="auto"
            templateRows="repeat(2, auto)"
            templateColumns="repeat(2, auto)"
          >
            <GridItem>
              <Box>
                <Heading mb={3} fontSize="20px">
                  Contact
                </Heading>
                <UnorderedList m={0} listStyleType="none">
                  <ListItem mb={2}>Call: 123-456-789</ListItem>
                  <ListItem>Email: info@myemail.com</ListItem>
                </UnorderedList>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Heading mb={3} fontSize="20px">
                  Adress
                </Heading>
                <UnorderedList m={0} listStyleType="none">
                  <ListItem mb={2}>4321 Elm Street,</ListItem>
                  <ListItem>Mystic Falls, New York.</ListItem>
                </UnorderedList>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Heading mb={3} fontSize="20px">
                  Important Links
                </Heading>
                <UnorderedList listStyleType="none" m={0}>
                  <ListItem mb={2}>
                    <Link href="#header">Home</Link>
                  </ListItem>
                  <ListItem mb={2}>
                    <Link href="#products">Products</Link>
                  </ListItem>
                  <ListItem mb={2}>
                    <Link href="/">About Us</Link>
                  </ListItem>
                  <ListItem mb={2}>
                    <Link href="#contact">Contact</Link>
                  </ListItem>
                </UnorderedList>
              </Box>
            </GridItem>
            <GridItem>
              <Box>
                <Heading mb={3} fontSize="20px">
                  Social
                </Heading>
                <UnorderedList
                  listStyleType="none"
                  display="flex"
                  gap={4}
                  m={0}
                >
                  <ListItem>
                    <Link href="#">
                      <FaFacebook />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <FaXTwitter />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <FaInstagram />
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">
                      <FaLinkedin />
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
      <Heading w="full" bgColor="black" fontSize="16px" pt={10} color="white">
        &copy; 2024 Ahmad Abbani
      </Heading>
    </>
  );
}

export default ContactUs;
