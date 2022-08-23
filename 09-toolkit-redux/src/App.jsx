import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./store/slices/counter";

export const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <hr />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(4))}>Increment by 4</button>
    </div>
  );
};
