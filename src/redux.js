const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1
    };
  }
};
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestate = store.getState();
  console.log(latestate);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

counterSubscriber();
