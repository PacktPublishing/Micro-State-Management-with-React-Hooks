import { useStore } from "./store";

export function Counter() {
  const count = useStore((state) => state.counter.value);
  const { increment, decrement } = useStore((state) => state.counterActions);

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={increment}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
