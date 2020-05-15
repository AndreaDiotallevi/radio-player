import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("App", () => {
  test("renders without errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });

  test("renders the stream's image", () => {
    const wrapper = shallow(<App />);
    const img = findByTestAttr(wrapper, "stream-image");
    expect(img.length).toEqual(1);
  });
});
