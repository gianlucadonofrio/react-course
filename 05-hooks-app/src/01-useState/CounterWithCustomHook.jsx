import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />
      <button onClick={()=>increment(2)}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={()=>decrement(2)}>-1</button>
    </div>
  );
};
