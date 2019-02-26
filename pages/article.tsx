import React from 'react';
import { withRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Container from '../components/Container';
import Fonts from '../components/Fonts';
import Background from '../components/Background';
import './styles.css';
import Article from '../Articles/InContextEditor/article.md';

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
    greyDarkest: '#444444',
    greyDark: '#616161',
    grey: '#9E9E9E',
    greyLight: '#E0E0E0',
    greyLightest: '#F5F5F5'
  }
};

class Index extends React.Component {
  componentDidMount() {
    Fonts();
  }

  render = () => (
    <ThemeProvider theme={theme}>
      <Background>
        <Container>
          <Header />
          <Article />
        </Container>
      </Background>
    </ThemeProvider>
  );
}

export default withRouter(Index);
