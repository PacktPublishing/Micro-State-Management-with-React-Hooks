import { atom, useAtom } from "jotai";

const countAtom = atom(0);

const Counter1 = () => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      {count} <button onClick={inc}>+1</button>
    </>
  );
};

const Counter2 = () => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      {count} <button onClick={inc}>+1</button>
    </>
  );
};

const App = () => (
  <>
    <div>
      <Counter1 />
    </div>
    <div>
      <Counter2 />
    </div>
  </>
);

export default App;
