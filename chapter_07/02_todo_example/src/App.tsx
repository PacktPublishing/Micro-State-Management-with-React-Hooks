import { memo, useState } from "react";
import create from "zustand";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};

type StoreState = {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

let nextId = 0;

const useStore = create<StoreState>((set) => ({
  todos: [],
  addTodo: (title) =>
    set((prev) => ({
      todos: [...prev.todos, { id: ++nextId, title, done: false }],
    })),
  removeTodo: (id) =>
    set((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    })),
  toggleTodo: (id) =>
    set((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    })),
}));

const selectRemoveTodo = (state: StoreState) => state.removeTodo;
const selectToggleTodo = (state: StoreState) => state.toggleTodo;

const TodoItem = ({ todo }: { todo: Todo }) => {
  const removeTodo = useStore(selectRemoveTodo);
  const toggleTodo = useStore(selectToggleTodo);
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

const selectTodos = (state: StoreState) => state.todos;

const TodoList = () => {
  const todos = useStore(selectTodos);
  return (
    <div>
      {todos.map((todo) => (
        <MemoedTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const selectAddTodo = (state: StoreState) => state.addTodo;

const NewTodo = () => {
  const addTodo = useStore(selectAddTodo);
  const [text, setText] = useState("");
  const onClick = () => {
    addTodo(text);
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
