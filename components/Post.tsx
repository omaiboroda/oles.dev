import React from 'react';
import Head from 'next/head';
import { H1 } from './Typography';
import { Box } from './system';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import 'github-markdown-css';
import styled from 'styled-components';

const PostContainer = styled(Box)`
  font-family: Merriweather;
`;

const Post = ({ slug }: { slug: string }) => {
  const metadata = require(`../posts/${slug}/metadata.js`);
  const Post = require(`../posts/${slug}/post.md`);

  return (
    <>
      <Head>
        <title>{metadata.default.title} - Oles Maiboroda</title>
      </Head>
      <PostContainer pb={2} className="markdown-body">
        <H1 textAlign="center">{metadata.default.title}</H1>
        <ReactMarkdown source={Post.default} renderers={{ code: CodeBlock }} />
      </PostContainer>
    </>
  );
};

export default Post;
