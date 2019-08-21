import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});
test("should setup edit expense action ojbect", () => {
  const action = editExpense("123abc", { description: "meal", amount: 10 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { description: "meal", amount: 10 }
  });
});
test("should setup add expense action object with provided values ", () => {
  const expenseData = {
    description: "Rent",
    amount: 1000,
    createdAt: 2000,
    note: "last rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) }
  });
});
test("should setup add expense action object with defaults", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
