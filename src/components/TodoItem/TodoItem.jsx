import React from 'react';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='todo-item'>
      <i className={`icon icon-check fas fa-check ${completed && "icon-check--active"}`}
        onClick={onComplete}>
      </i>
      <p className={`task ${completed && "task--completed"}`}>{text}</p>
      <i className="icon icon-delete fa fa-trash" aria-hidden="true"
        onClick={onDelete}>
      </i>
    </li>
  );
}

export { TodoItem };