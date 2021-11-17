import {
  memo,
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";

const CountContext = createContext({ count1: 0, count2: 0 });

const Counter1 = () => {
  const { count1 } = useContext(CountContext);
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div>
      Count1: {count1} (renders: {renderCount.current})
    </div>
  );
};

const MemoedCounter1 = memo(Counter1);

const Counter2 = () => {
  const { count2 } = useContext(CountContext);
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div>
      Count2: {count2} (renders: {renderCount.current})
    </div>
  );
};

const MemoedCounter2 = memo(Counter2);

const Parent = () => (
  <>
    <MemoedCounter1 />
    <MemoedCounter2 />
  </>
);

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <CountContext.Provider value={{ count1, count2 }}>
      <button onClick={() => setCount1((c) => c + 1)}>{count1}</button>
      <button onClick={() => setCount2((c) => c + 1)}>{count2}</button>
      <Parent />
    </CountContext.Provider>
  );
};

export default App;
