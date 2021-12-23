import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const textState = atom({
  key: "textState",
  default: "",
});

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
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

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => get(textState).length,
});

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};

const CharacterCounter = () => (
  <div>
    <TextInput />
    <CharacterCount />
  </div>
);

const App = () => (
  <RecoilRoot>
    <CharacterCounter />
  </RecoilRoot>
);

export default App;
