import React, { useState, useEffect } from 'react';
import './post-status-filter.css';

type Button = {
  name: string;
  label: string;
};

type Buttons = {
  filter: string;
  onFilterSelect(name: string): void;
};

const PostStatusFilter: React.FC<Buttons> = ({ filter, onFilterSelect }) => {
  const [todos, setTodos] = useState<Button[]>([]);
  useEffect(() => {
    const data = [
      { name: 'all', label: 'All' },
      { name: 'like', label: 'Liked' },
    ] as Button[];
    setTodos(data);
  }, []);

  const buttons = todos.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button type="button" className={`btn ${clazz}`} key={name} onClick={(): void => onFilterSelect(name)}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default PostStatusFilter;
