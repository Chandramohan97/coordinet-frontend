import React from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import Navbar from "../../Components/Navbar/Navbar";
import CustomButton from "../../Components/button/CustomButton";
import { Flex } from "@chakra-ui/react";
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
                value="Login"
            />
        </Link>
      </Flex>
      <SignUpForm />
    
    </div>
  
  );
};

export default SignUp;
// const SignUp = () => {
//   return (
//     <div className="SignUp">
//       <NavContainer>
//         <NavLogo>Coordinet</NavLogo>
//         <ButtonDiv>
//           <Link to="/login">
//             <Button>Login</Button>
//           </Link>
//         </ButtonDiv>
//       </NavContainer>
//       <Text>Let's Go !</Text>
//       <Form>
//         <Input placeholder="Enter Name"></Input>
//         <Input placeholder="Enter Mobile Number"></Input>
//         <Input placeholder="Enter Email address"></Input>
//         <Input placeholder="Enter password"></Input>
//         <Login>Sign up</Login>
//         <Login>Signup with Google</Login>
//       </Form>
//     </div>
//   );
// };

// export default SignUp;
