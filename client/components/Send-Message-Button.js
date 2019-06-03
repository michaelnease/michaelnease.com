import React from "react";
import { SendMessage } from "./styles";

const SendMessageButton = ({ handleClick, text, disabled, sending }) => {
  return (
    <SendMessage onClick={handleClick} disabled={disabled} data-testid="send">
      {sending ? "Sending ... " : `${text}`}
    </SendMessage>
  );
};

export default SendMessageButton;
