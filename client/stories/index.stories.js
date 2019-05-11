import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/styles/Global-Styles";
import { theme } from "../components/styles/theme";
import Header from "../components/Header";

storiesOf("Header", module).add("Header Story", () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <Header />
    </div>
  </ThemeProvider>
));

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
