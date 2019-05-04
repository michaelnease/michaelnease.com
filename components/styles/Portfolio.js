import styled from "styled-components";
import Image from "../Image";

export const Selected = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Work = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 80rem;
  margin: 10rem 0;
`;

export const PortfolioImage = styled(Image)`
  grid-column: span ${props => props.span};
  border: 2px solid ${props => props.theme.colors.black};
  box-shadow: ${props => props.theme.effects.bs};
`;
