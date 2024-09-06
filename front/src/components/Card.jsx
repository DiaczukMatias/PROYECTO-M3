import { useDispatch } from "react-redux";
import axios from "axios";
import styles from "./AppointmentCard.module.css";
import { setAppointments } from "../store/slices/appointmentsSlice";

const Card = ({ userId, id, date, time, status }) => {
  const dispatch = useDispatch();

  const handleCancel = async () => {
    try {
      const appointmentDate = new Date(date);
      const today = new Date();

      today.setHours(0, 0, 0, 0);
      appointmentDate.setHours(0, 0, 0, 0);

      if (appointmentDate.getTime() === today.getTime()) {
        alert("No se puede cancelar el turno para hoy.");
        return;
      }
      await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      const response = await axios.get(`http://localhost:3000/users/${userId}`);
      dispatch(setAppointments(response.data.appointments));
      alert("Turno cancelado exitosamente");
    } catch (error) {
      console.error("Error cancelling appointment:", error);
      alert(
        "Ocurrió un error al cancelar el turno. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Turno ID: {id}</h2>
      <p className={styles.text}>Fecha: {date}</p>
      <p className={styles.text}>Hora: {time}</p>
      <p className={`${styles.text} ${styles.status} ${styles[status]}`}>
        Estado: {status === "active" ? "Activo" : "Cancelado"}
      </p>
      {status === "active" && (
        <button className={styles.cancelButton} onClick={handleCancel}>
          Cancelar Turno
        </button>
      )}
    </div>
  );
};

export default Card;
