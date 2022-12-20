import React, { useEffect, useState, useRef } from "react";
import "./SingleToDo.css";
import { Todo } from "../models/Todo";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import ToDoList from "../ToDoList/ToDoList";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  todo: Todo;
  toDos: Todo[];
  key: number;
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
}

const SingleToDo = ({ todo, toDos, setToDos, key, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.toDo);

  const handleDone = (id: number) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
      )
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, toDo: editTodo } : { ...todo }
      )
    );
    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todos_single"
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => {
                setEditTodo(e.target.value);
              }}
              className="todos_single--text"
              ref={inputRef}
            />
          ) : todo.isDone ? (
            <s className="todos_single--text">{todo.toDo}</s>
          ) : (
            <span className="todos_single--text">{todo.toDo}</span>
          )}

          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(true);
                }
              }}
            >
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
      )}
    </Draggable>
  );
};

export default SingleToDo;
