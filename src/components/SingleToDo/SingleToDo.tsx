import React from "react";
import "./SingleToDo.css";
import { Todo } from "../models/Todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import ToDoList from "../ToDoList/ToDoList";

interface Props {
  todo: Todo;
  toDos: Todo[];
  key: number;
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleToDo = ({ todo, toDos, setToDos, key }: Props) => {
  const handleDone = (id: number) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="todos_single">
      {todo.isDone ? (
        <s className="todos_single--text">{todo.toDo}</s>
      ) : (
        <span className="todos_single--text">{todo.toDo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
