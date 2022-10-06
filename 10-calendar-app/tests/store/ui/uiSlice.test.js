import {
  onCloseDateModal,
  onOpenDateModal,
  uiSlice,
} from '../../../src/store/ui/uiSlice';

describe('Pruebas en el uiSlice', () => {
  test('debe de tener los valores por defecto', () => {
    expect(uiSlice.getInitialState.isDateModalOpen).toBeFalsy();
  });

  test('debe de abrir y cerrar el modal', () => {
    let state = uiSlice.getInitialState();
    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state.isDateModalOpen).toBeTruthy();

    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
