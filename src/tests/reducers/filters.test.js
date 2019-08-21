import filtersReducer from "../../reducers/filters";
import moment from "moment";
test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});
test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});
test("should set sortBy to date", () => {
  const state = filtersReducer(
    {
      text: "",
      sortBy: "amount",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month")
    },
    { type: "SORT_BY_DATE" }
  );
  expect(state.sortBy).toBe("date");
});
test("should set the text filter", () => {
  expect(
    filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "rent" }).text
  ).toBe("rent");
});
test("should set the startDate filter", () => {
  expect(
    filtersReducer(undefined, { type: "SET_START_DATE", startDate: moment(0) })
      .startDate
  ).toEqual(moment(0));
});
test("should set the endDate filter", () => {
  expect(
    filtersReducer(undefined, { type: "SET_END_DATE", endDate: moment(0) })
      .endDate
  ).toEqual(moment(0));
});
