import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./CreateAppointment.module.css";

const WORKING_HOURS = {
  start: "09:00",
  end: "17:00",
};

const isWeekend = (date) => {
  const day = new Date(date).getDay();
  return day === 5 || day === 6;
};

const isWithinWorkingHours = (time) => {
  return time >= WORKING_HOURS.start && time <= WORKING_HOURS.end;
};

const CreateAppointment = () => {
  const [formData, setFormData] = useState({ date: "", time: "" });
  const [error, setError] = useState("");
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { date, time } = formData;

    if (!date || !time) {
      setError("Por favor, complete todos los campos");
      return;
    }

    if (isWeekend(date)) {
      setError("No se pueden agendar turnos durante el fin de semana.");
      return;
    }

    if (!isWithinWorkingHours(time)) {
      setError("La hora seleccionada está fuera del horario de atención.");
      return;
    }

    try {
      await axios.post("https://mellifluous-granita-2fc2dc.netlify.app", {
        ...formData,
        userId: user.id,
      });
      alert("Turno creado exitosamente");
      navigate("/mis-turnos");
    } catch (error) {
      console.error("Error creating appointment:", error);
      alert(
        "Ocurrió un error al crear el turno. Por favor, inténtelo de nuevo más tarde."
      );
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Crear un Nuevo Turno</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={styles.inputField}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.submitButton}>
          Crear Turno
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;

// http://localhost:3000/appointments/schedule
