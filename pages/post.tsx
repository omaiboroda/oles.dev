import React from 'react';
import { withRouter } from 'next/router';
import Header from '../components/Header';
import Container from '../components/Container';
import Post from '../components/Post';
import Layout from '../components/Layout';

class PostPage extends React.Component {
  render = () => (
    <Layout>
      <Container>
        <Header />
        <Post slug={this.props.router.query.title} />
      </Container>
    </Layout>
  );
}

export default withRouter(PostPage);
