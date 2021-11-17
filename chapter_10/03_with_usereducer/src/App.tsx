import { useEffect, useReducer } from "react";
import { createContainer } from "react-tracked";

const useValue = () => {
  type State = { count: number; text: string };
  type Action = { type: "INC" } | { type: "SET_TEXT"; text: string };
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      if (action.type === "INC") {
        return { ...state, count: state.count + 1 };
      }
      if (action.type === "SET_TEXT") {
        return { ...state, text: action.text };
      }
      throw new Error("unknown action type");
    },
    { count: 0, text: "hello" }
  );
  useEffect(() => {
    console.log("latest state", state);
  }, [state]);
  return [state, dispatch] as const;
};

const { Provider, useTracked } = createContainer(useValue);

const Counter = () => {
  const [state, dispatch] = useTracked();
  const inc = () => dispatch({ type: "INC" });
  return (
    <div>
      count: {state.count} <button onClick={inc}>+1</button>
    </div>
  );
};

const TextBox = () => {
  const [state, dispatch] = useTracked();
  const setText = (text: string) => {
    dispatch({ type: "SET_TEXT", text });
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
