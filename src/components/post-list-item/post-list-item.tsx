import React from 'react';
/* import { ILabel } from '../../interfaces'; */
import './post-list-item.css';

type TodoListItem = {
  label: string;
  important: boolean;
  liked: boolean;
  onDelete(): void;
  onImportant(): void;
  onLiked(): void;
};

const PostListItem: React.FC<TodoListItem> = ({ label, important, liked, onDelete, onLiked, onImportant }) => {
  let classNames = 'app-list-item d-flex justify-content-between';
  if (important) {
    classNames += ' important';
  }

  if (liked) {
    classNames += ' like';
  }
  return (
    <div className={classNames}>
      <span className="app-list-item-label" onClick={onLiked}>
        {label}
      </span>

      <div className="d-flex item-buttons">
        <button className="btn-star btn-sm" onClick={onImportant}>
          <i className="fa fa-star" />
        </button>
        <button className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fa fa-trash-o" />
        </button>
        <i className="fa fa-heart" />
      </div>
    </div>
  );
};

export default PostListItem;
