import styled from "styled-components";

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  height: ${props => props.theme.bar.height};
  padding: 0 5%;
  width: 100%;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.effects.bs};
`;

export const Invader = styled.h1`
  width: 52px;
  height: 39px;
  background: url("../static/images/header/invaders-nav.svg");
  text-indent: -9999px;
  overflow: hidden;
  transition: background-position 0.3s;
  background-position: ${props => {
    switch (props.invader) {
      case "crab":
        return "0 0";
      case "antenna":
        return "0 -40px";
      case "legs":
        return "0 -80px";
      case "octopus":
        return "0 -120px";
      default:
        return "0 0";
    }
  }};
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    margin: 0 10px;
    text-transform: uppercase;
  }
  a {
    color: white;
  }
`;
