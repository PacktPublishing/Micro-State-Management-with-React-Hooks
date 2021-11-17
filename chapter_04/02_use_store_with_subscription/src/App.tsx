import { useEffect, useState } from "react";

type Store<T> = {
  getState: () => T;
  setState: (action: T | ((prev: T) => T)) => void;
  subscribe: (callback: () => void) => () => void;
};

const createStore = <T extends unknown>(initialState: T): Store<T> => {
  let state = initialState;
  const callbacks = new Set<() => void>();
  const getState = () => state;
  const setState = (nextState: T | ((prev: T) => T)) => {
    state =
      typeof nextState === "function"
        ? (nextState as (prev: T) => T)(state)
        : nextState;
    callbacks.forEach((callback) => callback());
  };
  const subscribe = (callback: () => void) => {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  };
  return { getState, setState, subscribe };
};

const store = createStore({ count: 0 });

const useStore = <T extends unknown>(store: Store<T>) => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    setState(store.getState());
    return unsubscribe;
  }, [store]);
  return [state, store.setState] as const;
};

const Component1 = () => {
  const [state, setState] = useStore(store);
  const inc = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <div>
      {state.count} <button onClick={inc}>+1</button>
    </div>
  );
};

const Component2 = () => {
  const [state, setState] = useStore(store);
  const inc2 = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 2,
    }));
  };
  return (
    <div>
      {state.count} <button onClick={inc2}>+2</button>
    </div>
  );
};

const App = () => (
  <>
    <Component1 />
    <Component2 />
  </>
);

export default App;
