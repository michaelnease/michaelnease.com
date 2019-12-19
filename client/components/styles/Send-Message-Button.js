import styled from "styled-components";

export const SendMessageWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 1.5rem;
`;

export const ReCaptcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
  width: 315px;
  padding: 0;
  margin: 0;
`;

export const SendMessage = styled.button`
  font-size: 1.5rem;
  box-sizing: content-box;
  height: 71px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.gray};
  box-shadow: ${props => props.theme.effects.bs};

  &:disabled,
  &[disabled] {
    background-color: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.darkGray};
  }
  &:active {
    background-color: ${props => props.theme.colors.darkGray};
    color: ${props => props.theme.colors.black};
  }
`;
