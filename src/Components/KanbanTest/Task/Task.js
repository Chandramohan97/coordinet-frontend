import { Box, Drawer, Text, Textarea,Modal,ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, HStack, Flex, VStack, Input } from '@chakra-ui/react';
// import { DragHandle } from "@chakra-ui/react";
import React from 'react';

function Task({ task }) {
  const [open,setOpen] = React.useState(false);
  
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
        <ModalContent maxW="75vw" maxH="70vh">
            <Input
             width={"35vw"}
             height="7vh"
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
                    <Textarea
                    scro
                    placeholder="Describe the issue"
                    size="m"
                    paddingLeft="12px"
                    fontFamily="sans-serif"
                    resize="none"
                    borderRadius="none"
                    borderColor="gray.300"
                    width="35vw"
                    height={"20vh"}
                    _hover={{ borderColor: "gray.400" }}
                    _focus={{ borderColor: "blue.500" }}
                     />

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
