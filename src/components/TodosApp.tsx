import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { Todo } from "../models/Todos";
import { Todos } from "./Todos";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Learn State", false, 1),
    new Todo("Repeat props", false, 2),
    new Todo("Read Lifting state up", false, 3),
  ]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, new Todo(newTodo.task, newTodo.done)]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const changeTodoStatus = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, done: !t.done };
        }
        return t;
      })
    );
  };

  console.log(todos);

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        changeTodoStatus={changeTodoStatus}
      />
    </>
  );
};
