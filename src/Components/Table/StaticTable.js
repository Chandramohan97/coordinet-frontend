//Static table to be used for viewing purpose during login/Sign up process.
import { Box, Heading,Flex,Text, Divider, Input,OrderedList,UnorderedList,ListItem,HStack} from '@chakra-ui/react';
import React from 'react';
import './StaticTable.css'


function StaticTable({taskList}){

    return(
       <div className='tableContainer'>
           <Flex mt={{base:"9vh",md:"8.5vh"}}  
           justifyContent={{base:"space-around",md:"space-around"}} p="1vh" >
                <Text className='text' mr="auto" 
                fontSize={{base:"10px",md:"15px"}} position={"relative"} right={{base:"-10px",md:"-54px"}} 
                fontFamily={"Inder"} >Task</Text>
                <Text className='text' mr={{base:"auto",md:"auto"}}  position={"relative"} right={{base:"-10px",md:"-55px"}} 
                fontSize={{base:"10px",md:"15px"}}  fontFamily={"Inder"}  >Status</Text>
                <Text className='text' mr="auto" fontSize={{base:"10px",md:"15px"}} position="relative"
                right={{base:"-5px",md:"-40px"}} fontFamily={"Inder"} >Due Date</Text>
           </Flex>
        
            {/* <HStack mt="2vh">  */}
                {
                    taskList.map((taskList)=>
                    {
                      if(taskList.length > 0 ){
                        return (
                            <>
                            <HStack mt="2vh"> 
                                <Flex flexDirection={"row"} pl="4vw" justifyContent={{base:"space-around",md:"space-around"}}>
                                    <Input
                                        borderRadius={"5px"}
                                        fontSize={{base:"7px",md:"15px"}}
                                        textAlign={"left"}
                                        // fontWeight={"bold"}
                                        color={"blackAlpha.900"}
                                        isReadOnly="true"
                                        fontFamily={"Inder"}
                                        height={{base:"20px",md:"30px"}}
                                        width={{base:"20vw",md:"10vw"}}
                                        //  border="1px solid"
                                        bg="rgba(0,0,0,0.1)"
                                        focusBorderColor='transparent'
                                        _hover={{cursor:"pointer",outline:"none"}}
                                        _active={{border:"none",outline:"none"}}
                                        value={taskList} 
                                    />  
                                    <Input 
                                        borderRadius={"5px"}
                                        height={{base:"20px",md:"30px"}}
                                        width={{base:"20vw",md:"10vw"}}
                                        isReadOnly="true"
                                        ml="1.9vw"
                                        //  border="1px solid"
                                        bg="rgba(0,0,0,0.1)"
                                        focusBorderColor='transparent'
                                        _hover={{cursor:"pointer",outline:"none"}}
                                        active={{border:"none",outline:"none"}}
                                        defaultValue={ taskList[0].length > 0 ? "New" :''}
                                        textAlign={"left"}
                                        color={"#00bcd4"}
                                    />
                                    <Input
                                        borderRadius={"5px"}
                                        height={{base:"20px",md:"30px"}}
                                        isReadOnly="true"
                                        width={{base:"20vw",md:"10vw"}}
                                        ml="2vw"
                                        // left="20px"
                                        bg="rgba(0,0,0,0.1)"
                                        focusBorderColor='transparent'
                                        _hover={{cursor:"pointer",outline:"none"}}
                                        _active={{border:"none",outline:"none"}}
                                    />
                                </Flex> 
                       </HStack>
                       <Divider borderColor="rgba(0, 0, 0, 0.33)" mt="1vh"/>
                       </>
                        )
                        
                      }  
                    }
                    )
                } 
       </div> 
    )
}

export default StaticTable;