import { Box, Heading,Flex,Text, Divider, Input,OrderedList,UnorderedList,ListItem} from '@chakra-ui/react';
import React from 'react';


function StaticTable(){
    return(
       <div className='tableContainer' style={{backgroundColor:"white"}}>
           <UnorderedList display={"flex"} gap="15vw">
                <ListItem ml="10px">Name</ListItem>
                <ListItem>Status</ListItem>
                <ListItem>Due Date</ListItem>
           </UnorderedList>

           <OrderedList display={"flex"} gap="1.5vw" mt="2vh" >
                <ListItem>
                    <Input
                     borderRadius={"20px"}
                    //  border="1px solid"
                    bg="lightgrey"
                    focusBorderColor='transparent'
                    _hover={{cursor:"pointer",outline:"none"}}
                    _active={{border:"none",outline:"none"}}
                       />
                </ListItem>
                <ListItem>
                <Input
                     borderRadius={"20px"}
                     width="12vw"
                    //  border="1px solid"
                     bg="lightgrey"
                      focusBorderColor='transparent'
                      _hover={{cursor:"pointer",outline:"none"}}
                      _active={{border:"none",outline:"none"}}
                       />
                </ListItem>
                <ListItem>
                <Input
                    // position={"relative"}
                    width="6vw"
                    ml="4.5vw"
                    // left="20px"

                    borderRadius={"20px"}
                    bg="lightgrey"
                    focusBorderColor='transparent'
                    _hover={{cursor:"pointer",outline:"none"}}
                    _active={{border:"none",outline:"none"}}
                       />
                </ListItem>
           </OrderedList> 
           <Divider mt="2vh" borderColor={"black"}/>

       </div> 
    )
}

export default StaticTable;