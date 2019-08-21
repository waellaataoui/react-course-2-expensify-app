import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures";
import { DateRangePicker } from "react-dates";
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});
test("should render ExpenseListFilters correctly ", () => {
  expect(wrapper).toMatchSnapshot();
});
test("should render ExpenseListFilters with altFilters correctly ", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});
test("should handle text change", () => {
  wrapper.find("input").simulate("change", {
    target: { value: "rent" }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith("rent");
});
test("should  sort by date", () => {
  wrapper.find("select").simulate("change", {
    target: { value: "date" }
  });
  expect(sortByDate).toHaveBeenCalled();
});
test("should  sort by amount", () => {
  wrapper.find("select").simulate("change", {
    target: { value: "amount" }
  });
  expect(sortByAmount).toHaveBeenCalled();
});
test("should handle dates change", () => {
  wrapper.find(DateRangePicker).prop("onDatesChange")({
    startDate: altFilters.startDate,
    endDate: altFilters.endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});
test("should handle date focus change", () => {
  const calandarFocus = "endDate";
  wrapper.find(DateRangePicker).prop("onFocusChange")(calandarFocus);
  expect(wrapper.state("calandarFocus")).toBe(calandarFocus);
});
