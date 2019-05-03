import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render } from "react-testing-library";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "../components/styles/theme";
import Header from "../components/Header";

configure({ adapter: new Adapter() });

describe("<Header />", () => {
  const wrapper = shallow(<Header />);

  it("Should render 1 <Invader /> element", () => {
    expect(wrapper.find("Invader").length).toBe(1);
  });

  it("Should render an <Invader /> with text: Michael Nease", () => {
    expect(wrapper.find("Invader").text()).toBe("Michael Nease");
  });

  it("Should render 4 <Navigation /> elements", () => {
    expect(wrapper.find("Navigation ul li").length).toBe(4);
  });

  it("Should render a <Navigation /> elements", () => {
    expect(
      wrapper
        .find("Navigation ul")
        .childAt(0)
        .text()
    ).toBe("About");
    expect(
      wrapper
        .find("Navigation ul")
        .childAt(1)
        .text()
    ).toBe("Skills");
    expect(
      wrapper
        .find("Navigation ul")
        .childAt(2)
        .text()
    ).toBe("Portfolio");
    expect(
      wrapper
        .find("Navigation ul")
        .childAt(3)
        .text()
    ).toBe("Contact");
  });

  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
