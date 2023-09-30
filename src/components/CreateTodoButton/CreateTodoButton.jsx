import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  
  return (
    <button 
      className='CreateTodoButton fas fa-plus'
      // onClick={() => setOpenModal(prevState => !prevState)}
      onClick={() => setOpenModal(true)}
    ></button>
  );
}

export { CreateTodoButton };