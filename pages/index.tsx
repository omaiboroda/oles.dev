import React from 'react';
import Head from 'next/head';
import Title from '../components/Title';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Container from '../components/Container';
import PostList from '../components/PostList';
import Footer from '../components/Footer';
import { Flex } from '../components/system';
import './styles.css';

class Index extends React.Component {
  render = () => (
    <>
      <Head>
        <title>Oles Maiboroda - Opinionated Frontend</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <Title />
          <Flex flexDirection={['column', 'column', 'column', 'row']}>
            <Profile />
            <PostList />
          </Flex>
          <Footer />
        </Container>
      </Layout>
    </>
  );
}

export default Index;
