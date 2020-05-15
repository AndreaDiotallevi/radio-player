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

  test("renders the stream's name", () => {
    const wrapper = shallow(<App />);
    const name = findByTestAttr(wrapper, "stream-name");
    expect(name.length).toEqual(1);
  });

  test("renders the stream button list", () => {
    const wrapper = shallow(<App />);
    const list = findByTestAttr(wrapper, "stream-button-list");
    expect(list.length).toEqual(1);
  });
});
