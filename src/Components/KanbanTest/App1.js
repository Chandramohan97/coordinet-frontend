import React from 'react'
import { Box, Heading, Textarea } from '@chakra-ui/react'
import { Board } from './data'
import Column from './Column'
import { Flex } from '@chakra-ui/react'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'
import {render,screen} from '@testing-library/react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'react-draft-wysiwyg'


const App1 = () => {

  const [boards,SetBoards] = React.useState(Board);

  // const addCards = (title)
  const onEnd = (result) =>{
    console.log(result);
  }
  return (
    <Box p ="4">
        <Heading as="h1" mb="4">
            Kanban Board
        </Heading>
        <DragDropContext onDragEnd={onEnd}>
            <Flex className='col'>
                {boards.map((column,index) =>(
                        <Column key={column.id}  column={column} index={index}/>    
                    ))}
              </Flex>
        </DragDropContext>
    </Box>

  )
}

export default App1;