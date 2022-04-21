import React from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import Logo from '../Logo/Logo'
import './nabvar.css'


const handleLogout = () => {
 
  Swal.fire({
    title: 'Desea Cerrar sesión?',
    icon: 'error',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Vuelve Pronto',
        ' ',
        'success'
      )
      localStorage.removeItem("jwt")
           window.location.reload()
    }
  })
};
const Navbar = () => {

  return (
    <div className='contenedor-nabvar'>
   <Logo/>
      <div className='link-inicio'>
      <Link to='/odontologos'>Administración Odontologos</Link>
     <button onClick={handleLogout}>X</button>

      </div>
    </div>
  )
}

export default Navbar