import { Form } from "./styles";

const Contact = () => {
  return (
    <Form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea name="message" rows="10" cols="30" placeholder="Message" />
      <button>Send Message</button>
    </Form>
  );
};

export default Contact;
