import {
  ReactNode,
  createContext,
  createElement,
  useContext,
  useState,
} from "react";

const createStateContext = <Value, State>(
  useValue: (init?: Value) => State
) => {
  const StateContext = createContext<State | null>(null);
  const StateProvider = ({
    initialValue,
    children,
  }: {
    initialValue?: Value;
    children?: ReactNode;
  }) => (
    <StateContext.Provider value={useValue(initialValue)}>
      {children}
    </StateContext.Provider>
  );
  const useContextState = () => {
    const value = useContext(StateContext);
    if (value === null) throw new Error("Provider missing");
    return value;
  };
  return [StateProvider, useContextState] as const;
};

const useNumberState = (init?: number) => useState(init || 0);

const [Count1Provider, useCount1] = createStateContext(useNumberState);
const [Count2Provider, useCount2] = createStateContext(useNumberState);
const [Count3Provider, useCount3] = createStateContext(useNumberState);
const [Count4Provider, useCount4] = createStateContext(useNumberState);
const [Count5Provider, useCount5] = createStateContext(useNumberState);

const Counter1 = () => {
  const [count1, setCount1] = useCount1();
  return (
    <div>
      Count1: {count1}{" "}
      <button onClick={() => setCount1((c) => c + 1)}>+1</button>
    </div>
  );
};

const Counter2 = () => {
  const [count2, setCount2] = useCount2();
  return (
    <div>
      Count2: {count2}{" "}
      <button onClick={() => setCount2((c) => c + 1)}>+1</button>
    </div>
  );
};

const Parent = () => (
  <div>
    <Counter1 />
    <Counter1 />
    <Counter2 />
    <Counter2 />
  </div>
);

const App = () => {
  const providers = [
    [Count1Provider, { initialValue: 10 }],
    [Count2Provider, { initialValue: 20 }],
    [Count3Provider, { initialValue: 30 }],
    [Count4Provider, { initialValue: 40 }],
    [Count5Provider, { initialValue: 50 }],
  ] as const;
  return providers.reduceRight(
    (children, [Component, props]) => createElement(Component, props, children),
    <Parent />
  );
};

/*
const App = () => (
  <Count1Provider initialValue={10}>
    <Count2Provider initialValue={20}>
      <Count3Provider initialValue={30}>
        <Count4Provider initialValue={40}>
          <Count5Provider initialValue={50}>
            <Parent />
          </Count5Provider>
        </Count4Provider>
      </Count3Provider>
    </Count2Provider>
  </Count1Provider>
);
*/

export default App;
