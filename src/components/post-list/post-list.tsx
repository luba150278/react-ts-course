import React from 'react';
import { ListGroup } from 'reactstrap';
import { ILabel } from '../../interfaces';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css';

type TodoListProps = {
  todos: ILabel[];
};

const PostList: React.FC<TodoListProps> = ({ todos }) => {
  const elements = todos.map((item: ILabel) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem {...itemProps} />
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
