import React, { useState } from "react";

import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import "./App.css";
import { Box } from "@mui/material";
import InputField from "./components/InputField/InputField";
import { Todo } from "./components/models/Todo";
import ToDoList from "./components/ToDoList/ToDoList";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos, { id: Date.now(), toDo, isDone: false }]);
      setToDo("");
    }
  };
  console.log(toDos);
  console.log(useState<string>(""));

  return (
    <div className="App">
      <span className="heading"> Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
      <Container maxWidth="sm">
        <Box sx={{ m: 4 }}>
          <Typography variant="h4">Happy coding 🚀</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default App;
