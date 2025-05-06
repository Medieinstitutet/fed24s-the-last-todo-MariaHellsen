import { Todo } from "../models/Todos";

type TodosProps = {
  todos: Todo[];
  removeTodo: (id: number) => void;
};
export const Todos = ({ todos, removeTodo }: TodosProps) => {
  //   const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      {todos.map((t) => (
        <div key={t.id}>
          <ul>
            <li>{t.task}</li>
            {t.done ? (
              <div className="done"></div>
            ) : (
              <div className="notDone"></div>
            )}
          </ul>
          <div>
            <button className="done">Done</button>
            <button
              className="remove"
              onClick={() => {
                removeTodo(t.id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
