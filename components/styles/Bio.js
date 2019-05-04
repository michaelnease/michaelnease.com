import styled from "styled-components";

export const About = styled.section`
  position: relative;
  background: url("/static/images/bio/bio.gif") no-repeat center center;
  background-size: cover;
  border-bottom: 10px solid ${props => props.theme.colors.black};
`;

export const AboutContent = styled.div`
  display: flex;
  height: 80rem;
  align-items: center;
  justify-content: center;
  border: 1px solid;
`;

export const Blurb = styled.div`
  width: 60rem;
  p {
    font-weight: 300;
    font-size: 1.7rem;
    margin-bottom: 20px;
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
