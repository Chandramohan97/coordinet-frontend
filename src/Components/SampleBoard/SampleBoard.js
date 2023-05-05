import { Flex, VStack,Text,Box} from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from '@chakra-ui/icons'
import './SampleBoard.css'

export const SampleBoard = () => {
  return (
    <div className='sampleKanbanContainer'>
        <Flex mt={{base:"9vh",md:"8.5vh"}} ml="30px"  gap="20px"
        //    justifyContent={{base:"space-around",md:"space-around"}}
           >
            <Flex flexDirection={"column"} gap="2px">
                <Flex width={"175px"} alignItems="flex-start" >
                    <Text className='text' mr="auto"
                        fontSize={{base:"10px",md:"16px"}}  
                        fontFamily={"Inder"}>New</Text>
                    <Text textAlign={"center"} ml="10%" backgroundColor={"#DCE0E0"} _hover={{cursor:"pointer"}}
                        border="1px grey" height={"fit-content"} borderRadius={"6px"} width={"28px"}>3</Text>
                    {/* <AddIcon ml="10px" mt="10%"  /> */}
                </Flex>
                <Box border="1px" rounded={"md"} backgroundColor={"#00bcd4"} height={"6.5px"} ></Box>
            </Flex>

            <Flex flexDirection={"column"} gap="2px"  >
                <Flex width={"175px"} alignItems="flex-start" >
                    <Text className='text' mr="auto"
                        fontSize={{base:"10px",md:"16px"}}  
                        fontFamily={"Inder"}>In Progress</Text>
                    <Text textAlign={"center"} ml="10%" backgroundColor={"#DCE0E0"} _hover={{cursor:"pointer"}}
                        border="1px grey" height={"fit-content"} borderRadius={"6px"} width={"28px"}>0</Text>
                    {/* <AddIcon ml="10px" mt="10%"  /> */}
                </Flex>
                <Box border="1px" rounded={"md"} backgroundColor={"#3f51b5"} height={"6.5px"} ></Box>
            </Flex>

            <Flex flexDirection={"column"} gap="2px"  >
                <Flex width={"175px"} alignItems="flex-start" >
                    <Text className='text' mr="auto"
                        fontSize={{base:"10px",md:"16px"}}  
                        fontFamily={"Inder"}>Completed</Text>
                    <Text textAlign={"center"} ml="10%" backgroundColor={"#DCE0E0"} _hover={{cursor:"pointer"}}
                        border="1px grey" height={"fit-content"} borderRadius={"6px"} width={"28px"}>0</Text>
                    {/* <AddIcon ml="10px" mt="10%"  /> */}
                </Flex>
                <Box border="1px" rounded={"md"} backgroundColor={"rgb(11, 135, 91)"} height={"6.5px"} ></Box>
            </Flex>
           
        </Flex>
    </div>
  )
}
