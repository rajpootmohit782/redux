import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const incrementhandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const incrementhandlerby5 = () => {
    dispatch(counterAction.increment5(5));
  };
  const decrementHandlerby5 = () => {
    dispatch(counterAction.decrement5(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
