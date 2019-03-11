import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Flex, Box } from './system';
import { H2 } from './Typography';
import media from '../helpers/media';

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  filter: grayscale();
  margin-right: 20px;
  display: none;
  object-fit: cover;
  ${media.tablet`
    display: block;
    width: 150px;
    height: 150px;
    min-width: 150px;
    min-height: 150px;
  `}
`;

interface Post {
  id: string;
  slug: string;
  thumbnail: string;
  title: string;
  abstract: string;
  url: string;
}

const UnstyledLink = styled.a`
  text-decoration: none;
`;

const PostLink = ({ post, children, ...props }) => (
  <Link as={`/post/${post.slug}`} {...props}>
    {children}
  </Link>
);

const PostCard = ({ post }: Post) => {
  return (
    <Flex mb={4}>
      <PostLink post={post} passHref>
        <a>
          <Thumbnail src={post.thumbnail} />
        </a>
      </PostLink>
      <div>
        <PostLink post={post} passHref>
          <UnstyledLink>
            <H2 m={0}>{post.title}</H2>
          </UnstyledLink>
        </PostLink>
        <p>{post.abstract}</p>
        <PostLink post={post}>Read more</PostLink>
      </div>
    </Flex>
  );
};

export default PostCard;
