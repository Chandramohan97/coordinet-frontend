import React from "react";
import { Grid } from "@chakra-ui/react";
import KanbanCard from "./KanbanCard";

function KanbanBoard() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="3">
      <KanbanCard title="Task 1" description="This is a task description." />
      <KanbanCard title="Task 2" description="This is another task description." />
      <KanbanCard title="Task 3" description="This is a third task description." />
    </Grid>
  );
}

export default KanbanBoard;
