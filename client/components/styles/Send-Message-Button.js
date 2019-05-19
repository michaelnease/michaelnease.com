import styled from "styled-components";

export const SendMessage = styled.button`
  font-size: 1.5rem;
  grid-column: 2;
  height: 5rem;
  border: none;
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
