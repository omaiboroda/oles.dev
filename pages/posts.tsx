import React from 'react';
import { withRouter } from 'next/router';
import Header from '../components/Header';
import Container from '../components/Container';
import Post from '../components/Post';
import Layout from '../components/Layout';

class Posts extends React.Component {
  static async getInitialProps({ query }) {
    return { slug: query.slug };
  }

  render = () => (
    <Layout>
      <Container>
        <Header />
        <Post slug={this.props.slug} />
      </Container>
    </Layout>
  );
}

export default withRouter(Posts);