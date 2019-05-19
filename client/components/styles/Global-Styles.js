import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/static/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('/static/fonts/Roboto-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }
  
  button { font-family: "Roboto", Arial, Helvetica, sans-serif; }

  button:focus {
    outline:0;
  }

  textarea:focus, input:focus{
    outline: none;
  }
`;

export default GlobalStyles;
