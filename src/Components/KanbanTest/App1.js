import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { data } from './data'
import Column from './Column'
import { Flex } from '@chakra-ui/react'

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

export default App1