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
  ${media.tablet`
    display: block;
    width: 160px;
    height: 160px;
    min-width: 160px;
    min-height: 160px;
  `}
`;

interface Article {
  id: string;
  slug: string;
  thumbnailUrl: string;
  title: string;
  abstract: string;
  url: string;
}

const UnstyledLink = styled.a`
  text-decoration: none;
`;

const PostLink = ({ article, children, ...props }) => (
  <Link as={`/article/${article.slug}`} {...props}>
    {children}
  </Link>
);

const ArticleCard = ({ article }: Article) => {
  return (
    <Flex mb={4}>
      <PostLink article={article} passHref>
        <a>
          <Thumbnail src={article.thumbnailUrl} />
        </a>
      </PostLink>
      <div>
        <PostLink article={article} passHref>
          <UnstyledLink>
            <H2 m={0}>{article.title}</H2>
          </UnstyledLink>
        </PostLink>
        <p>{article.abstract}</p>
        <PostLink article={article}>Read more</PostLink>
      </div>
    </Flex>
  );
};

export default ArticleCard;
