import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Features/store";
import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
