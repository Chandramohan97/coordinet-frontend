import { Box, Flex, Input, Text} from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';

import Cards from '../Cards/Cards';
import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Droppable,Draggable } from 'react-beautiful-dnd';
import React from 'react'

function Column({ column,index,addNewCard }) {
   
  const [newCard,setNewCard] = React.useState(false);
  const [label,setLabel] = React.useState("");
  const status = column.title;
//   console.log(status)

  const pressEnter = (e) =>{
    if(e.key =='Enter'){
        addNewCard(label,column.id);
        setNewCard(false)
    } 
    else if(e.key == 'Escape'){
      setNewCard(false);
    }
  }


return (
  <Box className='board' p="4" bg="gray.100" rounded="md" mr="4" w="300px">
    <Flex flexDirection={"row"} gap="5px">
      <Text className='title' fontWeight="bold" mb="2" fontFamily={"Inder sans-serif"}>
        {column.title} 
      </Text>
      <IconButton aria-label="Add" _hover={{transform:'scale(1.2)'}}  // changing the default behaviour of IconButton on hover.
       size="xs" icon={<AddIcon onClick={()=>setNewCard(true)} />} pb="13px" my="7px" />
    </Flex> 
      {/* To add a new card  */}
        {/* <div className="newCards" position="relative" top="20px">    */}
          { newCard &&
           <> 
              <Input
                placeholder='Describe'
                textAlign={"left"}
                fontFamily={"Inder sans-serif"}
                bg="white"
                rounded={"md"}
                focusBorderColor="transparent"
                resize="none"
                onChange={(e)=>setLabel(e.target.value)}
                onKeyDown={pressEnter}
              />
              
          </> 
          }
        {/* </div> */}
    
    <Droppable droppableId={column.id} index={index} key={column.id}>
      {/* <div className='droppable-area'> */}
      {(provided) =>(
        <Box className='card-holder' key={column.id} {...provided.droppableProps} ref={provided.innerRef} height="100%" >
            {column.cards.map((cards,index) => (
              <Cards key={cards.id} cards={cards} index={index} status={status}/>
          ))}
        {provided.placeholder}
      </Box>
      )}
      {/* </div> */}
    </Droppable>
    
  </Box>

  
);
}

export default Column;