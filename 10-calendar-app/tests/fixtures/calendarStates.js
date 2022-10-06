export const events = [
  {
    id: 1,
    start: new Date('2018-01-01T00:00:00'),
    end: new Date('2018-01-01T01:00:00'),
    title: 'Event 1',
    notes: 'Notes 1',
  },
  {
    id: 2,
    start: new Date('2018-01-02T00:00:00'),
    end: new Date('2018-01-02T01:00:00'),
    title: 'Event 1',
    notes: 'Notes 1',
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};
export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
