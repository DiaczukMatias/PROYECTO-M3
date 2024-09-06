import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import MisTurnos from "./views/MisTurnos";
import CreateAppointment from "./views/CreateAppointment";
import Register from "./views/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mis-turnos" element={<MisTurnos />} />
      <Route path="/crear-turno" element={<CreateAppointment />} />
    </Routes>
  );
}

export default App;
