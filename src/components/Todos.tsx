import { Todo } from "../models/Todos";
import "./Todos.css";

type TodosProps = {
  todos: Todo[];
  removeTodo: (id: number) => void;
  changeTodoStatus: (id: number) => void;
};

export const Todos = ({ todos, removeTodo, changeTodoStatus }: TodosProps) => {
  const activeTodos = todos.filter((t) => t.done === false);
  const completedTodos = todos.filter((t) => t.done === true);

  return (
    <>
      <section className="activeTasks">
        <h3>Tasks To Do</h3>
        {activeTodos.length > 0 ? (
          <ul className="tasks">
            {activeTodos.map((t) => (
              <li className="task" key={t.id}>
                <div className="taskText">{t.task}</div>
                <div className="taskButtons">
                  <button
                    className="button done"
                    onClick={() => {
                      changeTodoStatus(t.id);
                    }}
                  >
                    Done
                  </button>
                  <button
                    className="button remove"
                    onClick={() => {
                      removeTodo(t.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No more tasks to do!</p>
        )}
      </section>

      <section className="completedTasks">
        <i className="fa-solid fa-circle-check"></i>
        <h3>Completed Tasks</h3>
        {completedTodos.length > 0 ? (
          <ul className="tasks">
            {completedTodos.map((t) => (
              <li className="task" key={t.id}>
                <div className="taskText">{t.task}</div>
                <div className="taskButtons">
                  <button
                    className="button undo"
                    onClick={() => {
                      changeTodoStatus(t.id);
                    }}
                  >
                    Undo
                  </button>
                  <button
                    className="button remove"
                    onClick={() => {
                      removeTodo(t.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No completed tasks yet</p>
        )}
      </section>
    </>
  );
};
