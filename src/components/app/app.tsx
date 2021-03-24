import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import { ILabel } from '../../interfaces';

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
      { label: 'Going to learn Laravel', important: true, id: 'ad' },
      { label: 'Going to learn React', important: true, id: 'ac' },
      { label: 'Going to learn PHP', important: false, id: 'ab' },
      { label: 'Going to learn Typescript', important: false, id: 'aa' },
    ];
    setTodos(saved);
  }, []);
  return (
    <StyledAppBlock>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList todos={todos} />
      <PostAddForm />
    </StyledAppBlock>
  );
};

export default App;
