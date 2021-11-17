import { memo, useState } from "react";
import { proxy, useSnapshot } from "valtio";
import { nanoid } from "nanoid";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

const state = proxy<{ todos: Todo[] }>({
  todos: [],
});

const createTodo = (title: string) => {
  state.todos.push({
    id: nanoid(),
    title,
    done: false,
  });
};

const removeTodo = (id: string) => {
  const index = state.todos.findIndex((item) => item.id === id);
  state.todos.splice(index, 1);
};

const toggleTodo = (id: string) => {
  const index = state.todos.findIndex((item) => item.id === id);
  state.todos[index].done = !state.todos[index].done;
};

const TodoItem = ({ id }: { id: string }) => {
  const todoState = state.todos.find((todo) => todo.id === id);
  if (!todoState) {
    throw new Error("invalid todo id");
  }
  const { title, done } = useSnapshot(todoState);
  return (
    <div>
      <input type="checkbox" checked={done} onChange={() => toggleTodo(id)} />
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {title}
      </span>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
};

const MemoedTodoItem = memo(TodoItem);

const TodoList = () => {
  const { todos } = useSnapshot(state);
  const todoIds = todos.map((todo) => todo.id);
  return (
    <div>
      {todoIds.map((todoId) => (
        <MemoedTodoItem key={todoId} id={todoId} />
      ))}
    </div>
  );
};

const NewTodo = () => {
  const [text, setText] = useState("");
  const onClick = () => {
    createTodo(text);
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
