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
    const data = [
      { label: 'Going to learn Laravel', important: true, like: true, id: 'ad' },
      { label: 'Going to learn React', important: true, like: true, id: 'ac' },
      { label: 'Going to learn PHP', important: false, like: true, id: 'ab' },
      { label: 'Going to learn Typescript', important: false, like: true, id: 'aa' },
    ] as ILabel[];
    setTodos(data);
  }, []);
  const [term, setTerm] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

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
      like: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const changeItem = (id: string, field: boolean, prev: ILabel[]): ILabel[] => {
    const index = prev.findIndex((elem) => elem.id === id);
    const old = prev[index];
    const newItem = field ? { ...old, important: !old.important } : { ...old, like: !old.like };
    const newArr = [...prev.slice(0, index), newItem, ...prev.slice(index + 1)];
    return newArr;
  };

  const toggleImportant = (id: string): void => {
    setTodos((prev) => changeItem(id, true, prev));
  };

  const toggleLiked = (id: string): void => {
    setTodos((prev) => changeItem(id, false, prev));
  };

  const liked = todos.filter((item) => item.like).length;
  const allPosts = todos.length;
  const searchPost = (items: ILabel[], searchText: string): ILabel[] => {
    if (searchText.length === 0) {
      return items;
    }

    return items.filter((item) => item.label.indexOf(searchText) > -1);
  };

  const updateSearch = (title: string): void => {
    setTerm(title);
  };

  const filterPost = (items: ILabel[], filterText: string): ILabel[] => {
    if (filterText === 'like') {
      return items.filter((item) => item.like);
    }
    return items;
  };

  const onFilterSelect = (title: string): void => {
    setFilter(title);
  };

  const visiblePosts = filterPost(searchPost(todos, term), filter);
  // console.log(visiblePosts);
  return (
    <StyledAppBlock>
      <AppHeader liked={liked} allPosts={allPosts} />
      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearch={updateSearch} />
        <PostStatusFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <PostList todos={visiblePosts} onDelete={deletItem} onImportant={toggleImportant} onLiked={toggleLiked} />
      <PostAddForm onAdd={addItem} />
    </StyledAppBlock>
  );
};

export default App;
