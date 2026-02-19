import React, { useContext, useState } from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  TextField,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <ListItem
      sx={{
          backgroundColor: "#eef2ff",
  mb: 2,
  borderRadius: 3,
  px: 2,
  py: 1.5,
      }}
      secondaryAction={
        <Box>
          {isEditing ? (
            <IconButton onClick={handleSave}>
              <SaveIcon color="primary" />
            </IconButton>
          ) : (
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon color="secondary" />
            </IconButton>
          )}
          <IconButton onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <TextField
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          size="small"
        />
      ) : (
        <ListItemText
          primary={todo.text}
          sx={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        />
      )}
    </ListItem>
  );
};

export default TodoItem;
