import authReducer from "../../reducers/auth";
test("should setup default auth values", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});
test("should set uid on login", () => {
  const uid = "abc123";
  const state = authReducer(undefined, { type: "LOGIN", uid });
  expect(state).toEqual({ uid });
});
test("should remove uid on logout", () => {
  const state = authReducer(undefined, { type: "LOGOUT" });
  expect(state).toEqual({});
});
