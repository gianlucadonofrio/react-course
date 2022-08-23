import CounterApp from "./CounterApp";
import { useState } from "react";

const Main = () => {
const [value, setValue] = useState(0);

  return <CounterApp value={value} setValue={setValue} />;
};
export default Main;
