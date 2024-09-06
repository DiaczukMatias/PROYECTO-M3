import { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: 0,
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.birthdate ||
      !formData.nDni ||
      !formData.username ||
      !formData.password
    ) {
      alert("Por favor, complete todos los campos");
      return;
    }

    const dataToSend = {
      ...formData,
      nDni: Number(formData.nDni),
    };

    try {
      const response = await axios.post(
        "https://mellifluous-granita-2fc2dc.netlify.app",
        dataToSend,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 201) {
        alert("¡Registro exitoso!");
      } else {
        alert("Registro fallido. Por favor, inténtelo de nuevo.");
      }
    } catch (error) {
      alert("Ocurrió un error. Por favor, inténtelo de nuevo más tarde.");
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h1 className={styles.h1}>Registro de Usuario</h1>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        className={styles.inputField}
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        className={styles.inputField}
      />

      <input
        type="text"
        name="birthdate"
        placeholder="Fecha de nacimiento"
        value={formData.birthdate}
        onChange={handleChange}
        className={styles.inputField}
      />

      <input
        type="number"
        name="nDni"
        placeholder="Número de DNI"
        value={formData.nDni}
        onChange={handleChange}
        className={styles.inputField}
      />

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
        disabled={
          !formData.name ||
          !formData.email ||
          !formData.birthdate ||
          !formData.nDni ||
          !formData.username ||
          !formData.password
        }
        className={styles.submitButton}
      >
        Registrarse
      </button>
    </form>
  );
};

export default Register;

// http://localhost:3000/users/register
