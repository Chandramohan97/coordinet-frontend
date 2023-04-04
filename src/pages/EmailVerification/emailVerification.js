import React from 'react'
import { Flex,Heading,VStack,Text,Box ,Input, PopoverAnchor} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useRef } from 'react'

import './EmailVerification.css'
// import LoginPage from '../LoginPage/LoginPage';
// import { Stack, Text, Box } from '@chakra-ui/react'

const EmailVerification = () => {
  
  const [length,setLength] = React.useState(0);
  const [dimensions,setDimensions] = React.useState({ width: 0, height: 0 });

  const boxRef=React.useRef();
  React.useEffect( ()=>{
    const {width,height} = boxRef.current.getBoundingClientRect();
    const obj = boxRef.current.getBoundingClientRect();
    // console.log(obj.height)
    // console.log(boxRef.current.getBoundingClientRect().height)
    // console.log(width,height)
    setDimensions({width,height});
    },[dimensions.height,dimensions.width])


  return (
    <div className='emailVerification'>
      <VStack display={"flex"} flexDirection="column" spacing={"15vh"}>
       
        <Flex display={"flex"} flexDirection="column"  >
          <Heading ref={boxRef} >We just emailed you</Heading>
          {/* using positon="relative", left=<values> and marginLeft to align text to left */}
         <Text textAlign={"left"} mt="2vh" width={dimensions.width}>Please enter the code we mailed you <br></br>   
            <p>abcedfhg@gmail.com</p>
            </Text>
          <Text mt="2vh" textAlign={"left"} width={dimensions.width}>Confirmation Code</Text>
         </Flex>
        <form>
          <Box className='inputBox' display={"flex"} flexDirection="row" gap="12px" >
            <input 
             style={{"width": dimensions.width/4 - 10 }}/>
           <input 
             style={{"width": dimensions.width/4 - 10}}/>
             <input 
             style={{"width": dimensions.width/4 - 10}}/>
             <input 
             style={{"width": dimensions.width/4 - 10}}/>
          </Box>
          <Link to="/teamStrength">
            <Button
              color="white"
              height={dimensions.height}
              width={dimensions.width}
              bg="#2a9ca1"
            _hover={{bg: "#1C7B7F"}}
              _active={{ bg: "#1f8c95" }}
              textAlign="center"
              fontSize="15px"
              margin='30px 0px'
              borderRadius="0px"
              >Verify</Button>
            </Link>
            </form>
        <div className='links'>
          <a href="#">Resend Code{" "}</a> 
          <p>or{" "}</p> 
          <a href='/'>Logout</a>
        </div>
    </VStack>
      </div>
  )
}

export default EmailVerification