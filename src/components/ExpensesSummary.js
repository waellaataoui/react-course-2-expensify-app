import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
export const ExpensesSummary = (props) => (
  <div>
    <p>
      viewing {props.expenseCount}{" "}
      {props.expenseCount === 1 ? "expense" : "expenses"} totalling{" "}
      {numeral(props.expensesTotal / 100).format("$0,0.00")}
    </p>
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
