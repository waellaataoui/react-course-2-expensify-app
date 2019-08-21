import { createStore } from "redux";
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      const decrementBy = action.decrementBy ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
});
//set count
const setCount = ({ count }) => ({
  type: "SET",
  count
});
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "RESET"
});
store.dispatch({
  type: "DECREMENT"
});
store.dispatch(setCount({ count: 55 }));
