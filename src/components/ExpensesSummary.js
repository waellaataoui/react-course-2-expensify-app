import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import getExpensesTotal from "../selectors/expenses-total";
export const ExpensesSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        Viewing <span>{props.expenseCount}</span>{" "}
        {props.expenseCount === 1 ? "expense" : "expenses"} totalling{" "}
        <span> {numeral(props.expensesTotal / 100).format("$0,0.00")}</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Add Expense
        </Link>
      </div>
    </div>
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
