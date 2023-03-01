import { Box, Text } from '@chakra-ui/react';
import Task from './Task/Task';

function Column({ column }) {
  return (
    <Box p="4" bg="gray.100" rounded="md" mr="4" w="300px">
      <Text fontWeight="bold" mb="2">
        {column.title}
      </Text>
      {column.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Box>
  );
}

export default Column;
