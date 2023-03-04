import { Box, Drawer, Text, Textarea,Modal,ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, HStack, Flex, VStack, Input, Button } from '@chakra-ui/react';
// import { DragHandle } from "@chakra-ui/react";
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Task.css'
import JoditEditor from 'jodit-react';
import Jodit from './Jodit';
import Comments from '../../Comments/Comments';

function Task({ task }) {
  const [open,setOpen] = React.useState(false);
  const [visibility,setVisibility]= React.useState(false)
  const [description,setDescrition]= React.useState("");
  // const [value,setValue] = React.useState(task.content)
  // const [content,setContent] = React.useState("");
  

  function handleOpen() {
    setOpen(true);
  }

function handleClose() {
    setOpen(false);
  }
  return (
  // <Draggable>
    <Box 
      bg="white"  
      mb="2" 
      rounded="md"
      _hover={{backgroundColor:"lightgrey"
      }}
      >
      <Textarea
       focusBorderColor="transparent"
       resize="none" 
       _hover={{cursor:"pointer"}}
       onClick={()=>handleOpen()}
       defaultValue={task.content}
       //removes the 3 slanted lines from TextArea       
      />
      <Modal isOpen={open} onClose={handleClose} size="custom" >
        <ModalOverlay />
        <ModalContent maxW="75vw" h="70vh" maxh="100vh">
            <Input
             width={"35vw"}
             height={"7vh"}
             fontSize={"20px"}
             defaultValue={task.content}
             my="2vh"
             ml={"2vw"}
             border="0.1px solid"
             placeholder='Short Description'
             isRequired
             _hover={{backgroundColor:"lightgrey"}}
             _active={{backgroundColor:"initial"}}
             borderColor="transparent"
            />
            <ModalBody ml="0.5vw">
              <HStack>
                <Flex direction={"row"} >
                  <Flex flexDirection={"column"} alignItems="center" justifyContent={"space-evenly"} gap="10px">
                    <Text fontSize={"m"} textAlign={"left"} >Description</Text>
                     { visibility ? 
                     <>
                     <Jodit />
                     <HStack>
                      <Button backgroundColor={"blue.100"} onClick={()=>{setVisibility(false)}}>Save</Button>
                      <Button onClick={()=> {setVisibility(false)}}>Cancel</Button>
                      </HStack>
                     </>
                      :
                     <Input 
                     width={"40vw"}
                     _hover={{backgroundColor:"lightgrey"}}
                     placeholder='Enter a title here' 
                     onClick={()=> {setVisibility(true)}} 
                     borderColor="transparent"
                     /> }
                    <Comments/>
                    
                  </Flex>

                </Flex>
              </HStack>
            </ModalBody>
        <ModalCloseButton />
        </ModalContent>
         
      </Modal>      
    </Box>
  // </Draggable>
  );
}

export default Task;
