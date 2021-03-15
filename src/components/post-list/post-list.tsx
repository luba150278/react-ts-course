import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const PostList: React.FC = () => (
  <div className="btn-group d-flex w-100">
    <ul className="app-list list-group w-100">
      <PostListItem label="Going to learn React" />
      <PostListItem label="Going to learn PHP" />
      <PostListItem label="Going to learn Typescript" />
    </ul>
  </div>
);

export default PostList;
