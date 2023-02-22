import React from "react";
import CustomButton from "../button/CustomButton";
const SignUpForm = () => {
  return (
    <Box>
      <VStack justifyContent="space-between" spacing="10px">
        <Heading as="h2" fontFamily="Verdana">
          Sign in to Coordinet
        </Heading>
        <form>
          <VStack spacing="20px">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                height="5vh"
                width="20vw"
                borderRadius="5px"
                placeholder="Enter email address"
                textIndent="0.25rem"
              ></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
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
          >
            Login
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
          borderRadius="5px"
        >
          Sign in with Google
        </CustomButton>
      </VStack>
    </Box>
  );
};

export default SignUpForm;
