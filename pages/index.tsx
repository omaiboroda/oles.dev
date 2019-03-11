import React from 'react';
import Title from '../components/Title';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Container from '../components/Container';
import PostList from '../components/PostList';
import { Flex } from '../components/system';
import './styles.css';

class Index extends React.Component {
  render = () => (
    <Layout>
      <Container>
        <Header />
        <Title />
        <Flex flexDirection={['column', 'column', 'column', 'row']}>
          <Profile />
          <PostList />
        </Flex>
      </Container>
    </Layout>
  );
}

export default Index;
