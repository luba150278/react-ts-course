import React from 'react';
import { ILabel } from '../../interfaces';
import './post-list-item.css';

const PostListItem: React.FC<ILabel> = ({ label, important }) => {
  let classNames = 'app-list-item d-flex justify-content-between';
  if (important) classNames += ' important';
  return (
    <div className={classNames}>
      <span className="app-list-item-label">{label}</span>

      <div className="d-flex item-buttons">
        <button className="btn-star btn-sm">
          <i className="fa fa-star" />
        </button>
        <button className="btn-trash btn-sm">
          <i className="fa fa-trash-o" />
        </button>
        <i className="fa fa-heart" />
      </div>
    </div>
  );
};

export default PostListItem;
