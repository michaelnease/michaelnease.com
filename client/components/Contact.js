import { useState, useReducer } from "react";
import { Form, Inputs, Link } from "./styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const initialState = {
    nameIsValid: false,
    emailIsValid: false,
    messageIsValid: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "nameIsValid":
        return { ...state, nameIsValid: action.valid };
      case "emailIsValid":
        return { ...state, emailIsValid: action.valid };
      case "messageIsValid":
        return { ...state, messageIsValid: action.valid };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNameInput = name => {
    setName(name);
    const valid = /^[a-zA-Z ]{2,45}$/.test(name);
    dispatch({ type: "nameIsValid", valid });
  };

  const handleEmailInput = email => {
    setEmail(email);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    dispatch({ type: "emailIsValid", valid });
  };

  const handleMessageInput = message => {
    setMessage(message);
    const valid = message.length > 5 ? true : false;
    dispatch({ type: "messageIsValid", valid });
  };

  const handleSendMessage = () => {
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
    });
  };

  const { nameIsValid, emailIsValid, messageIsValid } = state;

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
          rows="10"
          cols="30"
          maxLength="400"
          placeholder="Message"
          value={message}
          onChange={e => handleMessageInput(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          disabled={!nameIsValid || !emailIsValid || !messageIsValid}
        >
          Send Message
        </button>
      </Inputs>
    </Form>
  );
};

export default Contact;
