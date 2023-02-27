import React from "react";
import CustomButton from "../button/CustomButton";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

const SignUpForm = () => {
  return (
    <Box>
      <VStack justifyContent="space-between" spacing="30px">
        <Heading as="h3" fontFamily="Verdana">
          Sign up to Coordinet
        </Heading>
        <form>
          <VStack >
            <FormControl id="name" isRequired>
              <FormLabel fontSize={"14px"} mx="11px">Name</FormLabel>
              <Input 
                type="text"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                placeholder="Enter name"
                textIndent="0.25rem"
              ></Input>
              <FormLabel fontSize={"14px"} mx="11px">Mobile Number</FormLabel>
              <Input
                type="number"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                placeholder="Enter Mobile Number"
                textIndent="0.25rem"
              />
              <FormLabel fontSize={"14px"} mx="11px">Email</FormLabel>
              <Input
                type="email"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                placeholder="Enter Email address"
                textIndent="0.25rem"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize={"14px"} mx="11px">Password</FormLabel>
              <Input
                type="password"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                textIndent="0.25rem"
                placeholder="********"
              ></Input>
            </FormControl>
          </VStack>
          <CustomButton
            color="white"
            height="5vh"
            width="20vw"
            bg="#31bfc8"
            _hover={{ bg: "#2a9ca1" }} //blue-green
            _active={{ bg: "#555555" }}
            textAlign="center"
            fontSize="16px"
            margin="30px 10px"
            borderRadius="5px"
            value="Sign Up"
          >
          </CustomButton>
        </form>
        <CustomButton
          color="black"
          height="5vh"
          width="20vw"
          bg="#f7f8fc"
          _hover={{ bg: "#dcdfe6" }} //blue-green
          _active={{ bg: "#b4b9c4" }}
          textAlign="center"
          fontSize="16px"
          margin="30px 10px"
          borderRadius="1px solid black"
          value="Sign up with Google"
        >
        </CustomButton>
      </VStack>
    </Box>
  );
};

export default SignUpForm;
