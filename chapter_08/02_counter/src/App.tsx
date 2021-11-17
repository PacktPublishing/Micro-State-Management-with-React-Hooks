import { atom, useAtom } from "jotai";

const count1Atom = atom(0);
const count2Atom = atom(0);

const Counter = ({ countAtom }: { countAtom: typeof count1Atom }) => {
  const [count, setCount] = useAtom(countAtom);
  const inc = () => setCount((c) => c + 1);
  return (
    <>
      {count} <button onClick={inc}>+1</button>
    </>
  );
};

const totalAtom = atom((get) => get(count1Atom) + get(count2Atom));

const Total = () => {
  const [total] = useAtom(totalAtom);
  return <>{total}</>;
};

const App = () => (
  <>
    (<Counter countAtom={count1Atom} />) + (<Counter countAtom={count2Atom} />)
    = <Total />
  </>
);

export default App;
