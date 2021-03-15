import React from 'react';
import './post-list-item.css';

const PostListItem: React.FC = () => (
  <li className="app-list-item d-flex justify-content-between">
    <span className="app-list-item-label">Hello world!</span>

    <div className="d-flex item-buttons">
      <button className="btn-star btn-sm">
        <i className="fa fa-star" />
      </button>
      <button className="btn-trash btn-sm">
        <i className="fa fa-trash-o" />
      </button>
      <i className="fa fa-heart" />
    </div>
  </li>
);

export default PostListItem;
