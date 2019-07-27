import React from 'react';
import { withRouter } from 'next/router';
import Header from '../components/Header';
import Container from '../components/Container';
import Post from '../components/Post';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

interface PostsInterface {
  slug: string;
}

class Posts extends React.Component<PostsInterface> {
  static async getInitialProps({ query }) {
    return { slug: query.slug };
  }

  render = () => (
    <Layout>
      <Container narrow>
        <Header />
        <Post slug={this.props.slug} />
        <Footer />
      </Container>
    </Layout>
  );
}

export default withRouter(Posts);
