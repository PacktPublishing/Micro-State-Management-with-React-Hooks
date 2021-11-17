import { memo, useCallback, useState } from "react";
import { PrimitiveAtom, atom, useAtom } from "jotai";

type Todo = {
  title: string;
  done: boolean;
};

type TodoAtom = PrimitiveAtom<Todo>;

const todoAtomsAtom = atom<TodoAtom[]>([]);

const TodoItem = ({
  todoAtom,
  remove,
}: {
  todoAtom: TodoAtom;
  remove: (todoAtom: TodoAtom) => void;
}) => {
  const [todo, setTodo] = useAtom(todoAtom);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => setTodo((prev) => ({ ...prev, done: !prev.done }))}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => remove(todoAtom)}>Delete</button>
    </div>
  );
};

const MemoedTodoItem = memo(TodoItem);

const TodoList = () => {
  const [todoAtoms, setTodoAtoms] = useAtom(todoAtomsAtom);
  const remove = useCallback(
    (todoAtom: TodoAtom) =>
      setTodoAtoms((prev) => prev.filter((item) => item !== todoAtom)),
    [setTodoAtoms]
  );
  return (
    <div>
      {todoAtoms.map((todoAtom) => (
        <MemoedTodoItem
          key={`${todoAtom}`}
          todoAtom={todoAtom}
          remove={remove}
        />
      ))}
    </div>
  );
};

const NewTodo = () => {
  const [, setTodoAtoms] = useAtom(todoAtomsAtom);
  const [text, setText] = useState("");
  const onClick = () => {
    setTodoAtoms((prev) => [...prev, atom<Todo>({ title: text, done: false })]);
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
