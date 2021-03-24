import React from 'react';
import { ILabel } from '../../interfaces';
import PostListItem from '../post-list-item/post-list-item';

type TodoListProps = {
  todos: ILabel[];
};

const PostList: React.FC<TodoListProps> = ({ todos }) => {
  const elements = todos.map((item: ILabel) => (
    <li className="list-group-item">
      <PostListItem {...item} />
    </li>
  ));
  return (
    <div className="btn-group d-flex w-100">
      <ul className="app-list list-group w-100">{elements}</ul>
    </div>
  );
};

export default PostList;
