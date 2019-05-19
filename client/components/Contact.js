import { useState, useReducer } from "react";
import SendMessageButton from "./Send-Message-Button";
import { Form, Inputs, Link } from "./styles";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
    nameIsValid: false,
    emailIsValid: false,
    messageIsValid: false,
    isSendingMessage: false
  };

  const [content, setContent] = useState("");

  const reducer = (state, action) => {
    const {
      name,
      email,
      message,
      nameIsValid,
      emailIsValid,
      messageIsValid
    } = action;
    switch (action.type) {
      case "name":
        return { ...state, name, nameIsValid };
      case "email":
        return { ...state, email, emailIsValid };
      case "message":
        return { ...state, message, messageIsValid };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameInput = name => {
    const nameIsValid = /^[a-zA-Z ]{2,45}$/.test(name);
    dispatch({ type: "name", name, nameIsValid });
  };

  const handleEmailInput = email => {
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    dispatch({ type: "email", email, emailIsValid });
  };

  const handleMessageInput = message => {
    const messageIsValid = message.length > 5 ? true : false;
    dispatch({ type: "message", message, messageIsValid });
  };

  const handleSendMessage = async () => {
    const payload = {
      name,
      email,
      message
    };

    const res = await fetch("/contact", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).json();

    setContent(res);
  };

  const {
    name,
    email,
    message,
    nameIsValid,
    emailIsValid,
    messageIsValid,
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
          value={name}
          onChange={e => handleNameInput(e.target.value)}
        />
        <input
          type="email"
          maxLength="45"
          placeholder="Email"
          value={email}
          onChange={e => handleEmailInput(e.target.value)}
        />
        <textarea
          name="message"
          rows="8"
          cols="30"
          maxLength="400"
          placeholder="Message"
          value={message}
          onChange={e => handleMessageInput(e.target.value)}
        />
        <SendMessageButton
          text="Send Message"
          handleClick={handleSendMessage}
          disabled={!nameIsValid || !emailIsValid || !messageIsValid}
          sending={isSendingMessage}
        />
      </Inputs>
    </Form>
  );
};

export default Contact;
