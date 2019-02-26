import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Flex } from './system';
import { H2 } from './Typography';
import media from '../helpers/media';

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  filter: grayscale();
  margin-right: 20px;
  ${media.desktop`
    width: 160px;
    height: 160px;
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

const ArticleCard = ({ article }: Article) => {
  return (
    <div>
      <Flex>
        <Thumbnail src={article.thumbnailUrl} />
        <div>
          <H2 m={0}>{article.title}</H2>
          <p>{article.abstract}</p>
          <Link as={`/article/${article.slug}`}>Read more</Link>
        </div>
      </Flex>
    </div>
  );
};

export default ArticleCard;
