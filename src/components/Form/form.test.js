import MatchMediaMock from "jest-matchmedia-mock";
import React from "react";
import renderer from "react-test-renderer";
import data from "../../data/data.json";
import DynamicForm from "./DynamicForm";

let matchMedia;

describe("Dynamic form", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("should accept data and build dynamic form", () => {
    const component = renderer.create(<DynamicForm data={data} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
