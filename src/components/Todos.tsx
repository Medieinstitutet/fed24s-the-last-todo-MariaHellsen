import { useState } from "react";
import { Todo } from "../models/Todos";

type TodosProps = {
  todos: Todo[];
};
export const Todos = (props: TodosProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      {props.todos.map((t) => (
        <ul>
          <li>{t.task}</li>
          {t.done ? (
            <div className="done"></div>
          ) : (
            <div className="notDone"></div>
          )}
        </ul>
      ))}
    </>
  );
};
