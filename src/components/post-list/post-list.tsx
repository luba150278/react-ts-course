/* eslint-disable no-console */
import React from 'react';
import { ListGroup } from 'reactstrap';
import { ILabel } from '../../interfaces';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

type TodoListProps = {
  todos: ILabel[];
  onDelete(id: string): void;
};

const PostList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  const elements = todos.map((item: ILabel) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps} onDelete={(): void => onDelete(id)} />
      </li>
    );
  });
  return (
    <div className="btn-group d-flex w-100">
      <ListGroup className="app-list w-100">{elements}</ListGroup>
    </div>
  );
};

export default PostList;
