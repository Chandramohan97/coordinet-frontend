import { Flex, Text, Box, Image } from '@chakra-ui/react'
import CustomButton from '../button/CustomButton'
import { Link } from 'react-router-dom'
import img from "../../Asssets/landingPage(1).png"

import React from 'react'
import { BlockMapBuilder } from 'draft-js'

const Navbar = () => {
  return (
  <Flex flexDirection={"column"}>
    <Flex my={"30px"} flexDirection={"row"} justifyContent="space-between" background="#F7F8FC">
        <Text fontFamily="Jacques Francois"
            fontWeight="regular"
            fontSize="40px"
            color="#000000"
            ml="5vw"
            // position={"relative"}
            // left="-100px"
            >
            COORDINET
        </Text>

        <Flex flexDirection={"row"} justifyContent="space-around" mr={"23vw"} >
        <CustomButton
                color="black"
                  height="5vh"
                  width="7vw"
                //   bg="#31bfc8"
                  _hover={{ 
                    transform:"translate(0px,-5px)",
                    borderBottom : "2px solid red",
                    borderColor:"blue"}} 
                  _active={{ bg: "#555555" }}
                  textAlign="center"
                  fontSize="15px"
                  margin="15px 10px"
                  borderRadius="5px"
                  value="Home"
        />  
        <Link to="/login">
            <CustomButton
                  color="black"
                    height="5vh"
                    width="7vw"
                    // bg="#31bfc8"
                    _hover={{ 
                      transform:"translate(0px,-5px)",
                      borderBottom : "2px solid red",
                      borderColor:"blue"}}
                    _active={{ bg: "#555555" }}
                    textAlign="center"
                    fontSize="15px"
                    margin="15px 10px"
                    borderRadius="5px"
                    value="Login"
            />  
        </Link>
            <Link to="/signUp">
                <CustomButton
                    color="black"
                    height="5vh"
                    width="7vw"
                    // bg="#31bfc8"
                    _hover={{ 
                      transform:"translate(0px,-5px)",
                      borderBottom : "2px solid red",
                      borderColor:"blue"}}
                    _active={{ bg: "#555555" }}
                    textAlign="center"
                    fontSize="15px"
                    margin="15px 10px"
                    borderRadius="5px"
                    value="Sign up"
                />
              </Link>
              <CustomButton
                    color="black"
                    height="5vh"
                    width="7vw"
                    // bg="#31bfc8"
                    _hover={{ 
                      transform:"translate(0px,-5px)",
                      borderBottom : "2px solid red",
                      borderColor:"blue"}}
                    _active={{ bg: "#555555" }}
                    textAlign="center"
                    fontSize="15px"
                    margin="15px 10px"
                    borderRadius="5px"
                    value="About"
                />
          </Flex> 
      </Flex>
      
    </Flex>
  );
  
}

export default Navbar ;