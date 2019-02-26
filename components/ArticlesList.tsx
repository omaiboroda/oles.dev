import React from 'react';
import ArticleCard from './ArticleCard';
import article from '../Articles/InContextEditor/metadata';

const articles = [article];

const ArticlesList = () => {
  return articles.map(a => <ArticleCard article={a} />);
};

export default ArticlesList;
