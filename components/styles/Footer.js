import styled from "styled-components";

export const Foot = styled.footer`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10rem;
  p {
    color: ${props => props.theme.colors.gray};
  }
`;
