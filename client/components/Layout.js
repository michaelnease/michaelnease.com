import { Component } from "react";
import { ThemeProvider } from "styled-components";
import Meta from "./Meta";
import GlobalStyles from "./styles/Global-Styles";
import { theme } from "./styles/theme";

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
