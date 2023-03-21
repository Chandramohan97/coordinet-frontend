import { VStack } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../../Components/button/CustomButton.js";
import { Flex } from "@chakra-ui/react";
// import LoginPageHeader from "../../Components/Navbar/LoginPageHeader.js.js";
import LoginForm from "../../Components/LoginForm/LoginForm";
import Navbar from "../../Components/Navbar/Navbar.js";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Flex my={"30px"} mx="30px" flexDirection={"row"} justifyContent="space-between"  background="#F7F8FC">
        {/* <Navbar/> */}
        <h1>{""}</h1>
        <Link to="/signUp">
              <CustomButton
                  color="white"
                  height="5vh"
                  width="7vw"
                  bg="#31bfc8"
                  _hover={{ bg: "#2a9ca1" }} //blue-green
                  _active={{ bg: "#555555" }}
                  textAlign="center"
                  fontSize="15px"
                  margin="15px 10px"
                  borderRadius="5px"
                  value="Sign up"
              />
          </Link>
        </Flex>
        <LoginForm />
      
      </div>
  );        
    
  
};

export default LoginPage;
