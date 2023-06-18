import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Features/counter/CounterSlice";
import { useState } from "react";

const Counter = () => {
  const [inputValue, setInputValue] = useState("");
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter is {counter.value}</h2>
      <button onClick={() => dispatch(increment(Number(inputValue)))}>+</button>
      <button onClick={() => dispatch(decrement(Number(inputValue)))}>-</button>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Counter;
