import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <h1>
          Add ExpenseForm
          <ExpenseForm onSubmit={this.onSubmit} />
        </h1>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});
export default connect(
  undefined,
  mapDispatchToProps
)(AddExpensePage);
