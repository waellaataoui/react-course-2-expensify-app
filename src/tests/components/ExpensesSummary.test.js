import React from "react";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { shallow } from "enzyme";

test("should render expenses summary with expenses correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={3} expensesTotal={39140} />
  );
  expect(wrapper).toMatchSnapshot();
});
test("should render expenses summary with 1 expense correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={2000} />
  );
  expect(wrapper).toMatchSnapshot();
});
