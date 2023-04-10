    import React from 'react';
    import { Box, Button, Heading,Input, Textarea,Flex } from '@chakra-ui/react'
    import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'
    import { v4 as uuid } from "uuid";
    import { boardData } from './boardData';
    import Column from '../Column/Column';


    const Boards = () => {
        
    const [boards,setBoards] = React.useState(boardData);


    const addNewCard = (label,boardId) =>{
        // console.log(label)
        const card ={
        id : uuid(),
        label : label,
        }
    
        const index=boards.findIndex((item)=> item.id === boardId)
        if(index < 0)return;
    
        const tempBoards = [...boards];  
        tempBoards[index].cards.push(card);   //Pushing a new card towards the bottom of the temporary board
        setBoards(tempBoards);   //changing boards - updates the board whenever a new card is added in the Board
        }

        const onEnd = (result) =>{
            if (result.destination.droppableId === result.source.droppableId) {
                const boardIndex = boards.findIndex((board) => board.id === result.destination.droppableId);
                const board = boards[boardIndex];

                const newCards = [...board.cards];
                // console.log(newCards);
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
        <Box mx="20px" my="30px">
            <Heading as="h2" fontFamily={"Inder sans-serif"}>Kanban Board</Heading>
            <Flex flexDirection={"row"} >
            <DragDropContext onDragEnd={onEnd}>
                <Flex className='col'>
                        {boards.map((column,index) =>{
                        return <Column key={column.id} droppableId={column.id} column={column} index={index} addNewCard={addNewCard}/>
                        })}
                    </Flex>
            </DragDropContext>
            </Flex>
        </Box>
    )

    }

    export default Boards