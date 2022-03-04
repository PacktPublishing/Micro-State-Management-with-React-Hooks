const createContainer = () => {
  let base = 1;
  const addBase = (n) => n + base;
  const changeBase = (b) => { base = b; };
  return { addBase, changeBase };
};

const container1 = createContainer();
const container2 = createContainer();

container1.changeBase(10);

console.log(container1.addBase(2)); // shows "12"
console.log(container2.addBase(2)); // shows "3"

const Component1 = ({ count, setCount }) => {
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count
      </button>
    </div>
  );
};

const Parent = ({ count, setCount }) => {
  return (
    <>
      <Component1 count={count} setCount={setCount} />
    </>
  );
};

const GrandParent = ({ count, setCount }) => {
  return (
    <>
      <Parent count={count} setCount={setCount} />
    </>
  );
};

const Root = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <GrandParent count={count} setCount={setCount} />
    </>
  );
};

const Component1 = () => {
  // useGlobalCountState is a pseudo hook
  const [count, setCount] = useGlobalCountState();
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count
      </button>
    </div>
  );
};

const Parent = () => {
  return (
    <>
      <Component1 />
    </>
  );
};

const GrandParent = () => {
  return (
    <>
      <Parent />
    </>
  );
};

const Root = () => {
  return (
    <>
      <GrandParent />
    </>
  );
};

const globalState = {
  authInfo: { name: 'React' },
};

const Component1 = () => {
  // useGlobalState is a pseudo hook
  const { authInfo } = useGlobalState();
  return (
    <div>
      {authInfo.name}
    </div>
  );
};
