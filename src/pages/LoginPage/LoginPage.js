import { VStack } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../Components/button/CustomButton.js";
import LoginForm from "../../Components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <VStack>
      <LoginForm />
    </VStack>
  );
};

export default LoginPage;
