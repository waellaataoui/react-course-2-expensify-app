import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // this.props.editExpense(this.props.match.params.id, expense);
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push("/dashboard");
  };

  onClick = () => {
    this.props.startRemoveExpense(this.props.expense);
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <ExpenseForm onSubmit={this.onSubmit} expense={this.props.expense} />
        <div className="content-container">
          <button
            className="button buton--secondary"
            style={{ marginBottom: 1.6 + "rem" }}
            onClick={this.onClick}
          >
            Remove
          </button>
        </div>
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
  startEditExpense: (id, updates) => dispatch(startEditExpense(id, updates)),
  startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
