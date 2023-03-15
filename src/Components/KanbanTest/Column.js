  import { Box, Flex, Input, Text} from '@chakra-ui/react';
  import { Textarea } from '@chakra-ui/react';
  // import Input
  import Task from './Task/Task';
  import { IconButton } from "@chakra-ui/react";
  import { AddIcon } from "@chakra-ui/icons";
  import { Droppable,Draggable } from 'react-beautiful-dnd';
  import React from 'react'

  function Column({ column,index,addNewCard }) {

    const [newCard,setNewCard] = React.useState(false);
    const [label,setLabel] = React.useState("")

    const pressEnter = (e) =>{
      if(e.key =='Enter'){
          addNewCard(label,column.id);
          setNewCard(false)
      } 
    }

  return (
    <Box className='board' p="4" bg="gray.100" rounded="md" mr="4" w="300px">
      <Flex flexDirection={"row"}>
        <Text className='title' fontWeight="bold" mb="2">
          {boards.title} 
        </Text>
        <IconButton aria-label="Add" icon={<AddIcon onClick={()=>setNewCard(true)} />  } pb="13px" />
        {/* To add a new card  */}
          <div className="newCards" position="relative" top="20px">   
            { newCard &&
              <Input
              placeholder='Describe'
              bg="white"
              rounded={"md"}
              focusBorderColor="transparent"
              resize="none"
              onChange={(e)=>setLabel(e.target.value)}
              onKeyDown={pressEnter}
              />
              
            }
          </div>
      </Flex> 
      <Droppable droppableId={column.id} index={index} key={column.id}>
        {/* <div className='droppable-area'> */}
        {(provided) =>(
          <Box className='card-holder' key={column.id} {...provided.droppableProps} ref={provided.innerRef} height="100%" >
              {column.cards.map((cards,index) => (
                <Task key={cards.id} cards={cards} index={index}/>
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