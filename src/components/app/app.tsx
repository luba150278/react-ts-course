/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import { ILabel } from '../../interfaces';

declare let confirm: (question: string) => boolean;

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 20px;
  border-radius: 4px;
`;

const StyledAppBlock = styled(AppBlock)`
  background: #e8eaf6;
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<ILabel[]>([]);
  useEffect(() => {
    const saved = [
      { label: 'Going to learn Laravel', important: true, liked: true, id: 'ad' },
      { label: 'Going to learn React', important: true, liked: true, id: 'ac' },
      { label: 'Going to learn PHP', important: false, liked: true, id: 'ab' },
      { label: 'Going to learn Typescript', important: false, liked: true, id: 'aa' },
    ] as ILabel[];
    setTodos(saved);
  }, []);

  const deletItem = (id: string): void => {
    const shoudRemove = confirm('Are you sure to delete this item?');
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const addItem = (label: string): void => {
    const newTodo: ILabel = {
      label,
      id: String(Date.now()),
      important: false,
      liked: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };
  const toggleImportant = (id: string): void => {
    setTodos((prev) => {
      const index = prev.findIndex((elem) => elem.id === id);
      const old = prev[index];
      const newItem = { ...old, important: !old.important };
      const newArr = [...prev.slice(0, index), newItem, ...prev.slice(index + 1)];
      return newArr;
    });
  };

  const toggleLiked = (id: string): void => {
    setTodos((prev) => {
      const index = prev.findIndex((elem) => elem.id === id);
      const old = prev[index];
      const newItem = { ...old, liked: !old.liked };
      const newArr = [...prev.slice(0, index), newItem, ...prev.slice(index + 1)];
      return newArr;
    });
  };

  return (
    <StyledAppBlock>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList todos={todos} onDelete={deletItem} onImportant={toggleImportant} onLiked={toggleLiked} />
      <PostAddForm onAdd={addItem} />
    </StyledAppBlock>
  );
};

export default App;
