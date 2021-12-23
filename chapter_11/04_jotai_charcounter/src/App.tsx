import { atom, useAtom } from "jotai";

const textAtom = atom("");

const TextInput = () => {
  const [text, setText] = useAtom(textAtom);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <br />
      Echo: {text}
    </div>
  );
};

const charCountAtom = atom((get) => get(textAtom).length);

const CharacterCount = () => {
  const [count] = useAtom(charCountAtom);
  return <>Character Count: {count}</>;
};

const CharacterCounter = () => (
  <div>
    <TextInput />
    <CharacterCount />
  </div>
);

const App = () => (
  <>
    <CharacterCounter />
  </>
);

export default App;
