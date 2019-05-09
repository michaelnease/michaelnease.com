import { useState } from "react";
import { Form, Inputs } from "./styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("message: ", message);
  };

  return (
    <Form>
      <a name="contact" />
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
