import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counterre = useSelector((state) => state.counter);
  const incrementhandler = () => {
    dispatch({
      type: "increment"
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: "decrement"
    });
  };
  const incrementhandlerby5 = () => {
    dispatch({
      type: "increment5"
    });
  };
  const decrementHandlerby5 = () => {
    dispatch({
      type: "decrement5"
    });
  };
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterre}</div>
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <div>
        <button onClick={incrementhandlerby5}>incrementby 5</button>
        <button onClick={decrementHandlerby5}>decrementby 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
