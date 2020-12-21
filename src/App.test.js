import MatchMediaMock from "jest-matchmedia-mock";
import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

let matchMedia;

describe("Your testing module", () => {
  beforeAll(() => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("App renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
