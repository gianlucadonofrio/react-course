import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useCalendarStore } from "../../hooks/useCalendarStore";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres eliminar el evento?",
      showCancelButton: true,
      confirmButtonText: "SI!",
      denyButtonText: `NO!`,
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingEvent();
      }
    });
  };
  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{
        display: hasEventSelected && !isDateModalOpen ? "" : "none",
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
