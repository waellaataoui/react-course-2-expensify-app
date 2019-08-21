//edit filter text
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
//sort by amoynt & date
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
// set start date and end date
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
});
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate
});
