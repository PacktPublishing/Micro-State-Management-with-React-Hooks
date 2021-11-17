import { useCallback, useMemo } from "react";
import { useSubscription } from "use-subscription";

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

const store = createStore({ count1: 0, count2: 0 });

const useStoreSelector = <T, S>(store: Store<T>, selector: (state: T) => S) =>
  useSubscription(
    useMemo(
      () => ({
        getCurrentValue: () => selector(store.getState()),
        subscribe: store.subscribe,
      }),
      [store, selector]
    )
  );

const Component1 = () => {
  const state = useStoreSelector(
    store,
    useCallback((state) => state.count1, [])
  );
  /*
  const state = useSubscription(useMemo(() => ({            
    getCurrentValue: () => store.getState().count1,        
    subscribe: store.subscribe,                            
  }), []));                                           
  */
  const inc = () => {
    store.setState((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
    }));
  };
  return (
    <div>
      count1: {state} <button onClick={inc}>+1</button>
    </div>
  );
};

const selectCount2 = (state: ReturnType<typeof store.getState>) => state.count2;

const Component2 = () => {
  const state = useStoreSelector(store, selectCount2);
  const inc = () => {
    store.setState((prev) => ({
      ...prev,
      count2: prev.count2 + 1,
    }));
  };
  return (
    <div>
      count2: {state} <button onClick={inc}>+1</button>
    </div>
  );
};

const App = () => (
  <>
    <Component1 />
    <Component1 />
    <Component2 />
    <Component2 />
  </>
);

export default App;
