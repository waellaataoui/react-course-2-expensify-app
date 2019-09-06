import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";
export const ExpenseList = (props) => (
  <div className="list content-container">
    <div className="list__header">
      <p>Expense</p>
      <p> Amount</p>
    </div>
    {props.expenses.length === 0 ? (
      <p className="list__msg">No expenses</p>
    ) : (
      props.expenses.map((expense) => (
        <ExpenseListItem key={expense.id} expense={expense} />
      ))
    )}
  </div>
);
const mapSateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters)
});
export default connect(mapSateToProps)(ExpenseList);
