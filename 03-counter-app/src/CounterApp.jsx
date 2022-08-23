import PropTypes from "prop-types";

const CounterApp = ({ value, setValue }) => {
  const handleAdd = () => setValue(value + 1);
  const handleSubtract = () => setValue(value - 1);
  const handleReset = () => setValue(0);
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
