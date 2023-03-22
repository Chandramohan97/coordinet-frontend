import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
  Image
} from "@chakra-ui/react";
import CustomButton from "../button/CustomButton";
import InputForm from "../InputForm/InputForm";
import googleImage from "../../Asssets/googleImage.png"
// import InputForm from "../InputForm/InputForm";
const LoginForm = () => {
  return (
    <Box>
      <VStack justifyContent="space-between" spacing="30px">
        <Heading as="h3" fontFamily="Verdana">
          Sign in 
        </Heading>
        <form>
          <VStack spacing="20px">
            <FormControl id="email" isRequired>
              <FormLabel fontSize={"14px"} mx="11px">Email</FormLabel>
              <InputForm
                type="text"
                height="5vh"
                width="20vw"
                borderRadius="5px"
                placeholder="Enter email address"
                // textIndent="0.25rem"
              ></InputForm>
            </FormControl>

            <FormControl id="password" isRequired>
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
          <CustomButton
            color="white"
            height="5vh"
            width="20vw"
            bg="#31bfc8"
            _hover={{ bg: "#2a9ca1" }} //blue-green
            _active={{ bg: "#555555" }}
            textAlign="center"
            fontSize="14px"
            margin="30px 10px"
            borderRadius="5px"
            value="Login" 
          >
          </CustomButton>
        </form>
        hello
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
          <Image src={googleImage} alt="GoogleImage" height={"20px"} mr="8px" />
          Login with Google
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
