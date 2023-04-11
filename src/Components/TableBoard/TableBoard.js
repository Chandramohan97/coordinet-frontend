import React from 'react'
import { Box, Heading,Flex,Text, Divider, Input,OrderedList,UnorderedList,ListItem,HStack} from '@chakra-ui/react';


const TableBoard = () => {
  return (
  <Box className='mainTableDashboard' border={"1px solid"} ml="20px" width="fit-content">
      <Flex mt={{base:"9vh",md:"8.5vh"}} width={"60vw"} flexDirection={"row"} 
       justifyContent={"space-between"} border={"1px solid"} >
          <Text className='text' mr="auto" 
          fontSize={{base:"10px",md:"15px"}} position={"relative"} right={{base:"-10px",md:"-54px"}} 
          fontFamily={"Inder"} >Task</Text>
          <Text className='text' mr={{base:"auto",md:"auto"}}  position={"relative"} right={{base:"-10px",md:"-55px"}} 
          fontSize={{base:"10px",md:"15px"}}  fontFamily={"Inder"}  >Status</Text>
          <Text className='text' mr="auto" fontSize={{base:"10px",md:"15px"}} position="relative"
          right={{base:"-5px",md:"-40px"}} fontFamily={"Inder"} >Priority</Text>
          <Text className='text' mr="auto" fontSize={{base:"10px",md:"15px"}} position="relative"
          right={{base:"-5px",md:"-40px"}} fontFamily={"Inder"} >Assignee</Text>
          <Text className='text' mr="auto" fontSize={{base:"10px",md:"15px"}} position="relative"
          right={{base:"-5px",md:"-40px"}} fontFamily={"Inder"} >Due Date</Text>
      </Flex>

      <HStack mt="2vh" border={"1px solid"}  >  
        <Flex flexDirection={"row"} pl="4vw"
        justifyContent={{base:"space-around",md:"space-around"}}>
            <Input
                borderRadius={"5px"}
                fontSize={{base:"7px",md:"15px"}}
                textAlign={"left"}
                // fontWeight={"bold"}
                color={"blackAlpha.900"}
                
                fontFamily={"Inder"}
                height={{base:"20px",md:"30px"}}
                width={{base:"20vw",md:"10vw"}}
                //  border="1px solid"
                bg="rgba(0,0,0,0.1)"
                focusBorderColor='transparent'
                _hover={{cursor:"pointer",outline:"none"}}
                _active={{border:"none",outline:"none"}}
                // value={taskList[0]} 
            />  
            <Input 
                borderRadius={"5px"}
                height={{base:"20px",md:"30px"}}
                width={{base:"20vw",md:"10vw"}}
                
                ml="1.9vw"
                //  border="1px solid"
                bg="rgba(0,0,0,0.1)"
                focusBorderColor='transparent'
                _hover={{cursor:"pointer",outline:"none"}}
                active={{border:"none",outline:"none"}}
            />
            <Input
                borderRadius={"5px"}
                height={{base:"20px",md:"30px"}}
                width={{base:"20vw",md:"10vw"}}
                ml="2vw"
                // left="20px"
                bg="rgba(0,0,0,0.1)"
                focusBorderColor='transparent'
                _hover={{cursor:"pointer",outline:"none"}}
                _active={{border:"none",outline:"none"}}
            />
            <Input
                borderRadius={"5px"}
                fontSize={{base:"7px",md:"15px"}}
                textAlign={"left"}
                // fontWeight={"bold"}
                color={"blackAlpha.900"}
                
                fontFamily={"Inder"}
                height={{base:"20px",md:"30px"}}
                width={{base:"20vw",md:"10vw"}}
                //  border="1px solid"
                bg="rgba(0,0,0,0.1)"
                focusBorderColor='transparent'
                _hover={{cursor:"pointer",outline:"none"}}
                _active={{border:"none",outline:"none"}}
                // value={taskList[0]} 
            />
            <Input
                borderRadius={"5px"}
                fontSize={{base:"7px",md:"15px"}}
                textAlign={"left"}
                // fontWeight={"bold"}
                color={"blackAlpha.900"}
                
                fontFamily={"Inder"}
                height={{base:"20px",md:"30px"}}
                width={{base:"20vw",md:"10vw"}}
                //  border="1px solid"
                bg="rgba(0,0,0,0.1)"
                focusBorderColor='transparent'
                _hover={{cursor:"pointer",outline:"none"}}
                _active={{border:"none",outline:"none"}}
                // value={taskList[0]} 
            />
        </Flex> 
           </HStack>

           <Divider borderColor="rgba(0, 0, 0, 0.33)" mt="1vh"/>
   </Box>
  )
}

export default TableBoard