import { useCallback } from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((value) => {
    setCounter((counter) => counter + value);
  }, []);

  return (
    <>
      <h1>Usecallback Hooks: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
