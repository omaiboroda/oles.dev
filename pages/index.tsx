import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Container from '../components/Container';
import Fonts from '../components/Fonts';
import Background from '../components/Background';
import ArticlesList from '../components/ArticlesList';
import { Flex } from '../components/system';
import './styles.css';

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
          <Flex flexDirection={['column', 'column', 'column', 'row']}>
            <Profile />
            <ArticlesList />
          </Flex>
        </Container>
      </Background>
    </ThemeProvider>
  );
}

export default Index;
