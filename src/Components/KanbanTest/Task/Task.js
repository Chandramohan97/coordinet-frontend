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
import { Draggable } from 'react-beautiful-dnd';

function Task({ cards,index }) {
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
    <>
     <Draggable draggableId={cards.id} key={cards.id} index={index} >
       {(provided)=>(
          // <Box className='cards' //   bg="white"     mb="2"      rounded="md"        _hover={{backgroundColor:"lightgrey"    //   }}
          //   // key={task.id}
          //   >
            <div className='cards'>
            <Textarea
              bg="white"
              rounded={"md"}
              margin={"5px 0px"}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              //  _hover={{backgroundColor:"lightgrey"}}
              focusBorderColor="transparent"
              resize="none" 
              _hover={{cursor:"pointer" , bg  :"lightblue"}}
              onClick={()=>handleOpen()}
              defaultValue={cards.label}
              //removes the 3 slanted lines from TextArea       
              />
              </div>
       )}
        </Draggable>
              <Modal isOpen={open} onClose={handleClose} size="custom" >
                <ModalOverlay />
                <ModalContent maxW="75vw" h="auto" maxH="none">
                    <Input
                    width={"40vw"} height={"6vh"} fontSize={"20px"} defaultValue={cards.label} my="2vh" ml={"2vw"} border="0.1px solid"     placeholder='Short Description' isRequired _hover={{backgroundColor:"lightgrey"}} _active={{backgroundColor:"initial"}}
                    borderColor="transparent"
                    />
                    <ModalBody ml="0.5vw">
                      <HStack>
                        <Flex direction={"row"} >
                          <Flex flexDirection={"column"} alignItems="center" justifyContent={"space-evenly"} gap="10px">
                            <Text position={"relative"} left="-17vw" fontSize={"m"} textAlign={"left"} fontWeight="bold" >Description</Text>
                            { visibility ? 
                            <>
                            <Jodit />
                            <HStack position={"relative"} left="-15vw">
                              <Button backgroundColor={"blue"} color="white" onClick={()=>{setVisibility(false)}}
                              height="30px" borderRadius={"4px"}
                              >Save</Button>
                              <Button height="30px" borderRadius={"4px"} onClick={()=> {setVisibility(false)}}>Cancel</Button>
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
                            <Text as="p" position={"relative"} left="-17.3vw" fontWeight={"bold"}>Comments</Text>
                            <Comments/>
                            
                          </Flex>

                          <Flex direction={"column"}>
                            <div className='status'>
                              <Text>Status</Text>
                              <Button></Button>
                            </div>

                          </Flex>
                        </Flex>
                      </HStack>
                    </ModalBody>
                <ModalCloseButton />
                </ModalContent>   
              </Modal>
                 
          {/* // </Box> */}
          </>
       
   
  );
}

export default Task;
