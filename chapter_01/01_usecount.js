const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};

const useCount = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};

const Component = () => {
  const [count, setCount] = useCount();
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};

const useCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('count is changed to', count);
  }, [count]);
  return [count, setCount];
};

const useCount = () => {
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);
  return [count, inc];
};
