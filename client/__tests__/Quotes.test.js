import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render } from "react-testing-library";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "../components/styles/theme";
import Quotes from "../components/Quotes";

configure({ adapter: new Adapter() });

describe("<Quotes />", () => {
  const wrapper = shallow(<Quotes />);

  it("Should render <Dropdown /> element", () => {
    expect(wrapper.find("Dropdown").length).toBe(1);
  });

  it("Should render <Texture /> element", () => {
    expect(wrapper.find("Texture").length).toBe(1);
  });

  it("Should render 3 <ul /> elements", () => {
    expect(wrapper.find("ul li").length).toBe(3);
  });

  it("Should render a <ul /> elements", () => {
    expect(
      wrapper
        .find("ul")
        .childAt(0)
        .text()
    ).toBe(
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in.Edsger Dijkstra"
    );
    expect(
      wrapper
        .find("ul")
        .childAt(1)
        .text()
    ).toBe(
      "The best performance improvement is the transition from the nonworking state to the working state.J. Osterhout"
    );
    expect(
      wrapper
        .find("ul")
        .childAt(2)
        .text()
    ).toBe(
      "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.Steve Jobs"
    );
  });

  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Quotes />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
