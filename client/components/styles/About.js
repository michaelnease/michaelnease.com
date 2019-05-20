import styled from "styled-components";

export const AboutStyled = styled.section`
  height: 80rem;
  position: relative;
  background: url("/static/images/bio/bio.gif") no-repeat center center;
  background-size: cover;
  border-bottom: 10px solid ${props => props.theme.colors.black};
  @media (max-width: 700px) {
    height: 100rem;
  }
`;

export const Text = styled.div`
  width: 60rem;
  p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.7rem;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
    padding: 3rem;
  }
`;

export const Rex = styled.img`
  box-shadow: ${props => props.theme.effects.bs};
  border: 1px solid ${props => props.theme.effects.black};
  float: left;
  width: 20rem;
  margin: ${props => props.theme.spacing.margin};
  position: relative;
  top: 10px;
`;
