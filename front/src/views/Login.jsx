// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import styles from "./Login.module.css";
// import { setUser } from "../store/slices/userSlice";

// const Login = () => {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.username || !formData.password) {
//       alert("Por favor, complete todos los campos");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         dispatch(setUser(data.user));
//         alert("¡Inicio de sesión exitoso!");
//       } else {
//         alert("Inicio de sesión fallido. Por favor, inténtelo de nuevo.");
//       }
//     } catch (error) {
//       alert("Ocurrió un error. Por favor, inténtelo de nuevo más tarde.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className={styles.formContainer}>
//       <h1 className={styles.h1}>Inicia Sesion en tu cuenta</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="Nombre de usuario"
//         value={formData.username}
//         onChange={handleChange}
//         className={styles.inputField}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Contraseña"
//         value={formData.password}
//         onChange={handleChange}
//         className={styles.inputField}
//       />
//       <button
//         type="submit"
//         disabled={!formData.username || !formData.password}
//         className={styles.submitButton}
//       >
//         Iniciar sesión
//       </button>
//     </form>
//   );
// };

// export default Login;

import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import { setUser } from "../store/slices/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      alert("Por favor, complete todos los campos");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data.user));
        alert("¡Inicio de sesión exitoso!");
      } else {
        alert("Inicio de sesión fallido. Por favor, inténtelo de nuevo.");
      }
    } catch (error) {
      alert("Ocurrió un error. Por favor, inténtelo de nuevo más tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1 className={styles.h1}>Inicia Sesión en tu cuenta</h1>
      <input
        type="text"
        name="username"
        placeholder="Nombre de usuario"
        value={formData.username}
        onChange={handleChange}
        className={styles.inputField}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        className={styles.inputField}
      />
      <button
        type="submit"
        disabled={!formData.username || !formData.password}
        className={styles.submitButton}
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default Login;
