import React, { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css';
import { ILabel } from '../../interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ILabel[]>([]);
  useEffect(() => {
    const saved = [
      { label: 'Going to learn React', important: true },
      { label: 'Going to learn PHP', important: false },
      { label: 'Going to learn Typescript', important: false },
    ];
    setTodos(saved);
  }, []);
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList todos={todos} />
      <PostAddForm />
    </div>
  );
};

export default App;
