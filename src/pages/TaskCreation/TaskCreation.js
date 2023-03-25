import React from 'react'
import StaticTable from '../../Components/Table/StaticTable'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Flex,Heading, HStack,Input,Text, VStack,Button } from '@chakra-ui/react'

const TaskCreation = () => {
  return (
    <div className='taskcreation'>
             <Heading textAlign={"left"} fontFamily={"Inder"} fontSize="40px" ml="2vw" mt={"5vh"}>COORDINET</Heading>
        <HStack gap="5vw">
            <VStack pl="3vw">
                <Text fontSize={"35px"} textAlign="left" fontFamily={"Inder"} width="21vw">Creating Tasks</Text>
                <Input 
                placeholder='First Task'
                focusBorderColor='transparent'
                marginRight={"20px !important"} 
                width={"20vw"} 
                rounded="10px" 
                fontFamily={"Inder"}
                height={"40px"} 
                backgroundColor="white"/>
                <Input 
                placeholder='Second Task'
                focusBorderColor='transparent'
                marginRight={"20px !important"} 
                width={"20vw"} 
                fontFamily={"Inder"}
                rounded="10px" 
                height={"40px"} 
                backgroundColor="white"/> 
                <Input 
                placeholder='Second Task'
                focusBorderColor='transparent'
                fontFamily={"Inder"}
                marginRight={"20px !important"} 
                width={"20vw"} 
                rounded="10px" 
                height={"40px"} 
                backgroundColor="white"/>  
            </VStack>
            <Flex gap="0px" flexDirection={"row"} ml="20vw">
                <Sidebar/>
                <StaticTable/>
            </Flex>
        </HStack>
        <Button 
        color="white"
        bg="#31bfc8"
        _hover={{ bg: "#2a9ca1" }} //blue-green
        _active={{ bg: "#555555" }}
        mt="15px" 
        height={"38px"} 
        width="100px" 
        ml="81.5vw" >Next</Button>
   
    </div>
  )
}

export default TaskCreation