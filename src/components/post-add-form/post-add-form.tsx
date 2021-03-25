import React, { useState } from 'react';
import './post-add-form.css';

interface TodoFormProps {
  onAdd(title: string): void;
}

const PostAddForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>('');
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => setTitle(event.target.value);
  const keyPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  };
  const addItem = (): void => {
    props.onAdd(title);
    setTitle('');
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
      <button className="btn btn-outline-secondary" onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default PostAddForm;
