import React, { useContext } from "react";
import { List, Typography, Box } from "@mui/material";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  if (!todos.length) {
    return (
      <Typography mt={2} color="text.secondary">
        No tasks available.
      </Typography>
    );
  }

  return (
    <Box mt={2}>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
