const addOne = (n) => n + 1;

let base = 1;

const addBase = (n) => n + base;

const createContainer = () => {
  let base = 1;
  const addBase = (n) => n + base;
  const changeBase = (b) => { base = b; };
  return { addBase, changeBase };
};

const { addBase, changeBase } = createContainer();

const Component = ({ number }) => {
  return <div>{number}</div>;
};

const AddOne = ({ number }) => {
  return <div>{number + 1}</div>;
};

const AddBase = ({ number }) => {
  const [base, changeBase] = useState(1);
  return <div>{number + base}</div>;
};
