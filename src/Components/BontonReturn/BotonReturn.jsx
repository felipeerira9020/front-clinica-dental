import React from 'react'
import { useNavigate } from 'react-router-dom';
import './botonreturn.css'
const img = 'https://www.hospitaluvrocio.es/wp-content/uploads/2020/05/Volver-boton.png'


const BotonReturn = () => {
    const navigate = useNavigate();
    //en el usenavigate puedo colocar la ruta donde vuelve ''/marvel o colocar menos 1 y vuelve a la pagina anterior
    const handleReturn = () => {
      return navigate('/');
    };
  return (
      <div className='btn-volver'>
    <button onClick={handleReturn}><img src={img} alt='Volver'/></button>
    </div>
  )
}

export default BotonReturn