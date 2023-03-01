import { Flex,Text } from '@chakra-ui/react'
import React from 'react'
import InputForm from '../../Components/InputForm/InputForm'
import { Link } from 'react-router-dom'
import CustomButton from '../../Components/button/CustomButton'
import Navbar from '../../Components/Navbar/Navbar'
const JobRole = () => {
  return (
    <>
        <Flex my={"30px"} mx="30px" flexDirection={"row"} justifyContent="space-between"  background="#F7F8FC">
            <Navbar />
        </Flex>
        
        <Flex flexDirection={"column"} alignContent="center" mx="30vw" my="125px" gap="20px">
            <Text as="h3" textAlign="left" fontWeight={"bold"} width="275px">What's your team or department</Text>
            <InputForm
             type="text"
             height="5vh"
             width="30vw"
             borderRadius="5px"
             placeholder="What's your team or department"            
            />

            <Text as="h3" textAlign="left" fontWeight={"bold"} width="275px" >What's your job role?</Text>
            <InputForm
             type="text"
             height="5vh"
             width="30vw"
             borderRadius="5px"
             placeholder="What's your job role?"            
            />

        <Link to="/login">
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
          </Link>
        </Flex>

        

    </>
  )
}

export default JobRole