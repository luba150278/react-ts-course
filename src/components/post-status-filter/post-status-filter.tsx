import React from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter: React.FC = () => (
  <div className="btn-group">
    <Button outline color="info">
      All
    </Button>

    <Button outline color="secondary">
      Liked
    </Button>
  </div>
);

export default PostStatusFilter;
