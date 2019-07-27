import React from 'react';
import Head from 'next/head';
import { H1 } from './Typography';
import { Box } from './system';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from './CodeBlock';
import 'github-markdown-css';
import styled from 'styled-components';

const PostContainer = styled(Box)`
  line-height: 2;
  font-family: Merriweather;
  figcaption {
    color: ${p => p.theme.colors.greyDark};
    text-align: center;
    font-size: ${p => p.theme.fontSizes[1]}px;
    margin: -10px 0 10px;
  }
  img {
    display: block;
  }
`;

const Post = ({ slug }: { slug: string }) => {
  const metadata = require(`../posts/${slug}/metadata.js`);
  const Post = require(`../posts/${slug}/post.md`);

  return (
    <>
      <Head>
        <title>{metadata.default.title} - Oles Maiboroda</title>
      </Head>
      <PostContainer pb={4} className="markdown-body">
        <H1 textAlign="center">{metadata.default.title}</H1>
        <ReactMarkdown escapeHtml={false} source={Post.default} renderers={{ code: CodeBlock }} />
      </PostContainer>
    </>
  );
};

export default Post;
