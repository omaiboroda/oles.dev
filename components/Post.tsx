import React, { Component } from 'react';
import Head from 'next/head';
import { H1 } from './Typography';
import { Box } from './system';

class Post extends Component {
  render() {
    const { slug } = this.props;
    const metadata = require(`../posts/${slug}/metadata.js`);
    const Post = require(`../posts/${slug}/post.md`);

    return (
      <>
        <Head>
          <title>
{metadata.default.title}
{' '}
- Oles Maiboroda
</title>
        </Head>
        <Box pb={2}>
          <H1 textAlign="center">{metadata.default.title}</H1>
          <Post.default />
        </Box>
      </>
    );
  }
}

export default Post;
