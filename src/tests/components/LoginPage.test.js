import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";
test("should render login page without errors", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});
test("should call start login on button click ", () => {
  const startLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLoginSpy}></LoginPage>);
  wrapper.find("button").simulate("click");
  expect(startLoginSpy).toHaveBeenCalled();
});
