import { Routes, Route, BrowserRouter } from "react-router-dom";
import Odontologo from "../Odontologo/Odontologo";
import Inicio from "../Inicio/Inicio";
import Login from '../Login/Login'

const AppRouter = () => {
  return (
      <>
    <BrowserRouter>
      <Routes>
     
        <Route path="/odontologos" element={<Odontologo/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Inicio/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default AppRouter;