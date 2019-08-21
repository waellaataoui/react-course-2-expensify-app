import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//ADD_Expense
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});
// removeExpense
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
//editExpence
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
//expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expence) => {
        if (expence.id === action.id) {
          return {
            ...expence,
            ...action.updates
          };
        } else {
          return expence;
        }
      });
    default:
      return state;
  }
};
//edit filter text
const settTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
//sort by amoynt & date
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
// set start date and end date
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
});
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate
});
//filters reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const textTest = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const startTest = startDate ? expense.createdAt >= startDate : true;
      const endTest = endDate ? expense.createdAt <= endDate : true;
      return textTest && startTest && endTest;
    })
    .sort((a, b) => {
      if (sortBy === "amount") return b.amount - a.amount;
      else return b.createdAt - a.createdAt;
    });
};
// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 5000, createdAt: 500 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 2000, createdAt: 1000 })
);
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//filter disp
// store.dispatch(settTextFilter("coffee"));
// store.dispatch(settTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
//store.dispatch(setStartDate("125"));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1258));
const demostate = {
  expenses: [
    {
      id: "gfddh",
      description: "january rent",
      note: "this was the final payment",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
