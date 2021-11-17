import { ReactNode, createContext, useContext, useState } from "react";

const useValue = () => useState({ count: 0, text: "hello" });

const StateContext = createContext<ReturnType<typeof useValue> | null>(null);

const Provider = ({ children }: { children: ReactNode }) => (
  <StateContext.Provider value={useValue()}>{children}</StateContext.Provider>
);

const useStateContext = () => {
  const contextValue = useContext(StateContext);
  if (contextValue === null) {
    throw new Error("Please use Provider");
  }
  return contextValue;
};

const Counter = () => {
  const [state, setState] = useStateContext();
  const inc = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div>
      count: {state.count} <button onClick={inc}>+1</button>
    </div>
  );
};

const TextBox = () => {
  const [state, setState] = useStateContext();
  const setText = (text: string) => {
    setState((prev) => ({ ...prev, text }));
  };
  return (
    <div>
      <input value={state.text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

const App = () => (
  <Provider>
    <div>
      <Counter />
      <Counter />
      <TextBox />
      <TextBox />
    </div>
  </Provider>
);

export default App;
