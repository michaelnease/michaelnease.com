import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import Layout from "../components/Layout";

import * as gtag from "../lib/gtag";

Router.events.on("routeChangeComplete", url => gtag.pageview(url));

class MichaelNease extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MichaelNease;
