import { Component } from "react";
import { ThemeProvider } from "styled-components";
import ReactGA from "react-ga";
import Meta from "./Meta";
import GlobalStyles from "./styles/Global-Styles";
import { theme } from "./styles/theme";

const DEFAULT_CONFIG = {
  trackingId: "UA-5643379-1",
  debug: false,
  gaOptions: {
    cookieDomain: "none"
  }
};

export class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Meta />
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
