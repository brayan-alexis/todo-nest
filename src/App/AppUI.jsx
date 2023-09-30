import React from "react";
import { TodoContext } from "../components/TodoContext/TodoContext";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { LoadingTodos } from "../components/LoadingTodos/LoadingTodos";
import { TodosError } from "../components/TodosError/TodosError";
import { EmptyTodos } from "../components/EmptyTodos/EmptyTodos";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoForm } from "../components/ModalForm/ModalForm";
import { Modal } from "../components/Modal/Modal";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    // setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <PageTitle />
      {/* <TodoCounter /> */}
      <TodoSearch />

      <TodoList>
        {loading ? (
          <div className="TodoLoading">
            <LoadingTodos /> <LoadingTodos /> <LoadingTodos />
          </div>
        ) : null}
        {error ? <TodosError /> : null}
        {!loading && !searchedTodos.length ? <EmptyTodos /> : null}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };
