import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { render } from "react-testing-library";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";

import { theme } from "../components/styles/theme";
import Contact from "../components/Contact";

configure({ adapter: new Adapter() });

const updateInput = (wrapper, instance, value) => {
  const input = wrapper.find(instance);

  input.simulate("change", {
    target: { value: value }
  });

  return wrapper.find(instance);
};

describe("<Contact />", () => {
  const wrapper = shallow(<Contact />);

  it("Should allow users to fill out the <contact /> form", () => {
    const nameInput = updateInput(wrapper, '[data-name="name"]', "Michael");
    const emailInput = updateInput(
      wrapper,
      '[data-name="email"]',
      "michael@gmail.com"
    );
    const messageInput = updateInput(
      wrapper,
      '[data-name="message"]',
      "Hello, nice to meet you"
    );

    expect(wrapper.find("SendMessageButton").prop("disabled")).toBe(false);
    expect(nameInput.props().value).toBe("Michael");
    expect(emailInput.props().value).toBe("michael@gmail.com");
    expect(messageInput.props().value).toBe("Hello, nice to meet you");
  });

  it("Should disable submit button if email is not valid", () => {
    const nameInput = updateInput(wrapper, '[data-name="name"]', "Michael");
    const emailInput = updateInput(
      wrapper,
      '[data-name="email"]',
      "michael@gmail"
    );
    const messageInput = updateInput(
      wrapper,
      '[data-name="message"]',
      "Hello, nice to meet you"
    );

    expect(wrapper.find("SendMessageButton").prop("disabled")).toBe(true);
    expect(nameInput.props().value).toBe("Michael");
    expect(emailInput.props().value).toBe("michael@gmail");
    expect(messageInput.props().value).toBe("Hello, nice to meet you");
  });

  // it("Should send a message", () => {
  //   jest.spyOn(Contact, "handleSendMessage").mockImplementation(() =>
  //     Promise.resolve({
  //       data: {
  //         name: "Michael",
  //         email: "michael@gmail.com",
  //         message: "Hello, nice to meet you"
  //       }
  //     })
  //   );
  //   nameInput = updateInput(wrapper, '[data-name="name"]', "Michael");
  //   emailInput = updateInput(wrapper, '[data-name="email"]', "michael@gmail");
  //   messageInput = updateInput(
  //     wrapper,
  //     '[data-name="message"]',
  //     "Hello, nice to meet you"
  //   );

  //   expect(wrapper.find("Form")).simulate("submit", {
  //     preventDefault: () => {}
  //   });

  //   expect(instance.handleSendMessage()).toHaveBeenCalledWith(
  //     "Michael",
  //     "michael@gmail.com",
  //     "Hello, nice to meet you"
  //   );
  // });
  it("Should match Snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Contact />
      </ThemeProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
