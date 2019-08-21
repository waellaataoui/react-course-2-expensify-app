import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
test("should render expense form correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});
test("should render expense form with expense data coorectly", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
test("should render error for invalid submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});
test("should set description on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value: "new description" }
    });
  expect(wrapper.state("description")).toBe("new description");
});
test("should set note on textarea change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value: "new note" }
  });
  expect(wrapper.state("note")).toBe("new note");
});
test("should set amount on input change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: "5.33" }
    });
  expect(wrapper.state("amount")).toBe("5.33");
});
test("should not set amount if changed value is not valid ", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value: "25.123" }
    });
  expect(wrapper.state("amount")).toBe("");
});
test("should call onSubmit proop for valid submisson ", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", { preventDefault: () => {} });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt
  });
});
test("should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});
test("should set calendar focus on change", () => {
  const focused = false;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find(SingleDatePicker).prop("onFocusChange")({ focused });
  expect(wrapper.state("calendarFocused")).toBe(focused);
});
