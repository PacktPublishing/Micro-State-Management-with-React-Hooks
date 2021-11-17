import { memo, useCallback, useState } from "react";
import { atom, useAtom } from "jotai";
import { nanoid } from "nanoid";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

const todosAtom = atom<Todo[]>([]);

const TodoItem = ({
  todo,
  removeTodo,
  toggleTodo,
}: {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

const MemoedTodoItem = memo(TodoItem);

const TodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const removeTodo = useCallback(
    (id: string) => setTodos((prev) => prev.filter((item) => item.id !== id)),
    [setTodos]
  );
  const toggleTodo = useCallback(
    (id: string) =>
      setTodos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, done: !item.done } : item
        )
      ),
    [setTodos]
  );
  return (
    <div>
      {todos.map((todo) => (
        <MemoedTodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

const NewTodo = () => {
  const [, setTodos] = useAtom(todosAtom);
  const [text, setText] = useState("");
  const onClick = () => {
    setTodos((prev) => [...prev, { id: nanoid(), title: text, done: false }]);
    setText("");
  };
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={onClick} disabled={!text}>
        Add
      </button>
    </div>
  );
};

const App = () => (
  <>
    <TodoList />
    <NewTodo />
  </>
);

export default App;
