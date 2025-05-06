import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "../models/Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn State", false, 1),
    new Todo("Repeat props", false, 2),
    new Todo("Read Lifting state up", false, 3),
  ]);

  const addTodo = () => {
    setTodos([...todos, new Todo("", false)]);
  };
  return (
    <>
      <AddTodo addTodo={addTodo} />
    </>
  );
};
