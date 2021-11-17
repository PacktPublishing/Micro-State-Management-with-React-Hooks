import { Dispatch, SetStateAction, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return <Parent count={count} setCount={setCount} />;
};

const Parent = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) => (
  <>
    <Component1 count={count} setCount={setCount} />
    <Component2 count={count} setCount={setCount} />
  </>
);

const Component1 = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) => (
  <div>
    {count}
    <button onClick={() => setCount((c) => c + 1)}>+1</button>
  </div>
);

const Component2 = ({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) => (
  <div>
    {count}
    <button onClick={() => setCount((c) => c + 2)}>+2</button>
  </div>
);

export default App;
