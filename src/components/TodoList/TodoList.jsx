import React from 'react';
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from '../TodoCounter/TodoCounter';
import './TodoList.css';

function TodoList({ children }) {
  const { totalTodos, completedTodos, loading } = React.useContext(TodoContext);
  


  return (
    <ul className='todo-list'>
      <TodoCounter />
        {children}
    </ul>
  );
}

export { TodoList };