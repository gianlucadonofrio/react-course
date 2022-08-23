import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvents = {
  _id: new Date().getTime(),
  title: "Cumpleaños Flopi",
  notes: "Hay que regarlarle comida!!",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Gianluca",
  },
};
export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvents],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.events = state.events.map((event) => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    onDelenteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event._id !== state.activeEvent._id
        );
        state.activeEvent = null;
      }
    },
  },
});
export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDelenteEvent,
} = calendarSlice.actions;
