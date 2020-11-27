import React from "react";
import { shallow, mount } from "enzyme";
import Home from "../Home";
import toJson from "enzyme-to-json";
describe("<Home />", () => {
  it("Renders without crashing", () => {
    shallow(<Home />);
  });

  it("Renders correctly", () => {
    const component = shallow(<Home />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it("Verify the text", () => {
    const component = shallow(<Home />);
    expect(component.contains("Hi there Arun")).toEqual(true);
  });

  it("Renders check parent", () => {
    const component = mount(<Home />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
