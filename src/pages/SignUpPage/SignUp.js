import React from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import Navbar from "../../Components/Navbar/Navbar";
import CustomButton from "../../Components/button/CustomButton";
import { Flex,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const[name,setName] = React.useState("");
  const[email,setEmail] = React.useState("")
  const[mobNo,setMobNo] = React.useState(0);
  
  return( 
    <div className="SignUp">
    <Flex my={"30px"} mx="30px" flexDirection={"row"} justifyContent="space-between"  background="#F7F8FC">
      {/* <Navbar/> */}
      <h1>{""}</h1>
      <Link to="/login">
      <Button
        color="white"
        height={{ base: "2.5vh", md: "5vh" }}
        width={{ base: "10vw", md: "7vw" }}
        bg="#2B6CB0"
        _hover={{ bg: "#2a9ca1" }}
        fontSize={{base:"10px",md:"medium"}}
        textAlign="center"
        margin="15px 10px"
        borderRadius="5px" 
              >Login</Button>
        </Link>
      </Flex>
      <SignUpForm />
    
    </div>
  
  );
};

export default SignUp;
