import React from "react";
import { Todo } from "../models/Todo";
import SingleToDo from "../SingleToDo/SingleToDo";
import "./ToDoList.css";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedToDos: Todo[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({
  toDos,
  setToDos,
  completedToDos,
  setCompletedToDos,
}: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Active Tasks</span>
            {toDos.map((task, index) => (
              <SingleToDo
                index={index}
                todo={task}
                toDos={toDos}
                key={task.id}
                setToDos={setToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="CompletedList">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Tasks</span>
            {completedToDos.map((task, index) => (
              <SingleToDo
                index={index}
                todo={task}
                toDos={completedToDos}
                key={task.id}
                setToDos={setCompletedToDos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
