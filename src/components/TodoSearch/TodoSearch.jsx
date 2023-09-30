import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <div className='todo-search-container'>
      <div className='search-input'>
        <input
          type="text"
          placeholder="Search your todos..."
          className='todo-search'
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <div className='search-icon'>
          <i className='fas fa-search'></i>
        </div>
      </div>
    </div>
  );
}

export { TodoSearch };
