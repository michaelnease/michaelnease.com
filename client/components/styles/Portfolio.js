import styled from "styled-components";
import Image from "../Image";

export const PortfolioStyled = styled.section`
  position: relative;
  border-bottom: 10px solid ${props => props.theme.colors.black};
`;

export const Work = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 80rem;
  margin: 10rem 0;
  @media (max-width: 700px) {
    padding: 0 1rem;
  }
`;

export const PortfolioImage = styled(Image)`
  grid-column: span ${props => props.span};
  border: 2px solid ${props => props.theme.colors.black};
  box-shadow: ${props => props.theme.effects.bs};
`;
