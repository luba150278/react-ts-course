import React from 'react';
import './post-add-form.css';

const PostAddForm: React.FC = () => (
  <form className="bottom-panel d-flex">
    <input type="text" placeholder="What do you think now?" className="form-control new-post-label" />
    <button className="btn btn-outline-secondary">Add post</button>
  </form>
);

export default PostAddForm;
