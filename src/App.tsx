import React, { useState } from "react";

import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import "./App.css";
import { Box } from "@mui/material";
import InputField from "./components/InputField/InputField";
import { Todo } from "./components/models/Todo";
import ToDoList from "./components/ToDoList/ToDoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<Todo[]>([]);
  const [completedToDos, setCompletedToDos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos, { id: Date.now(), toDo, isDone: false }]);
      setToDo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = toDos;
    let complete = completedToDos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, { ...add, isDone: !add.isDone });
    } else {
      complete.splice(destination.index, 0, { ...add, isDone: !add.isDone });
    }

    console.log(complete, active);

    setCompletedToDos(complete);
    setToDos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading"> Taskify</span>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList
          toDos={toDos}
          setToDos={setToDos}
          completedToDos={completedToDos}
          setCompletedToDos={setCompletedToDos}
        />
        <Container maxWidth="sm">
          <Box sx={{ m: 4 }}>
            <Typography variant="h4">Happy coding 🚀</Typography>
          </Box>
        </Container>
      </div>
    </DragDropContext>
  );
};

export default App;
