const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1
  };
};
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestate = store.getState();
  console.log(latestate);
};

store.subscribe(counterSubscriber);
