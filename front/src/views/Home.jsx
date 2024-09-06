import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Bienvenidos al Hospital XYZ</h1>
        <p>Proporcionando cuidados de salud de calidad desde 1990</p>
      </header>
      <section className={styles.infoSection}>
        <div className={styles.card}>
          <img
            src="https://th.bing.com/th/id/OIP.jOYHNJzvK3XP7-dPHbqETQHaE8?w=298&h=198&c=7&r=0&o=5&pid=1.7"
            alt="Pacientes"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h2>Pacientes</h2>
            <p>Registrarse y gestionar sus citas de manera fácil y rápida.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://th.bing.com/th/id/OIP.NX_AUoEXHfzgIaXxjiZGewHaE8?w=288&h=192&c=7&r=0&o=5&pid=1.7"
            alt="Doctores"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h2>Doctores</h2>
            <p>Información sobre nuestro equipo médico altamente calificado.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="https://th.bing.com/th/id/OIP.yATWBuIe65g00Mbd2c_R5gHaE8?w=272&h=187&c=7&r=0&o=5&pid=1.7"
            alt="Citas"
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h2>Citas</h2>
            <p>Agendar, modificar o cancelar citas en línea.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
