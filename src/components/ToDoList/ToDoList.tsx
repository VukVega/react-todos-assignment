import React from "react";
import { Todo } from "../models/Todo";
import SingleToDo from "../SingleToDo/SingleToDo";
import "./ToDoList.css";

interface Props {
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }: Props) => {
  return (
    <div className="todos">
      {toDos.map((task) => (
        <SingleToDo
          todo={task}
          key={task.id}
          toDos={toDos}
          setToDos={setToDos}
        />
      ))}
    </div>
  );
};

export default ToDoList;
