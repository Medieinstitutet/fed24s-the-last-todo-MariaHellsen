import { Todo } from "../models/Todos";

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
          <ul>
            {activeTodos.map((t) => (
              <li key={t.id}>
                {t.task}
                <button
                  className="done"
                  onClick={() => {
                    changeTodoStatus(t.id);
                  }}
                >
                  Done
                </button>
                <button
                  className="remove"
                  onClick={() => {
                    removeTodo(t.id);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No more tasks to do!</p>
        )}
      </section>

      <section className="completedTasks">
        <h3>Completed Tasks</h3>
        {completedTodos.length > 0 ? (
          <ul>
            {completedTodos.map((t) => (
              <li key={t.id}>
                {t.task}
                <button
                  className="undo"
                  onClick={() => {
                    changeTodoStatus(t.id);
                  }}
                >
                  Undo
                </button>
                <button
                  className="remove"
                  onClick={() => {
                    removeTodo(t.id);
                  }}
                >
                  Remove
                </button>
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
