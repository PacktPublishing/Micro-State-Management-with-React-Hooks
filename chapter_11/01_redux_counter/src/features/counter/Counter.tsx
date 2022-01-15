import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

type State = {
  counter: {
    value: number;
  };
};

export function Counter() {
  const count = useSelector((state: State) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
