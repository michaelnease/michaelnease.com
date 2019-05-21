import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render } from "react-testing-library";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "../components/styles/theme";
import About from "../components/About";

configure({ adapter: new Adapter() });

describe("<About />", () => {
  const wrapper = shallow(<About />);
  const imagePath = "/static/images/bio/rex.jpg";

  it("Should render three <p /> elements", () => {
    expect(wrapper.find("p").length).toBe(3);
  });

  it("Should render one <Rex /> element", () => {
    expect(wrapper.find("Rex").length).toBe(1);
  });

  it("Should render <Rex /> with src", () => {
    expect(wrapper.find("Rex").prop("src")).toEqual(imagePath);
  });

  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
