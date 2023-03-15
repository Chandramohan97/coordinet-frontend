import React from 'react'
import { Box, Heading, Textarea } from '@chakra-ui/react'
import { Board } from './data'
import Column from './Column'
import { Flex } from '@chakra-ui/react'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'
import {render,screen} from '@testing-library/react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'react-draft-wysiwyg'
import { v4 as uuid } from "uuid";


const App1 = () => {
  const [boards,setBoards] = React.useState(Board);
  // const addCards = (title)

  const addNewCard = (label,boardId) =>{
    // console.log(label)
    const card ={
      id : uuid(),
      label : label,
    }

  const index=boards.findIndex((item)=> item.id === boardId)
  if(index < 0)return;

  const tempBoards = [...boards];
  tempBoards[index].cards.push(card);
  setBoards(tempBoards);
  }

  const onEnd = (result) =>{
    if (result.destination.droppableId === result.source.droppableId) {
      const boardIndex = boards.findIndex((board) => board.id === result.destination.droppableId);
      const board = boards[boardIndex];

      const newCards = [...board.cards];
      const [removedCard] = newCards.splice(result.source.index, 1);
      newCards.splice(result.destination.index, 0, removedCard);

      const newBoard = {
        ...board,
        cards: newCards,
      };

      const newBoards = [...boards];
      newBoards[boardIndex] = newBoard;

      setBoards(newBoards);
    }else {
      const sourceBoardIndex = boards.findIndex((board) => board.id === result.source.droppableId);
      const sourceBoard = boards[sourceBoardIndex];

      const destinationBoardIndex = boards.findIndex((board) => board.id === result.destination.droppableId);
      const destinationBoard = boards[destinationBoardIndex];

      const sourceCards = [...sourceBoard.cards];
      const [removedCard] = sourceCards.splice(result.source.index, 1);

      const destinationCards = [...destinationBoard.cards];
      destinationCards.splice(result.destination.index, 0, removedCard);

      const newSourceBoard = {
        ...sourceBoard,
        cards: sourceCards,
      };

      const newDestinationBoard = {
        ...destinationBoard,
        cards: destinationCards,
      };

      const newBoards = [...boards];
      newBoards[sourceBoardIndex] = newSourceBoard;
      newBoards[destinationBoardIndex] = newDestinationBoard;

      setBoards(newBoards);
    }

  }
  return (
    <Box p ="4">
        <Heading as="h1" mb="4">
            Kanban Board
        </Heading>
          <DragDropContext onDragEnd={onEnd}>
           <Flex className='col'>
                {boards.map((column,index) =>{
                  return <Column key={column.id} droppableId={column.id} column={column} index={index} addNewCard={addNewCard}/>
                })}
            </Flex>
        </DragDropContext>
    </Box>

  )
}
export default App1;