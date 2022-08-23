import { useState } from "react";
import { useGetTodoByIdQuery } from "./store/apis";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todos - RKT Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "Cargando..," : "False"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
