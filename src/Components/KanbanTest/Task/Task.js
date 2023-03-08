import { Box, Drawer, Text, Textarea,Modal,ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, HStack, Flex, VStack, Input, Button } from '@chakra-ui/react';
// import { DragHandle } from "@chakra-ui/react";
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Task.css'

function Task({ task }) {
  const [open,setOpen] = React.useState(false);
  const [value,setValue] = React.useState(task.content)
  const [editor,setEditor] = React.useState(EditorState.createEmpty());

  function editorHandler(newEditor){
    setEditor(newEditor);
  }

  function handleOpen() {
    setOpen(true);
  }

function handleClose() {
    setOpen(false);
  }

function changeHeight(){

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
                     <Editor
                     editorState={editor}
                     onEditorStateChange={editorHandler}
                     wrapperClassName="wrapper-class"
                     toolbarClassName='toolbar-class'
                     toolbar={{
                      options: ['inline', 'blockType', 'fontSize'],
                      inline: {
                        options: ['bold', 'italic', 'underline'],
                      },
                      blockType: {
                        options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
                        inDropdown:true,
                      },
                      fontSize: {
                        options: [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96],
                        inDropdown: true,
                      },
                      }} 
                
                      
                      /> 
                  <HStack>
                    <Button backgroundColor={"blue.100"} _hover/>
                    <Button/>
                  </HStack>
                    
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
