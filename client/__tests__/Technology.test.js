import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render } from "react-testing-library";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "../components/styles/theme";
import Technology from "../components/Technology";

configure({ adapter: new Adapter() });

describe("<Technology />", () => {
  const wrapper = shallow(<Technology />);

  it("Should render 12 <ListItem /> elements", () => {
    expect(wrapper.find("ListItem").length).toBe(12);
  });

  it("Should render <ListItem /> elements", () => {
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(0)
        .prop("name")
    ).toBe("React");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(1)
        .prop("name")
    ).toBe("Redux");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(2)
        .prop("name")
    ).toBe("Javascript");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(3)
        .prop("name")
    ).toBe("CSS");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(4)
        .prop("name")
    ).toBe("HTML");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(5)
        .prop("name")
    ).toBe("Node");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(6)
        .prop("name")
    ).toBe("Express");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(7)
        .prop("name")
    ).toBe("MongoDB");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(8)
        .prop("name")
    ).toBe("Docker");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(9)
        .prop("name")
    ).toBe("Git");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(10)
        .prop("name")
    ).toBe("Ruby");
    expect(
      wrapper
        .find("FrameworkList")
        .childAt(11)
        .prop("name")
    ).toBe("AWS");
  });

  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Technology />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
