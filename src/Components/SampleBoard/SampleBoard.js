import { Flex, VStack,Text,Box, Textarea,Input} from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from '@chakra-ui/icons'
import './SampleBoard.css'

function SampleBoard({taskList}){
  return (
    <div className='sampleKanbanContainer'>
        <Flex mt={{base:"9vh",md:"8.5vh"}} ml="30px"gap="10px"
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
            <Box border="1px" width={"175px"} rounded={"md"} backgroundColor={"#00bcd4"} height={"6.5px"} ></Box>
                {
                    taskList.map((taskList) => {
                        if(taskList.length > 0){
                            return <Input width={"175px"} readOnly="true" textAlign={"left"} value={taskList}  mt="5px" />
                            // return <h1>Hello</h1>

                        }
                    })
                }
                
                {/* <Input width={"175px"} readOnly="true" textAlign={"left"} value="Second Task" mt="5px" />
                <Input width={"175px"} readOnly="true" textAlign={"left"} value="Third Task"  mt="5px" /> */}
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

export default SampleBoard;
