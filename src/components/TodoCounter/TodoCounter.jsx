import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos, loading } = React.useContext(TodoContext);

  if (loading) {
    // If the data is being loaded, show a loading message.
    return <h2 className="todo-counter">Loading your tasks...</h2>;
  }

  if (totalTodos === 0) {
    //  If there are no tasks, show a message.
    // return <h2 className="todo-counter">There are no todos. Create one!</h2>;
    return <h2 className="todo-counter"></h2>;
  }

  return completedTodos === totalTodos ? (
    <h2 className="todo-counter">You have completed all your tasks! 🎉</h2>
  ) : (
    <h2 className="todo-counter">
      You have completed <span>{completedTodos} </span>
      of <span>{totalTodos}</span> tasks!
    </h2>
  );
}

export { TodoCounter };
