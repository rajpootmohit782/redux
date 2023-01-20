//import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialcounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialcounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increment5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement5(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
const initialAuthState = {
  isAunthenticated: false
};
const Authslice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAunthenticated = true;
    },
    logout(state) {
      state.isAunthenticated = false;
    }
  }
});
// const counterReducer = (state = initialstate, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === "increment5") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "decrement5") {
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }
//   return state;
// };
//console.log(initialState.counter);

//const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: Authslice.reducer }
});

export const counterAction = counterSlice.actions;
export const authAction = Authslice.actions;
export default store;
