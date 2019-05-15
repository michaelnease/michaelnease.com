import { useState } from "react";
import { Form, Inputs, Link } from "./styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <Form>
      <Link name="contact" />
      <Inputs>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="10"
          cols="30"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send Message</button>
      </Inputs>
    </Form>
  );
};

export default Contact;
