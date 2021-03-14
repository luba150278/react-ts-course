import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const PostList: React.FC = () => (
  <div className="btn-group">
    <ul className="app-list list-group">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  </div>
);

export default PostList;
