import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const PostList: React.FC = () => (
  <div className="btn-group d-flex w-100">
    <ul className="app-list list-group w-100">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  </div>
);

export default PostList;
