import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
  Image,Flex
} from "@chakra-ui/react";
import CustomButton from "../button/CustomButton";
import InputForm from "../InputForm/InputForm";
import googleImage from "../../Asssets/googleImage.png"
// import InputForm from "../InputForm/InputForm";

const LoginForm = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" spacing="30px">
        <Heading as="h3" fontFamily="Inder sans-setif" fontSize={{base:"medium",md:"32px"}}>
          Sign in
        </Heading>
      <form>
        <Flex spacing="20px" flexDirection="column">
          <FormControl id="email" isRequired>
            <FormLabel fontFamily={"Inder sans-serif"} fontSize={{base:"2xs",md:"medium"}} mx="11px" mt="20px">
              Email
            </FormLabel>
            <Input
              type="text"
              height={{base:"4.2vh",md:"5vh"}}
              width="20vw"
              borderRadius="5px"
              fontSize={{base:"3xs",md:"medium"}}
              placeholder="Enter email"
              textAlign={"left"}
            ></Input>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel fontFamily={"Inder sans-serif"} fontSize={{base:"2xs",md:"medium"}} mx="11px" mt="10px">
              Password
            </FormLabel>
            <Input
              textAlign={"left"}
              type="password"
              height={{base:"4.2vh",md:"5vh"}}
              width="20vw"
              borderRadius="5px"
              fontSize={{base:"small",md:"medium"}}
              textIndent="0.25rem"
              placeholder="********"
            ></Input>
          </FormControl>
        </Flex>
        <Button
          color="white"
          height={{base:"4.2vh",md:"5vh"}}
          width="20vw"
          bg="#5cb85c"
          _hover={{ bg: "#459c45" }} //blue-green
          textAlign="center"
          fontSize={{base:"small",md:"medium"}}
          margin="30px 10px"
          borderRadius="5px"
        >
          Login
        </Button>
      </form>
    </Flex>
</Box>

  );
};

export default LoginForm;
