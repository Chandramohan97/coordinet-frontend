import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

function KanbanCard({ title, description }) {
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableDescription, setEditableDescription] = useState(
    description
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleTitleChange = (event) => {
    setEditableTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setEditableDescription(event.target.value);
  };

  const handleSubmit = () => {
    // handle submit logic here
    onClose();
  };

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      p="3"
      mb="3"
      cursor="pointer"
      onClick={onOpen}
    >
      <Text fontSize="lg" fontWeight="bold">
        {editableTitle}
      </Text>
      <Text>{editableDescription}</Text>

      <Flex mt="2">
        <Button size="sm" variant="ghost" mr="2">
          Move
        </Button>
        <Button size="sm" variant="ghost">
          Delete
        </Button>
      </Flex>

      <Box mt="3">
        <Textarea
          value={editableDescription}
          onChange={handleDescriptionChange}
          placeholder="Add a more detailed description..."
          size="sm"
          resize="none"
          isDisabled={!isOpen}
        />
      </Box>

      <Box mt="3">
        <Input
          value={editableTitle}
          onChange={handleTitleChange}
          placeholder="Title"
          size="sm"
          isDisabled={!isOpen}
        />
      </Box>

      <Box mt="3" textAlign="right">
        <Button size="sm" variant="outline" mr="2" onClick={onClose}>
          Cancel
        </Button>
        <Button size="sm" colorScheme="blue" onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
}

export default KanbanCard;
