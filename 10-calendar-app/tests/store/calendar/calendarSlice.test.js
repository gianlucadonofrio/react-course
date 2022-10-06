import {
  calendarSlice,
  onAddNewEvent,
  onDelenteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from '../../../src/store/calendar/calendarSlice';
import {
  calendarWithActiveEventState,
  calendarWithEventsState,
  events,
  initialState,
} from '../../fixtures/calendarStates';

describe('Pruebas en el calendarSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    const state = calendarSlice.getInitialState();
    expect(state).toEqual(initialState);
  });

  test('onSetActiveEvent debe de activar el evento', () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );
    expect(state.activeEvent).toEqual(events[0]);
  });

  test('onAddNewEvent debe de agregar un nuevo evento', () => {
    const newEvent = {
      id: 3,
      start: new Date('2018-01-03T00:00:00'),
      end: new Date('2018-01-03T01:00:00'),
      title: 'Event 3',
      notes: 'Notes 3',
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );
    expect(state.events).toEqual([...events, newEvent]);
  });

  test('onUpdateEvent debe de actualizar un evento', () => {
    const updatedEvent = {
      id: 2,
      start: new Date('2018-01-02T00:00:00'),
      end: new Date('2018-01-02T01:00:00'),
      title: 'Event 2 updated',
      notes: 'Notes 2 updated',
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updatedEvent)
    );
    expect(state.events).toContain(updatedEvent);
  });

  test('onDelenteEvent debe de eliminar el evento activo', () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDelenteEvent()
    );
    expect(state.activeEvent).toBeNull();
    expect(state.events).not.toContain(events[0]);
  });

  test('onLoadEvents debe de cargar los eventos', () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));
    expect(state.events).toEqual(events);
    expect(state.isLoadingEvents).toBe(false);
  });

  test('onLogoutCalendar debe de limpiar el state', () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onLogoutCalendar()
    );
    expect(state).toEqual(initialState);
  });
});
