import styled from "styled-components";

export const Tech = styled.section`
  position: relative;
  background: url("/static/images/technology/technology.gif") no-repeat center
    center;
  background-size: cover;
  border-bottom: 10px solid ${props => props.theme.colors.black};
`;

export const List = styled.div`
  display: flex;
  height: 48rem;
  align-items: center;
  justify-content: center;
`;
