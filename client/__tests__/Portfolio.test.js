import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render } from "react-testing-library";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "../components/styles/theme";
import Portfolio from "../components/Portfolio";

configure({ adapter: new Adapter() });

describe("<Portfolio />", () => {
  const wrapper = shallow(<Portfolio />);

  it("Should render one <Work /> element", () => {
    expect(wrapper.find("Work").length).toBe(1);
  });

  it("Should render 7 <PortfolioImage /> elements", () => {
    expect(wrapper.find("PortfolioImage").length).toBe(9);
  });

  it("Should render <Work /> elements", () => {
    expect(
      wrapper
        .find("Work")
        .childAt(0)
        .prop("src")
    ).toBe("beyond-limits.gif");
    expect(
      wrapper
        .find("Work")
        .childAt(1)
        .prop("src")
    ).toBe("rentcom.gif");
    expect(
      wrapper
        .find("Work")
        .childAt(2)
        .prop("src")
    ).toBe("drumoff2011.jpg");
    expect(
      wrapper
        .find("Work")
        .childAt(3)
        .prop("src")
    ).toBe("drumoff2010.jpg");
    expect(
      wrapper
        .find("Work")
        .childAt(4)
        .prop("src")
    ).toBe("sessions.jpg");
    expect(
      wrapper
        .find("Work")
        .childAt(5)
        .prop("src")
    ).toBe("platinum-home.jpg");
    expect(
      wrapper
        .find("Work")
        .childAt(6)
        .prop("src")
    ).toBe("platinum-pdp.jpg");
    expect(
      wrapper
        .find("Work")
        .childAt(7)
        .prop("src")
    ).toBe("onlyincalifornia.jpg");
    expect(
      wrapper
        .find("Work")
        .childAt(8)
        .prop("src")
    ).toBe("powerlevelreview.jpg");
  });

  it("Should render <Work /> elements", () => {
    expect(
      wrapper
        .find("Work")
        .childAt(0)
        .prop("span")
    ).toBe(1);
    expect(
      wrapper
        .find("Work")
        .childAt(1)
        .prop("span")
    ).toBe(1);
    expect(
      wrapper
        .find("Work")
        .childAt(2)
        .prop("span")
    ).toBe(2);
    expect(
      wrapper
        .find("Work")
        .childAt(3)
        .prop("span")
    ).toBe(2);
    expect(
      wrapper
        .find("Work")
        .childAt(4)
        .prop("span")
    ).toBe(2);
    expect(
      wrapper
        .find("Work")
        .childAt(5)
        .prop("span")
    ).toBe(1);
  });

  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Portfolio />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
