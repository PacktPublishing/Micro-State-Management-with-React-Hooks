import { proxy, useSnapshot } from "valtio";

const myTimer = proxy({
  secondsPassed: 0,
  increase: () => {
    myTimer.secondsPassed += 1;
  },
  reset: () => {
    myTimer.secondsPassed = 0;
  },
});

setInterval(() => {
  myTimer.increase();
}, 1000);

const TimerView = ({ timer }: { timer: typeof myTimer }) => {
  const snap = useSnapshot(timer);
  return (
    <button onClick={() => timer.reset()}>
      Seconds passed: {snap.secondsPassed}
    </button>
  );
};

const App = () => (
  <>
    <TimerView timer={myTimer} />
  </>
);

export default App;
