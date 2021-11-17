import { proxy, useSnapshot } from "valtio";

const state = proxy({
  count1: 0,
  count2: 0,
});

const Counter1 = () => {
  const snap = useSnapshot(state);
  const inc = () => ++state.count1;
  return (
    <>
      {snap.count1} <button onClick={inc}>+1</button>
    </>
  );
};

const Counter2 = () => {
  const snap = useSnapshot(state);
  const inc = () => ++state.count2;
  return (
    <>
      {snap.count2} <button onClick={inc}>+1</button>
    </>
  );
};

const App = () => (
  <>
    <div>
      <Counter1 />
    </div>
    <div>
      <Counter2 />
    </div>
  </>
);

export default App;
