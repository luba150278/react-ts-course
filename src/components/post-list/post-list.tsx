import React from 'react';
import { ILabel } from '../../interfaces';
import PostListItem from '../post-list-item/post-list-item';

const PostList: React.FC = () => {
  const data: ILabel[] = [
    { label: 'Going to learn React', important: true },
    { label: 'Going to learn PHP', important: false },
    { label: 'Going to learn Typescript', important: false },
  ];
  const elements = data.map((item: ILabel) => (
    <li className="list-group-item">
      <PostListItem label={item.label} important={item.important} />
    </li>
  ));
  return (
    <div className="btn-group d-flex w-100">
      <ul className="app-list list-group w-100">{elements}</ul>
    </div>
  );
};

export default PostList;
