import React from 'react';
import './post-status-filter.css';

const PostStatusFilter: React.FC = () => (
  <div className="btn-group">
    <button className="btn btn-info">All</button>
    <button className="btn btn-outline-secondary">Liked</button>
  </div>
);

export default PostStatusFilter;
