import React from "react";
import { shallow, mount } from "enzyme";
import Home from "../Home";
import Name from "../Name";
import toJson from "enzyme-to-json";
import declareJSON from "../declareJSON";

for (let i = 0; i < declareJSON.length; i++) {
  const Componentname = declareJSON[i].name;
  const expectTest = declareJSON[i].expect;
  describe(Componentname, () => {
    it("Renders without crashing", () => {
      shallow(<Componentname />);
    });

    it("Renders correctly", () => {
      const component = shallow(<Componentname />);
      expect(toJson(component)).toMatchSnapshot();
    });

    it("Verify the text", () => {
      const component = shallow(<Componentname />);
      expect(component.contains(expectTest));
    });

    it("Renders check parent", () => {
      const component = mount(<Componentname />);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
}
