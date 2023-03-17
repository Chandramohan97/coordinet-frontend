import { Box, Drawer, Text, Textarea,Modal,ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, HStack, Flex, VStack, Input, Button } from '@chakra-ui/react';
// import { DragHandle } from "@chakra-ui/react";
import React from 'react';
import './Task.css'
import Comments from '../../Comments/Comments';
import { Draggable } from 'react-beautiful-dnd';


function Task({ cards,index}) {

  const textarea = document.querySelector('.modal-description');

  window.addEventListener('click', (event)=>{
      textarea.remove('hover')
  })
  const [open,setOpen] = React.useState(false);
  const [visibility,setVisibility]= React.useState(false)
  const [description,setDescrition]= React.useState("");
  const [value,setValue] = React.useState(cards.content)
  const [content,setContent] = React.useState("");
  
  const textarea = document.getElementsByClassName('modal-description')
  document.addEventListener('click',(event)=>{
    textarea.remove('hover');
  })

  
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
<<<<<<< HEAD
                <Textarea class='modal-descirption'
                 width={"40vw"} height={"2vh"} fontSize={"20px"} defaultValue={cards.label} my="2vh" ml={"2vw"} border="0.1px solid"  
=======
                <Textarea 
                className='modal-description'
                 width={"40vw"} height={"1px"} fontSize={"20px"} defaultValue={cards.label} my="2vh" ml={"2vw"} border="0.1px solid"  
>>>>>>> de613bf6f72f7c2914b8874e51a06b116f291f02
                 placeholder='Short Description'  _hover={{backgroundColor:"lightgrey"}}
                  borderColor="transparent" resize={"none"}
                  _focus={{
                    // pointerEvents:"none",
                    pointerEvents:"none",
                    backgroundColor:"white"
                  }}
                 />
                 <ModalBody ml="0.5vw">
                      <HStack>
                        
                      </HStack>
                    </ModalBody>
                <ModalCloseButton />
                </ModalContent>   
              </Modal>
          </>  
  );
  }
  
export default Task;