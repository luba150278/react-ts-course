import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';

const App: React.FC = () => (
  <div className="container">
    <AppHeader />
    <SearchPanel />
  </div>
);

export default App;
