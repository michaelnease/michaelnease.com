import { useReducer } from "react";
import SendMessageButton from "./Send-Message-Button";
import { Form, Inputs, Link } from "./styles";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
    data: {},
    isNameValid: false,
    isEmailValid: false,
    isMessageValid: false,
    isSendingMessage: false
  };

  const reducer = (state, action) => {
    const {
      name,
      email,
      message,
      data,
      isNameValid,
      isEmailValid,
      isMessageValid,
      isSendingMessage
    } = action;
    switch (action.type) {
      case "name":
        return { ...state, name, isNameValid };
      case "email":
        return { ...state, email, isEmailValid };
      case "message":
        return { ...state, message, isMessageValid };
      case "data":
        return { ...state, data };
      case "isSendingMessage":
        return { ...state, isSendingMessage };
      case "clearForm":
        return {
          ...state,
          name: "",
          email: "",
          message: "",
          isEmailValid: false,
          isMessageValid: false,
          isNameValid: false
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameInput = name => {
    const isNameValid = /^[a-zA-Z ]{2,45}$/.test(name);
    dispatch({ type: "name", name, isNameValid });
  };

  const handleEmailInput = email => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    dispatch({ type: "email", email, isEmailValid });
  };

  const handleMessageInput = message => {
    const isMessageValid = message.length > 5 ? true : false;
    dispatch({ type: "message", message, isMessageValid });
  };

  const handleSendMessage = async () => {
    dispatch({ type: "isSendingMessage", isSendingMessage: true });
    const payload = {
      name,
      email,
      message
    };

    fetch("/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "data", data });
        dispatch({ type: "isSendingMessage", isSendingMessage: false });
        dispatch({ type: "clearForm" });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: "clearForm" });
      });
  };

  const {
    name,
    email,
    message,
    isNameValid,
    isEmailValid,
    isMessageValid,
    isSendingMessage
  } = state;

  return (
    <Form>
      <Link name="contact" />
      <Inputs>
        <input
          type="text"
          maxLength="45"
          placeholder="Name"
          data-name="name"
          value={name}
          onChange={e => handleNameInput(e.target.value)}
        />
        <input
          type="email"
          maxLength="45"
          placeholder="Email"
          data-name="email"
          value={email}
          onChange={e => handleEmailInput(e.target.value)}
        />
        <textarea
          rows="8"
          cols="30"
          data-name="message"
          maxLength="400"
          placeholder="Message"
          value={message}
          onChange={e => handleMessageInput(e.target.value)}
        />
        <SendMessageButton
          text="Send Message"
          handleClick={handleSendMessage}
          disabled={
            !isNameValid || !isEmailValid || !isMessageValid || isSendingMessage
          }
          sending={isSendingMessage}
        />
      </Inputs>
    </Form>
  );
};

export default Contact;
