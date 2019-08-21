import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import { shallow } from "enzyme";
import expenses from "../fixtures";

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});
test("should render AddExpnsePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
