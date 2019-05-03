import styled, { keyframes } from "styled-components";

export const Quotes = styled.section`
  background-color: gray;
  position: relative;
  height: 100vh;
  background: url("/static/images/quotes/quotes.gif") no-repeat center center;
  background-size: cover;
  min-height: 6.2rem;
  border-bottom: 10px solid ${props => props.theme.colors.black};
`;

export const Cites = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);
  width: 50rem;
  height: 25rem;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Quote = styled.blockquote`
  background-color: ${props => props.theme.colors.white};
  margin: 0 0 ${props => props.theme.spacing.margin} 0;
  padding: ${props => props.theme.spacing.padding};
  box-shadow: ${props => props.theme.effects.bs};
  q {
    font-size: 1.4rem;
  }
`;

export const Cite = styled.cite`
  display: block;
  font-weight: bold;
  text-align: right;
  font-size: 1.4rem;
  margin-top: 1.5rem;
`;

const move = keyframes`
  from {
    top: -500px;
  }
  to {
    top: 0;
  }
`;

export const Dropdown = styled.div`
  box-shadow: ${props => props.theme.effects.bs};
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%);
  width: 124px;
  height: 210px;
  background: url("/static/images/header/mocmennemcom.svg") no-repeat center
    center;
  animation: ${move} 0.5s ease-in 1.5s 1 normal both running;
`;
