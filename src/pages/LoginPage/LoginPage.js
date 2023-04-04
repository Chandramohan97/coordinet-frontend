import { VStack } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../Components/button/CustomButton.js";
import { Flex,Button } from "@chakra-ui/react";
// import LoginPageHeader from "../../Components/Navbar/LoginPageHeader.js.js";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Navbar from "../../Components/Navbar/Navbar.js";
import { Link } from "react-router-dom";
import SignInWithGoogle from "../googleRegistration/SignInWithGoogle.js";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Flex my={"30px"} mx="30px" flexDirection={"row"} justifyContent="space-between"  background="#F7F8FC">
        {/* <Navbar/> */}
        <h1>{""}</h1>
        <Link to="/signUp">
              <Button
                  color="white"
                  height={{base:"2.5vh",md:"5vh"}}
                  width={{base:"3.5vw",md:"7vw"}}
                  bg="#2B6CB0"
                  _hover={{ bg: "#3A8CCE" }}
                  fontSize={{base:"3xs",md:"medium"}}
                  textAlign="center"
                  margin="15px 10px"
                  borderRadius="5px" 
              >Sign Up</Button>
          </Link>
        </Flex>
        <LoginForm />
        
        {/* <SignInWithGoogle /> */}
      
      </div>
  );        
    
  
};

export default LoginPage;
