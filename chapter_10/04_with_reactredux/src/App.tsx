import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createTrackedSelector } from "react-tracked";

type State = { count: number; text: string };
type Action = { type: "INC" } | { type: "SET_TEXT"; text: string };

const initialState: State = { count: 0, text: "hello" };
const reducer = (state = initialState, action: Action) => {
  if (action.type === "INC") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "SET_TEXT") {
    return { ...state, text: action.text };
  }
  return state
};

const store = createStore(reducer);
const useTrackedState = createTrackedSelector<State>(useSelector);

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useTrackedState();
  const inc = () => dispatch({ type: "INC" });
  return (
    <div>
      count: {count} <button onClick={inc}>+1</button>
    </div>
  );
};

const TextBox = () => {
  const dispatch = useDispatch();
  const state = useTrackedState();
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
  <Provider store={store}>
    <div>
      <Counter />
      <Counter />
      <TextBox />
      <TextBox />
    </div>
  </Provider>
);

export default App;
