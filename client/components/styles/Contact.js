import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  position: relative;
  align-content: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.darkGray};
  border-bottom: 10px solid ${props => props.theme.colors.black};
  padding: 3rem;
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 121.5rem;
  grid-gap: 1.5rem;

  input,
  textarea {
    border: none;
    background-color: ${props => props.theme.colors.gray};
    padding-left: 3rem;
    font-size: 1.5rem;
    box-shadow: ${props => props.theme.effects.bs};
  }

  input {
    height: 7.4rem;
  }

  textarea {
    padding: 3rem;
    grid-column: span 2;
  }

  @media (max-width: 700px) {
    input,
    textarea {
      grid-column: span 2;
    }
  }
`;

//7.4 + 1.5 + 7.4 + 1.5
