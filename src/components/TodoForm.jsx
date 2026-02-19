import React, { useState, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        mt: 1,
      }}
    >
      <TextField
        fullWidth
        label="Add New Task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          px: 4,
          background: "linear-gradient(45deg, #5e60ce, #48bfe3)",
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoForm;
