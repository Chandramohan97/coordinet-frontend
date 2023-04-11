import React from 'react'
import { Flex, Button, HStack ,VStack,Box,Text, Heading,Spacer,Radio,RadioGroup,Stack,InputLeftElement,Input, InputGroup} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CustomButton from '../../Components/button/CustomButton'
import Navbar from '../../Components/Navbar/Navbar'
// import './TeamStrength.css'

const TeamStrength = () => {
  return (
  <div className="teamStrength">
    <Heading textAlign={"left"} fontFamily={"Inder"} 
      fontSize={{base:"15px",md:"40px"}} ml="2vw" mt={"5vh"} width="fit-content"   
    >COORDINET</Heading>
    
    <Flex
        // minHeight="100vh"
        // border="1px solid"
        width={"fit-content"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
      <Box mx={{base:"1vw ",md:"10vw"}} className='questions' display={"flex"} justifyContent="space-between" 
        flexDirection="row" width={"fit-content"}  height={"fit-content"} >
        <Text fontWeight={"bold"} height="0px" fontSize={{md:"3xl",base:"2xs"}} fontFamily={"Inder"}
          mx="2px" px={{base:"5vw",md:"2vw"}} py={{base:"20vh",md:"30vh"}} width={{base:"42vw",md:"21vw"}} textAlign="left" >Great! Just a few quick questions...
        </Text>
        <Flex flexDirection={"column"} mx="5vw" my={{md:"125px",base:"60px"}}  gap="20px" >
          <Text  textAlign="left" fontFamily={"Inder"} fontWeight={"bold"} fontSize={{base:"14px",md:"16px"}}
            width={{md:"275px",base:"200px"}} >How many people are part of your team?</Text>
          
          <Flex justify="space-between" w="100%">
            <RadioGroup >
              {/* <Flex flexDirection={"row"}  gap="10px" >   */}
              <Flex flexDirection="row" gap="10px"  >
                <VStack spacing={3} width="52%" >
                  <Box display={"flex"}  borderRadius={{base:"10px",md:"15px"}} flexDirection="row" gap="0px" backgroundColor={"white"} 
                    width={{base:"25vw",md:"10.5vw"}} height={{base:"4.5vh",md:"5vh"}} border="1px solid">
                    <Radio mx="0.5vw" fontSize={{base:"3xs",md:"medium"}}  value="1" colorScheme={"green"}>1</Radio>
                  </Box >
                  
                  <Box display={"flex"} borderRadius={{base:"10px",md:"15px"}} flexDirection="row" gap="0px" backgroundColor={"white"} 
                  width={{base:"25vw",md:"10.5vw"}} height={{base:"4.5vh",md:"5vh"}} border="1px solid"> 
                    <Radio mx="0.5vw" fontSize={{base:"large",md:"medium"}} value="11-20 employees" colorScheme={"green"}>11-20</Radio>
                  </Box>
                  <Box display={"flex"} borderRadius={{base:"10px",md:"15px"}} flexDirection="row" gap="0px" backgroundColor={"white"} 
                width={{base:"25vw",md:"10.5vw"}} height={{base:"4.5vh",md:"5vh"}} border="1px solid">
                    <Radio mx="0.5vw" fontSize={{base:"large",md:"medium"}} value="31-40 employees" colorScheme={"green"}>31-40</Radio>
                  </Box>
                  <Box display={"flex"} borderRadius={{base:"10px",md:"15px"}} flexDirection="row" gap="0px" backgroundColor={"white"} 
                    width={{base:"25vw",md:"10.5vw"}} height={{base:"4.5vh",md:"5vh"}} border="1px solid">
                    <Radio mx="0.5vw" fontSize={{base:"xs",md:"medium"}} value="51-60 employees" colorScheme={"green"}>51-60</Radio>
                  </Box>
                </VStack>

                <VStack spacing={3} width="52%" >
                  <Box display={"flex"} borderRadius={{base:"10px",md:"15px"}} flexDirection="row" gap="0px" backgroundColor={"white"} 
                    width={{base:"25vw",md:"10.5vw"}} height={{base:"4.5vh",md:"5vh"}} border="1px solid">
                    <Radio mx="0.5vw" value="2-10 employees" colorScheme={"green"}>2-10 </Radio>
                  </Box >
                  <Box display={"flex"} borderRadius={{base:"10px",md:"15px"}} flexDirection="row" gap="0px" backgroundColor={"white"} 
                    width={{base:"25vw",md:"10.5vw"}} height={{base:"4.5vh",md:"5vh"}} border="1px solid">
                      <Radio mx="0.5vw" value="21-30 employees" colorScheme={"green"}>21-30</Radio>
                  </Box>
                  
                  <Box display={"flex"} borderRadius={{base:"10px",md:"15px"}} flexDirection="row" gap="0px" backgroundColor={"white"} 
                    width={{base:"25vw",md:"10.5vw"}} height={{base:"4.5vh",md:"5vh"}} border="1px solid">
                    <Radio mx="0.5vw" value="41-50 employees" colorScheme={"green"}>41-50</Radio>
                  </Box>
                  
                  <Box display={"flex"} borderRadius={{base:"10px",md:"15px"}} flexDirection="row" gap="0px" backgroundColor={"white"} 
                    width={{base:"25vw",md:"10.5vw"}} height={{base:"4.5vh",md:"5vh"}} border="1px solid">
                    <Radio mx="0.5vw" value="61-70 employees" colorScheme={"green"}>61-70</Radio>
                  </Box>
                  <Flex justifyContent="flex-end" border="1px" width={{base:"80px"}}>
                    <Link to="/projectCreation">
                      <Button 
                        width={{base:"4vw",md:"6vw"}}
                        bg="#2a9ca1"
                        _hover={{ bg: "#1C7B7F" }} 
                        _active={{ bg: "#555555" }}
                        textAlign="center"
                        fontSize={{base:"12px",md:"16px"}}
                        borderRadius="5px"
                        value="Next"
                        height={{base:"4.2vh",md:"5vh"}}
                        left={{md:"33px",base:"12px"}}
                      >Next</Button>
                      </Link>
                  </Flex>
                </VStack>
              </Flex>
            </RadioGroup>
          </Flex>
        </Flex>
      </Box>
    </Flex>
    
    
  </div>
  )
}

export default TeamStrength