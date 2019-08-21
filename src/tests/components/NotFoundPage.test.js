import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage.js";
test("should rebder not found page correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
