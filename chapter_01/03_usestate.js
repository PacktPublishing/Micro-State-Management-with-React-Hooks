const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(1)}>Set Count to 1</button>
    </div>
  );
};

const Component = () => {
  const [state, setState] = useState({ count: 0 });
  return (
    <div>
      {state.count}
      <button onClick={() => setState({ count: 1 })}>
        Set Count to 1
      </button>
    </div>
  );
};

const Component = () => {
  const [state, setState] = useState({ count: 0 });
  return (
    <div>
      {state.count}
      <button
        onClick={() => { state.count = 1; setState(state); }}
      >
        Set Count to 1
      </button>
    </div>
  );
};

const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>
        Set Count to {count + 1 }
      </button>
    </div>
  );
};

const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count
      </button>
    </div>
  );
};

const Component = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      {count}
      <button
        onClick={() =>
          setCount((c) => c % 2 === 0 ? c : c + 1)}
      >
        Increment Count if it makes the result even
      </button>
    </div>
  );
};

const init = () => 0;

const Component = () => {
  const [count, setCount] = useState(init);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count
      </button>
    </div>
  );
};
