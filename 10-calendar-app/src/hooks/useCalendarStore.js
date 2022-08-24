import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import {
  onAddNewEvent,
  onDelenteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }
      const { data } = await calendarApi.post("/events", calendarEvent);
      dispatch(
        onAddNewEvent({
          ...calendarEvent,
          id: data.event.id,
          user,
        })
      );
    } catch (error) {
      Swal.fire(
        "Error al actualizar el evento!",
        error.response.data?.msg,
        "error"
      );
    }
  };
  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDelenteEvent());
    } catch (error) {
      Swal.fire(
        "Error al eliminar el evento!",
        error.response.data?.msg,
        "error"
      );
    }
  };
  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const events = convertEventsToDateEvents(data.events);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    startLoadingEvents,
  };
};
