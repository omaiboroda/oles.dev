import React from 'react';
import ArticleCard from './ArticleCard';
import article from '../Articles/InContextEditor/metadata';

const articles = [article, article];

const ArticlesList = () => {
  return (
    <div>
      {articles.map(a => (
        <ArticleCard article={a} />
      ))}
    </div>
  );
};

export default ArticlesList;
