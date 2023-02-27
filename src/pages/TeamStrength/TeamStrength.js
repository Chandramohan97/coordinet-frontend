import React from 'react'
import { Flex, HStack ,VStack,Box,Text, Heading,Spacer} from '@chakra-ui/react'
import RadioInputForm from '../../Components/RadioInputForm/RadioInputForm'
import CustomButton from '../../Components/button/CustomButton'
import Navbar from '../../Components/Navbar/Navbar'
import './TeamStrength.css'

const TeamStrength = () => {
  return (
  <> 
    <Flex my={"30px"} mx="30px" flexDirection={"row"} justifyContent="space-between"  background="#F7F8FC">
        <Navbar/>    
    </Flex>
    <Flex flexDirection={"column"} mx="30vw" my="125px" gap="20px">
        <Text as="h3" textAlign="left" fontWeight={"bold"} width="275px" >How many people are part of your company?</Text>
        <HStack>
              {/* <Heading>Great! Just a few questions</Heading> */}
              <VStack>     
                <RadioInputForm value="1"></RadioInputForm>
                <RadioInputForm value="11-20 employees"></RadioInputForm>
                <RadioInputForm value="31-40 employees"></RadioInputForm>
                <RadioInputForm value="51-60 employees"></RadioInputForm>
              </VStack>

              <Spacer></Spacer>
        
              <VStack>
                <RadioInputForm value="2-10 employees"></RadioInputForm>
                <RadioInputForm value="21-30 employees"></RadioInputForm>
                <RadioInputForm value="41-50 employees"></RadioInputForm>
                <RadioInputForm value="61-70 employees"></RadioInputForm>
                
              </VStack>
      </HStack>    
      <div id="btn">
        <CustomButton color="white"
                      height="5vh"
                      width="8vw"
                      bg="#31bfc8"
                      _hover={{ bg: "#2a9ca1" }} //blue-green
                      _active={{ bg: "#555555" }}
                      textAlign="center"
                      fontSize="16px"
                      margin="30px 100px"
                      borderRadius="5px"
                      value="Next"
              />      
        </div>
        </Flex>
    </>

  )
}

export default TeamStrength