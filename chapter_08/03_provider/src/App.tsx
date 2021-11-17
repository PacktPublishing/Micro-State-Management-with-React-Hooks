import { atom, useAtom, Provider } from "jotai";

const countAtom = atom(0);

const Counter = () => {
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
    <Provider>
      <h1>First Provider</h1>
      <div>
        <Counter />
      </div>
      <div>
        <Counter />
      </div>
    </Provider>
    <Provider>
      <h1>Second Provider</h1>
      <div>
        <Counter />
      </div>
      <div>
        <Counter />
      </div>
    </Provider>
  </>
);

export default App;
