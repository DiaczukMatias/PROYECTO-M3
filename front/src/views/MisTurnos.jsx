// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Card from "../components/Card";
// import styles from "./MisTurnos.module.css";
// import axios from "axios";
// import { setAppointments } from "../store/slices/appointmentsSlice";

// const MisTurnos = () => {
//   const user = useSelector((state) => state.user.user);
//   const appointments = useSelector(
//     (state) => state.userAppointments.appointments
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/");
//       return;
//     }

//     axios
//       .get(`http://localhost:3000/users/${user.id}`)
//       .then((res) => dispatch(setAppointments(res.data.appointments)))
//       .catch((err) => console.error("Error fetching appointments:", err));
//   }, [user, dispatch, navigate]);

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.h1}>Mis Turnos</h2>
//       <div className={styles.cardsContainer}>
//         {appointments && appointments.length > 0 ? (
//           appointments.map((appointment) => (
//             <div className={styles.card} key={appointment.id}>
//               <Card
//                 userId={user.id}
//                 id={appointment.id}
//                 date={appointment.date}
//                 time={appointment.time}
//                 status={appointment.status}
//               />
//             </div>
//           ))
//         ) : (
//           <p className={styles.noAppointmentsMessage}>
//             Aún no hay turnos agendados para este usuario.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MisTurnos;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import styles from "./MisTurnos.module.css";
import axios from "axios";
import { setAppointments } from "../store/slices/appointmentsSlice";

const MisTurnos = () => {
  const user = useSelector((state) => state.user.user);
  const appointments = useSelector(
    (state) => state.userAppointments.appointments
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get(`https://mellifluous-granita-2fc2dc.netlify.app`)
      .then((res) => dispatch(setAppointments(res.data.appointments)))
      .catch((err) => console.error("Error fetching appointments:", err));
  }, [user, dispatch, navigate]);

  return (
    <div className={styles.container}>
      <h2 className={styles.h1}>Mis Turnos</h2>
      <div className={styles.cardsContainer}>
        {appointments && appointments.length > 0 ? (
          appointments.map((appointment) => (
            <div className={styles.card} key={appointment.id}>
              <Card
                userId={user.id}
                id={appointment.id}
                date={appointment.date}
                time={appointment.time}
                status={appointment.status}
              />
            </div>
          ))
        ) : (
          <p className={styles.noAppointmentsMessage}>
            Aún no hay turnos agendados para este usuario.
          </p>
        )}
      </div>
    </div>
  );
};

export default MisTurnos;

// http://localhost:3000/users/${user.id}
