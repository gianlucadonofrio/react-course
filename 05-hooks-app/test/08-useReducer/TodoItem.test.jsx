import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Hacer la compra",
    done: false,
  };
  const onToggleTodo = jest.fn();
  const onDeleteTodo = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de mostrar el todo pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );
    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });
  test("debe de mostrar el todo completado", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span debe de llamar el ToggleTodo al hacer click", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodo).toHaveBeenCalledWith(todo.id);
  });
  test("debe de llamar al deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
      />
    );
    const buttonElement = screen.getByLabelText("deleteButton");
    fireEvent.click(buttonElement);
    expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
  });
});
