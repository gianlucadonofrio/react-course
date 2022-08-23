import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en el <todoReducer/>", () => {
  const initialState = [
    {
      id: 1,
      description: "Hacer la compra",
      done: false,
    },
  ];

  test("debe de retornar el estado inical", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe de agregar un nuevo todo", () => {
    const action = {
      type: "ADD_TODO",
      payload: {
        id: 2,
        description: "Nuevo todo",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe de eliminar un todo", () => {
    const action = {
      type: "DELETE_TODO",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });
  test("debe de modificar el toggle de un todo", () => {
    const action = {
      type: "TOGGLE_TODO",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
