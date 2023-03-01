import { Box, Text, Textarea } from '@chakra-ui/react';
// import { DragHandle } from "@chakra-ui/react";
import { Draggable, Resizable } from "@chakra-ui/hooks";

function Task({ task }) {
  return (
  <Draggable>
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

       //removes the 3 slanted lines from TextArea       
      >{task.content}</Textarea>
    </Box>
  </Draggable>
  );
}

export default Task;
