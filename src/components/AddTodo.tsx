import { ChangeEvent, FormEvent, useState } from "react";
import { defaultValue, Todo } from "../models/Todos";
import "./AddTodo.css";

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

export const AddTodo = (props: AddTodoProps) => {
  const [todo, setTodo] = useState<Todo>(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setTodo({ ...todo, [e.target.id]: e.target.value });
    }

    if (e.target.type === "checkbox") {
      setTodo({ ...todo, [e.target.id]: e.target.checked });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    props.addTodo(todo);
    setTodo(defaultValue);
    console.log(todo);
  };

  return (
    <>
      <i className="fa-solid fa-list"></i>
      <h2>Todo List</h2>
      <form className="oneTodo" onSubmit={handleSubmit}>
        <label className="instruction" htmlFor="task">
          Write your task here:
        </label>
        <input
          className="inputField"
          type="text"
          id="task"
          value={todo.task}
          onChange={handleChange}
        />
        <button className="button addTodoButton">Add</button>
      </form>
    </>
  );
};
