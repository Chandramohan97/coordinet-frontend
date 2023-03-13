  import { Box, Flex, Input, Text} from '@chakra-ui/react';
  import { Textarea } from '@chakra-ui/react';
  // import Input
  import Task from './Task/Task';
  import { IconButton } from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons";
  import { Droppable,Draggable } from 'react-beautiful-dnd';
  import React from 'react'

  function Column({ column }) {

    const [newCard,setNewCard] = React.useState(false);
    const [newCardLabel,setNewCardLabel] = React.useState("")

    const pressEnter = (e) =>{
      if(e.key =='Enter'){
        
      } 
    }

  return (
    <Box className='board' p="4" bg="gray.100" rounded="md" mr="4" w="300px">
      <Flex flexDirection={"row"}>
        <Text className='title' fontWeight="bold" mb="2">
          {column.title} 
        </Text>
        <IconButton aria-label="Add" icon={<AddIcon onClick={()=>setNewCard(true)} />  } pb="13px" />
        {/* To add a new card  */}
          <div className="newCards" position="relative" top="20px">   
            { newCard &&
              <Textarea
              placeholder='Describe'
              bg="white"
              rounded={"md"}
              focusBorderColor="transparent"
              resize="none"
              onChange={(e)=>setNewCardLabel(e.target.value)}
              onKeyDown={pressEnter}
              />
              
            }
          </div>
      </Flex>
      <Droppable droppableId={column.id}>
        {(provided) =>(
          <Box className='card-holder' {...provided.droppableProps} ref={provided.innerRef} >
              {column.cards.map((cards,index) => (
                <Task key={cards.id} cards={cards} index={index}/>
            ))}
          {/* {provided.placeholder} */}
        </Box>
        )}
      </Droppable>
    </Box>
  );
}

  export default Column;