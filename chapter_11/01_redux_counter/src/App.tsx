import { Provider } from "react-redux";
import { store } from "./app/store";
import { Counter } from "./features/counter/Counter";

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <Counter />
    </div>
  </Provider>
);

export default App;
