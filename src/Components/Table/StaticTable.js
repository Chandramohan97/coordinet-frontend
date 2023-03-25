import { Box, Heading,Flex,Text, Divider, Input,OrderedList,UnorderedList,ListItem,HStack} from '@chakra-ui/react';
import React from 'react';
import './StaticTable.css'


function StaticTable(){
    return(
       <div className='tableContainer'>
           <Box mt="10vh" display={"flex"} gap="10vw" pl="5vw"  p="1vh">
                <Text className='text'  ml="80px">Name</Text>
                <Text className='text'  position={"relative"} left="4.5vw">Status</Text>
                <Text className='text' position={"relative"} left="7vw">Due Date</Text>
           </Box>
        
           <Divider borderColor={"rgba(0, 0, 0, 0.33)"} />
           <HStack mt="2vh"  >  
            <Flex flexDirection={"row"} gap="1.5vw" pl="5vw">
                <Input
                        borderRadius={"20px"}
                        width="15vw"
                        //  border="1px solid"
                        bg="rgba(0,0,0,0.1)"
                        focusBorderColor='transparent'
                        _hover={{cursor:"pointer",outline:"none"}}
                        _active={{border:"none",outline:"none"}}
                />  
                <Input
                    borderRadius={"20px"}
                    width="10vw"
                    ml="1.9vw"
                    //  border="1px solid"
                    bg="rgba(0,0,0,0.1)"
                    focusBorderColor='transparent'
                    _hover={{cursor:"pointer",outline:"none"}}
                    active={{border:"none",outline:"none"}}
                />
                <Input
                    width="10vw"
                    ml="4.5vw"
                    // left="20px"
                    borderRadius={"20px"}
                    bg="rgba(0,0,0,0.1)"
                    focusBorderColor='transparent'
                    _hover={{cursor:"pointer",outline:"none"}}
                    _active={{border:"none",outline:"none"}}
                />
            </Flex>
           </HStack>

           <Divider borderColor="rgba(0, 0, 0, 0.33)" mt="1vh"/>
           <HStack mt="2vh"  >  
            <Flex flexDirection={"row"} gap="1.5vw" pl="5vw">
                <Input
                        borderRadius={"20px"}
                        width="15vw"
                        //  border="1px solid"
                        bg="rgba(0,0,0,0.1)"
                        focusBorderColor='transparent'
                        _hover={{cursor:"pointer",outline:"none"}}
                        _active={{border:"none",outline:"none"}}
                />  
                <Input
                    borderRadius={"20px"}
                    width="10vw"
                    ml="1.9vw"
                    //  border="1px solid"
                    bg="rgba(0,0,0,0.1)"
                    focusBorderColor='transparent'
                    _hover={{cursor:"pointer",outline:"none"}}
                    active={{border:"none",outline:"none"}}
                />
                <Input
                    width="10vw"
                    ml="4.5vw"
                    // left="20px"
                    borderRadius={"20px"}
                    bg="rgba(0,0,0,0.1)"
                    focusBorderColor='transparent'
                    _hover={{cursor:"pointer",outline:"none"}}
                    _active={{border:"none",outline:"none"}}
                />
            </Flex>
           </HStack>
           <Divider borderColor="rgba(0, 0, 0, 0.33)" mt="1vh"/>
           <HStack mt="2vh"  >  
            <Flex flexDirection={"row"} gap="1.5vw" pl="5vw">
                <Input
                        borderRadius={"20px"}
                        width="15vw"
                        //  border="1px solid"
                        bg="rgba(0,0,0,0.1)"
                        focusBorderColor='transparent'
                        _hover={{cursor:"pointer",outline:"none"}}
                        _active={{border:"none",outline:"none"}}
                />  
                <Input
                    borderRadius={"20px"}
                    width="10vw"
                    ml="1.9vw"
                    //  border="1px solid"
                    bg="rgba(0,0,0,0.1)"
                    focusBorderColor='transparent'
                    _hover={{cursor:"pointer",outline:"none"}}
                    active={{border:"none",outline:"none"}}
                />
                <Input
                    width="10vw"
                    ml="4.5vw"
                    // left="20px"
                    borderRadius={"20px"}
                    bg="rgba(0,0,0,0.1)"
                    focusBorderColor='transparent'
                    _hover={{cursor:"pointer",outline:"none"}}
                    _active={{border:"none",outline:"none"}}
                />
            </Flex>
            
           </HStack>

           <Divider borderColor="rgba(0, 0, 0, 0.33)" mt="1vh"/>
       </div> 
    )
}

export default StaticTable;