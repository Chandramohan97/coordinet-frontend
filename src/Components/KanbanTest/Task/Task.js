import { Box, Drawer, Text, Textarea,Modal,ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, 
  HStack, Flex, VStack, Input, Button, Grid } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
            // my=""
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
              <ModalContent maxW="75vw" display={"flex"} flexDirection="row" h="auto" maxH={"none"}>
                <VStack flexDirection={"column"}>
                  <Input 
                  className='modal-description'
                  width={"40vw"} height={"7.5vh"} fontSize={"20px"} defaultValue={cards.label} mt="8vh" ml={"2vw"} border="0.1px solid"  
                  placeholder='Short Description'  _hover={{backgroundColor:"lightgrey"}} fontWeight="bold"
                    borderColor="transparent" 
                    _focus={{
                      pointerEvents:"none",
                      backgroundColor:"white"
                    }}
                  /> 
                <Box>
                  <ReactQuill 
                  className='quill' 
                  modules={modules} 
                  theme='snow' 
                  style={{marginTop:"2.5vh",marginLeft:"2vw"}} >
                  </ReactQuill>
                </Box>

                <div className='quillButton' style={{position:"relative",left:"-14.5vw"}}>
                    <CustomButton
                     color="white"
                              height="40px"
                              width="60px"
                              bg="blue.500"
                              _hover={{ bg: "lightblue" }} //blue-green
                              _active={{ bg: "#555555" }}
                              textAlign="center"
                              fontSize="14px"
                              margin="30px 10px"
                              borderRadius="2px"
                              value="Save"
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
                    <p>Comments</p>
                </div>

                </VStack>
                 <VStack mt="8vh" ml={"2vw"}>                  
                  <Text 
                  color="rgb(94, 108, 132)"
                  fontSize={"12.5px"}
                  fontFamily="CircularStdBold"
                  >STATUS</Text>
                  </VStack>          
                 {/* <ModalBody ml="0.5vw" display={"flex"} flexDirection="row" gap="5vw">
                      <HStack>
                        <Flex flexDirection={'column'}>
                          <ReactQuill className='quill' modules={modules} theme='snow' style={{marginTop:"4vh"}}></ReactQuill>
                          <div className='quillButton' >
                            <CustomButton
                              color="white"
                              height="40px"
                              width="60px"
                              bg="blue.500"
                              _hover={{ bg: "lightblue" }} //blue-green
                              _active={{ bg: "#555555" }}
                              textAlign="center"
                              fontSize="14px"
                              margin="30px 10px"
                              borderRadius="2px"
                              value="Save"
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

                      <VStack  >
                          <p>Hello</p>
                        </VStack>
                    </ModalBody> */}
                <ModalCloseButton />
                </ModalContent>   
              </Modal>
          </>  
  );
  }
  
export default Task;  