import React from "react";
import { SendMessage } from "./styles";

const SendMessageButton = ({ handleClick, text, disabled }) => {
  return (
    <SendMessage handleClick={handleClick} disabled={disabled}>
      {text}
    </SendMessage>
  );
};

export default SendMessageButton;
