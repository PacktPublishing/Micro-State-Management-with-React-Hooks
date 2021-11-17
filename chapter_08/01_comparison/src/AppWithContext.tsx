import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const CountContext = createContext(
  (undefined as unknown) as [number, Dispatch<SetStateAction<number>>]
);

const CountProvider = ({ children }: { children: ReactNode }) => (
  <CountContext.Provider value={useState(0)}>{children}</CountContext.Provider>
);

const Counter1 = () => {
  const [count, setCount] = useContext(CountContext);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      {count} <button onClick={inc}>+1</button>
    </>
  );
};

const Counter2 = () => {
  const [count, setCount] = useContext(CountContext);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      {count} <button onClick={inc}>+1</button>
    </>
  );
};

const App = () => (
  <CountProvider>
    <div>
      <Counter1 />
    </div>
    <div>
      <Counter2 />
    </div>
  </CountProvider>
);

export default App;
