/* eslint-disable no-console */
import React, { useState } from 'react';
import './post-add-form.css';

interface TodoFormProps {
  onAdd(title: string): void;
}

const PostAddForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>('');
  function addIsNotEmty(): void {
    if (title !== '') {
      props.onAdd(title);
      setTitle('');
    }
  }
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      addIsNotEmty();
    }
  };
  const addItem = (): void => {
    addIsNotEmty();
  };

  return (
    <div className="bottom-panel d-flex">
      <input
        className="form-control new-post-label"
        onChange={changeHandler}
        value={title}
        type="text"
        id="title"
        placeholder="What do you think?"
        onKeyPress={keyPressHandler}
      />
      <button className="btn btn-outline-primary" onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default PostAddForm;
