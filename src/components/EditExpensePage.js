import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";
export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // this.props.editExpense(this.props.match.params.id, expense);
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onClick = () => {
    this.props.removeExpense(this.props.expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(
    (expense) => expense.id === props.match.params.id
  )
});
const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, updates) => dispatch(editExpense(id, updates)),
  removeExpense: (expense) => dispatch(removeExpense(expense))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
