import React from "react";
import { SendMessage, SendMessageWrapper, ReCaptcha } from "./styles";

const SendMessageButton = ({ handleClick, text, disabled, sending }) => {
  return (
    <SendMessageWrapper>
      <div
        className="g-recaptcha"
        data-sitekey="6LdjqsgUAAAAAOYCCVDnZATGbPrgHcHSGKOjzmHe"
      ></div>

      <SendMessage onClick={handleClick} disabled={disabled} data-testid="send">
        {sending ? "Sending ... " : `${text}`}
      </SendMessage>
    </SendMessageWrapper>
  );
};

export default SendMessageButton;
