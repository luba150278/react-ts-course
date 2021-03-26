import React from 'react';
import './search-panel.css';

type SearchProps = {
  onUpdateSearch(term: string): void;
};

const SearchPanel: React.FC<SearchProps> = (props) => {
  const XXX = (event: React.ChangeEvent<HTMLInputElement>): void => {
    props.onUpdateSearch(event.target.value);
    // setTitle('');
  };

  return <input type="text" placeholder="Search by items" className="form-control search-input" onChange={XXX} />;
};

export default SearchPanel;
