import React,{useState} from "react";
// import {  } from "react-router-dom";
// import {useHistory} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import axios from "axios";

// import { Button } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Flex,
  Button,
  Image,
  Input,
  useToast
} from "@chakra-ui/react";
import googleImage from '../../Asssets/googleImage.png'

const SignUpForm = () => {

  const navigate = useNavigate();

  const toast = useToast();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [mobileNo,setMobNo] = useState('');

  
  const handleContinue = async() =>{

    // event.preventDefault();
    const nameRegex =/^[A-Za-z ]+$/;   //Regular expressions to check for alphabet. Provision for space for spaces in the name.
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    const mobRegex = /^\d{10}$/; // 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/;  // Regular expression to check for password. 
 

    // event.preven
    if (!nameRegex.test(name)) {
      toast({
        title: "Invalid name",
        description: "Name should only contain alphabets.",
        status: "error",
        duration: 2000,
        // isClosable: false,
        variant:"green"
      });
    } else if (!mobRegex.test(mobileNo)) {
      toast({
        title: "Invalid mobile number",
        description: "Mobile number should be of 10 digits.",
        status: "error",
        duration: 2000,
        isClosable: true,
        variant:"green"
      });
    } else if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 2000,
        // isClosable: true,
        variant:"green"
      });
    } else if (!passwordRegex.test(password)) {
      toast({
        title: "Invalid password",
        description:
          "Password should be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, one digit and one special character.",
        status: "error",
        duration: 2000,
        // isClosable: true,
        variant:"green"
      });
    } else {
      try{
        const response = await axios.post('http://localhost:3000/signUp',{
          name,
          mobileNo,
          email,
          password
        })

        if(response.status == 200 ){
          localStorage.setItem("Name",name);   //using localStroage to transfer data across different pages.
          localStorage.setItem("mobileNo",mobileNo)
          // local
          navigate('/teamStrength')
        }
      }catch(error){
        toast({
          title : "Error",
          description :"Error while registering ",
          status:"error",
          duration:1000,
          variant:"green"
        })
        console.log(error)
      }
    }
  }
  
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Flex flexDirection="column" spacing="30px">
        <Heading as="h3" fontFamily="Inder sans-setif" fontSize={{base:"32px",md:"32px"}}>
          Sign Up
        </Heading>
      <form>
        <Flex spacing="20px" flexDirection="column">

        <FormControl id="name" isRequired>
            <FormLabel fontFamily={"Inder sans-serif"} fontSize={{base:"large",md:"medium"}} mx="11px" mt="20px">
              Name
            </FormLabel>
            <Input
              type="text"
              height={{base:"4.2vh",md:"5vh"}}
              width={{ base: "60vw", md: "20vw" }}
              borderRadius="5px"
              fontSize={{base:"medium",md:"medium"}}
              placeholder="Enter name"
              textAlign={"left"}
              onChange={(e)=>setName(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel fontFamily={"Inder sans-serif"} fontSize={{base:"large",md:"medium"}} mx="11px" mt="20px">
              Mobile Number
            </FormLabel>
            <Input
              type="number"
              height={{base:"4.2vh",md:"5vh"}}
              fontSize={{base:"medium",md:"medium"}}
              borderRadius="5px"
              // fontSize={{base:"3xs",md:"medium"}}
              placeholder="Enter mob no"
              textAlign={"left"}
              onChange={(e)=>setMobNo(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel fontFamily={"Inder sans-serif"} fontSize={{base:"large",md:"medium"}} mx="11px" mt="20px">
              Email
            </FormLabel>
            <Input
              type="text"
              height={{base:"4.2vh",md:"5vh"}}
              fontSize={{base:"medium",md:"medium"}}
              borderRadius="5px"
              // fontSize={{base:"3xs",md:"medium"}}
              placeholder="Enter email"
              textAlign={"left"}
              onChange={(e)=>setEmail(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel fontFamily={"Inder sans-serif"} fontSize={{base:"large",md:"medium"}} mx="11px" mt="10px">
              Password
            </FormLabel>
            <Input
              textAlign={"left"}
              type="password"
              height={{base:"4.2vh",md:"5vh"}}
              fontSize={{base:"medium",md:"medium"}}
              borderRadius="5px"
              // fontSize={{base:"small",md:"medium"}}
              textIndent="0.25rem"
              placeholder="********"
              onChange={(e)=>setPassword(e.target.value)}
            ></Input>
          </FormControl>
            {/* <Link to="/emailVerification"> */}
              <Button
                color="white"
                height={{base:"4.2vh",md:"5vh"}}
                fontSize={{base:"medium",md:"medium"}}
                bg="#2a9ca1"
                _hover={{ bg: "#1C7B7F" }} 
                textAlign="center"
                // fontSize={{base:"small",md:"medium"}}
                margin="30px 10px"
                borderRadius="5px"   
                onClick={handleContinue} 
              >
              Continue
              </Button>
            {/* </Link> */}
        </Flex>
        {/* <Link to="/emailVerification"> */}
          
        {/* </Link> */}
      </form>
    </Flex>
</Box>
  );
};

export default SignUpForm;
