import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/CustomButton";
// import { Button } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Button,
  Image
} from "@chakra-ui/react";
import googleImage from '../../Asssets/googleImage.png'
import InputForm from "../InputForm/InputForm";


const SignUpForm = () => {

  return (
    <Box>
      <VStack justifyContent="space-between" spacing="30px">
        <Heading as="h3" fontFamily="Verdana">
          Sign Up
        </Heading>
        <form>
          <VStack >
            <FormControl id="name" isRequired >
              <FormLabel fontSize={"14px"} mx="11px">Name</FormLabel>
              <InputForm 
                type="text"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                placeholder="Enter name"
                // textIndent="0."
              ></InputForm>
              <FormLabel fontSize={"14px"} mx="11px">Mobile Number</FormLabel>
              <InputForm
                type="number"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                placeholder="Enter Mobile Number"
                // textIndent="0.1rem"
              />
              <FormLabel fontSize={"14px"} mx="11px">Email</FormLabel>
              <InputForm
                type="email"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                placeholder="Enter Email address"
                // textIndent="0.25rem"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize={"14px"} mx="11px">Password</FormLabel>
              <InputForm
                type="password"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                textIndent="0.25rem"
                placeholder="********"
              ></InputForm>
            </FormControl>
          </VStack>
          <Link to="/teamStrength">
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
          </Link>
        </form>
        <Button
          position={"relative"}
          top="-20px"
          color="black"
          height="5vh"
          width="20vw"
          bg="#f7f8fc"
          _hover={{ bg: "#dcdfe6" }} //blue-green
          _active={{ bg: "#b4b9c4" }}
          textAlign="center"
          fontSize="16px"
          border="1px solid black"
        >
          <Image src={googleImage} alt="GoogleImage" height={"20px"} mr="10px" />
          Sign up with Google
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUpForm;
