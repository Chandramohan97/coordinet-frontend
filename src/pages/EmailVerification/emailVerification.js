import React from 'react'
import { Flex,Link,Heading,VStack,Text,Box ,Input} from '@chakra-ui/react'
import CustomButton from '../../Components/button/CustomButton';
import './EmailVerification.css'
// import LoginPage from '../LoginPage/LoginPage';
// import { Stack, Text, Box } from '@chakra-ui/react'

const EmailVerification = () => {
  
  const [length,setLength] = React.useState(0);
  const boxRef=React.useRef();
  React.useEffect( ()=>{
    const {width,height} = boxRef.current.getBoundingClientRect();
    // setLength(width1)
    console.log(width,height)
  },[])


  return (
    <div className='emailVerification'>
      <VStack display={"flex"} flexDirection="column" spacing={"15vh"}>
        <Flex my={"30px"} mx="30px" flexDirection={"row"} gap="70vw" justifyContent="space-evenly"  background="#F7F8FC">
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
       
        <VStack display={"flex"} flexDirection="column" spacing={"5vh"} >
          <Heading ref={boxRef}>We just emailed you</Heading>
          {/* using positon="relative", left=<values> and marginLeft to align text to left */}
          <Text position={"relative"} left="-2.7vw">Please enter the code we mailed you <br></br>   
          <p style={{position:"relative", left:"-3.4vw",marginTop:"0.5vh"}}>abcedfhg@gmail.com</p>
          </Text>
          <p style={{marginLeft:"-13.7vw"}}>Confirmation Code</p>
         </VStack>
        
        <form>
        <input style={{border: "none", borderBottom: "1px solid black", width: "2rem", margin: "0.5rem", textAlign: "center"}} type="text" maxLength="1"/>         
          <CustomButton
          color="white"
          height="5vh"
          width={"344.8px"}
          bg="#31bfc8"
          _hover={{ bg: "#2a9ca1" }} //blue-green
          _active={{ bg: "#555555" }}
          textAlign="center"
          fontSize="15px"
          margin="0"
          borderRadius="0px"
          value="Verify"
          />
        </form>
    </VStack>
      </div>
  )
}

export default EmailVerification