import styled from "styled-components";
import Item from "../Item";
import List from "../List";

export const TechnologyStyled = styled.section`
  position: relative;
  background: url("/static/images/technology/technology.gif") no-repeat center
    center;
  background-size: cover;
  border-bottom: 10px solid ${props => props.theme.colors.black};
`;

export const FrameworkList = styled(List)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48rem;

  & > div {
    width: 70rem;
    height: 40rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

    @media (max-width: 700px) {
      width: 30rem;
    }
  }
`;

export const ListItem = styled(Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.black};
  box-shadow: ${props => props.theme.effects.bs};
  & span {
    color: ${props => props.theme.colors.white};
  }
`;
