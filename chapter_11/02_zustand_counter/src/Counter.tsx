import { useStore } from "./store";

export function Counter() {
  const count = useStore((state) => state.counter.value);
  const { increment, decrement } = useStore((state) => state.counterActions);
  return (
    <div>
      <div>
        <button onClick={increment}>Increment</button>
        <span>{count}</span>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
