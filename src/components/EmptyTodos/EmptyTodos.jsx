import React from 'react';
import './EmptyTodos.css';

function EmptyTodos() {
  return (
    <div className="TodoEmpty">
      <p className="TodoEmpty__p">There are no todos. Create one! 😃</p>
    </div>
  );
}

export { EmptyTodos };