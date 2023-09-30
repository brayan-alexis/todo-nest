import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./ModalForm.css";

function ModalForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todo">New To-do</label>
      <textarea
        type="text"
        id="todo"
        name="todo"
        placeholder="Enter your new to-do here"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="form-buttonContainer">
        <button
          type="button"
          className="form-button form-button--cancel"
          onClick={() => setOpenModal((prevState) => !prevState)}
        >
          Cancel
        </button>
        <button type="submit" className="form-button form-button--add">
          Add
        </button>
      </div>
    </form>
  );
}

export { ModalForm as TodoForm };