import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import TodoProvider from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <Container maxWidth="sm">
        <Box mt={8}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#5e60ce", fontWeight: "bold" }}
          >
            Todo App
          </Typography>

          {/* Form Card */}
          <Paper elevation={4} sx={{ p: 3, mb: 4 }}>
            <TodoForm />
          </Paper>

          {/* List Card */}
          <Paper elevation={4} sx={{ p: 3 }}>
            <TodoList />
          </Paper>
        </Box>
      </Container>
    </TodoProvider>
  );
}

export default App;


