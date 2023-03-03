import React from 'react'
import { Box, Heading, Textarea } from '@chakra-ui/react'
import { data } from './data'
import Column from './Column'
import { Flex } from '@chakra-ui/react'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd'
import {render,screen} from '@testing-library/react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'react-draft-wysiwyg'

const App1 = () => {
  return (
    <Box p ="4">
        <Heading as="h1" mb="4">
            Kanban Board
        </Heading>
        <Flex>
        {data.map((column) =>(
                <Column key={column.id} column={column}/>    
            ))}
        </Flex>
    </Box>

  )
}


// const App1=()=>{
//   const [boardData,setData] = React.useState(data);

//   return(
//       <div className='app1'>
//         <DragDropContext>
//           <Droppable droppableId="board">
//             {(provided) => (
//               <Flex flexDirection={"column"} gap="20px" {...provided.droppableProps} ref={provided.innerRef}>  
//                 {boardData.map((column,index) => (
//                   <Draggable key={column.id} draggableId={`Column-${column.id}`} index={index}>
//                     {(provided) => (
//                       <Textarea 
//                         {...provided.dragHandleProps}
//                         defaultValue={column.title}
//                         {...provided.draggableProps}
//                         ref={provided.innerRef}
//                     ></Textarea>          
//                   )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder} 
//               </Flex>
//               )}
//           </Droppable>
//           </DragDropContext>
//         </div>
      
//   )
// }
export default App1;