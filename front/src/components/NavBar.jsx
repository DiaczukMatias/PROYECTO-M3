import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6374/6374098.png"
          alt="Logo"
          className={styles.logoImage}
        />
        <span className={styles.logoText}>HOSPITAL XYZ</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <Link to="/mis-turnos">Mis Turnos</Link>
            </li>
            <li>
              <Link to="/crear-turno">Crear turno</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
