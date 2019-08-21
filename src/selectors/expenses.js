// get visible expenses
import moment from "moment";
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const textTest = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const startTest = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endTest = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      return textTest && startTest && endTest;
    })
    .sort((a, b) => {
      if (sortBy === "amount") return b.amount - a.amount;
      else return b.createdAt - a.createdAt;
    });
};
