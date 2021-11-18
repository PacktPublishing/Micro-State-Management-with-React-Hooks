const Component = () => {
  const [state, setState] = useState();
  return (
    <div>
      {JSON.stringify(state)}
      <Child state={state} setState={setState} />
    </div>
  );
};

const Child = ({ state, setState }) => {
  const setFoo = () => setState(
    (prev) => ({ ...prev, foo: ‘foo’ })
  );
  return (
    <div>
      {JSON.stringify(state)}
      <button onClick={setFoo}>Set Foo</button>
    </div>
  );
};

const Component1 = () => {
  const [state, setState] = useGlobalState();
  return (
    <div>
      {JSON.stringify(state)}
    </div>
  );
};

const Component2 = () => {
  const [state, setState] = useGlobalState();
  return (
    <div>
      {JSON.stringify(state)}
    </div>
  );
};
