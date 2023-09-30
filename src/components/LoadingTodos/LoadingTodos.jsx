import React from 'react';
import './LoadingTodos.css';

function LoadingTodos() {
    return (
        <div className='todo-item-skeleton'>
          <div className='skeleton-icon'></div>
          <div className='skeleton-text'>‎ </div>
          <div className='skeleton-icon'></div>
        </div>
    );
  }

export { LoadingTodos };