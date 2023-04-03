import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../button/CustomButton";
// import { Button } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Button,
  Image,
  Input
} from "@chakra-ui/react";
import googleImage from '../../Asssets/googleImage.png'

const SignUpForm = () => {

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" spacing="30px">
        <Heading as="h3" fontFamily="Inder sans-setif" fontSize={{base:"medium",md:"32px"}}>
          Sign Up
        </Heading>
      <form>
        <Flex spacing="20px" flexDirection="column">

        <FormControl id="name" isRequired>
            <FormLabel fontFamily={"Inder sans-serif"} fontSize={{base:"2xs",md:"medium"}} mx="11px" mt="20px">
              Name
            </FormLabel>
            <Input
              type="text"
              height={{base:"4.2vh",md:"5vh"}}
              width="20vw"
              borderRadius="5px"
              fontSize={{base:"3xs",md:"medium"}}
              placeholder="Enter name"
              textAlign={"left"}
            ></Input>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel fontFamily={"Inder sans-serif"} fontSize={{base:"2xs",md:"medium"}} mx="11px" mt="20px">
              Mobile Number
            </FormLabel>
            <Input
              type="text"
              height={{base:"4.2vh",md:"5vh"}}
              width="20vw"
              borderRadius="5px"
              fontSize={{base:"3xs",md:"medium"}}
              placeholder="Enter mob no"
              textAlign={"left"}
            ></Input>
          </FormControl>
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
        <Link to="/emailVerification">
          <Button
            color="white"
            height={{base:"4.2vh",md:"5vh"}}
            width="20vw"
            bg="#2a9ca1"
            _hover={{ bg: "#1C7B7F" }} 
            textAlign="center"
            fontSize={{base:"small",md:"medium"}}
            margin="30px 10px"
            borderRadius="5px"
          >
          Continue
          </Button>
        </Link>
      </form>
    </Flex>
</Box>
  );
};

export default SignUpForm;
