import React from 'react';
import PostCard from './PostCard';
import postList from '../posts';

const posts = [];
postList.forEach(p => {
  posts.push(require(`../posts/${p}/metadata.js`).default);
});

const PostsList = () => {
  return (
    <div>
      {posts.map(p => (
        <PostCard post={p} />
      ))}
    </div>
  );
};

export default PostsList;
