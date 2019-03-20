import React, { Component } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Background from './Background';
import 'normalize.css';
import '../pages/styles.css';

const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0,
    5,
    10,
    20,
    40,
    80,
    120,
    240
  ],
  colors: {
    white: '#ffffff',
    black: '#000000',
    greyLightest: '#F5F5F5',
    greyLight: '#E0E0E0',
    grey: '#9E9E9E',
    greyDark: '#616161',
    greyDarkest: '#444444'
  }
};

class Layout extends Component {
  render() {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400" rel="stylesheet" />
          <meta
            name="google-site-verification"
            content="2XU6kHQPBdzNI3_oRD7yx4-4jWGeyrLc1h73EPEi3xM"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Background>{this.props.children}</Background>
        </ThemeProvider>
      </>
    );
  }
}

export default Layout;
