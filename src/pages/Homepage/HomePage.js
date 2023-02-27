import React from 'react'
import { Text,Stack,Box, Flex } from '@chakra-ui/react'
import CustomButton from '../../Components/button/CustomButton'
import Navbar from '../../Components/Navbar/Navbar'
const HomePage = () => {
  return (
    <Flex my={"30px"} flexDirection={"row"} justifyContent="space-around"  background="#F7F8FC">
      <Navbar/>
      <Flex flexDirection={"row"} justifyContent="space-around"  >
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
    </Flex>
  </Flex>
  )
}

export default HomePage;
