import { Box, Drawer, Text, Textarea,Modal,ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, HStack, Flex, VStack, Input, Button } from '@chakra-ui/react';
// import { DragHandle } from "@chakra-ui/react";
import React from 'react';
import './Task.css'
import Comments from '../../Comments/Comments';
import { Draggable } from 'react-beautiful-dnd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomButton from '../../button/CustomButton';


function Task({ cards,index}) {

  const modules = {
    toolbar : [
      ['bold', 'italic', 'underline', 'strike','image'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
      
    ],
  }
  
  const textarea = document.querySelector('.modal-description');

  window.addEventListener('click', (event)=>{
      textarea.remove('hover')
  })
  const [open,setOpen] = React.useState(false);
  const [visibility,setVisibility]= React.useState(false)
  const [description,setDescrition]= React.useState("");
  const [value,setValue] = React.useState(cards.content)
  const [content,setContent] = React.useState("");
  
  function handleOpen() {
    setOpen(true);
  }


function handleClose() {
    setOpen(false);
  }
  return (
    <>
    <Draggable draggableId={cards.id} index={index} key={cards.id}>
      {(provided) => (
        // <div ref={provided.innerRef}
        // {...provided.draggableProps}
        // {...provided.dragHandleProps} 
        // style={{position:"relative",border:"1px solid black round"}}  
        // >
          <Text
            pl="10px"
            pt="5px"
            bg="white"
            height={"7vh"}
            rounded={"md"}
            margin={"10px 0px"} 
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            focusBorderColor="transparent"
            resize="none" 
            _hover={{cursor:"pointer" , bg  :"lightblue"}}
            onClick={()=>handleOpen()}
            defaultValue={cards.label}       
            >{cards.label}</Text> 
        // </div> 
      )} 
      </Draggable>  
          <Modal isOpen={open} onClose={handleClose} size="custom" >
            <ModalOverlay />
              <ModalContent maxW="75vw" h="auto" maxH="none">
                <Input 
                className='modal-description'
                 width={"40vw"} height={"7.5vh"} fontSize={"22px"} defaultValue={cards.label} my="5vh" ml={"2vw"} border="0.1px solid"  
                 placeholder='Short Description'  _hover={{backgroundColor:"lightgrey"}} fontWeight="bold"
                  borderColor="transparent" resize={"none"}
                  _focus={{
                    // pointerEvents:"none",
                    pointerEvents:"none",
                    backgroundColor:"white"
                  }}
                 />
                 <ModalBody ml="0.5vw">
                      <HStack>
                        <Flex flexDirection={'column'}>
                          <ReactQuill className='quill' modules={modules} theme='snow'></ReactQuill>
                          <div className='quillButton' >
                            <CustomButton
                              color="white"
                              height="40px"
                              width="60px"
                              bg="blue.500"
                              _hover={{ bg: "#2a9ca1" }} //blue-green
                              _active={{ bg: "#555555" }}
                              textAlign="center"
                              fontSize="14px"
                              margin="30px 10px"
                              borderRadius="2px"
                              value="Login"
                            />
                            <CustomButton
                              color="white"
                              height="40px"
                              width="60px"
                              bg="blue.500"
                              _hover={{ bg: "#2a9ca1" }} //blue-green
                              _active={{ bg: "#555555" }}
                              textAlign="center"
                              fontSize="14px"
                              margin="30px 10px"
                              borderRadius="2px"
                              value="Cancel"
                            />
                          </div>

                          <div className='comments'>
                            <p>Comments</p>  

                          </div>
                        </Flex>
                      </HStack>
                    </ModalBody>
                <ModalCloseButton />
                </ModalContent>   
              </Modal>
          </>  
  );
  }
  
export default Task;  