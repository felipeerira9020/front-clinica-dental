import React from 'react'
import Navbar from '../Nabvar/Navbar'
import DataCarousel from '../lib/DataCarousel'
import Servicios from '../Servicios/Servicios'
import Footer from '../Footer/Footer'
import Experiencia from '../Experiencia/Experiencia'

const Inicio = () => {
  return (
    <div>
   <Navbar/>
   <DataCarousel/>
   <Servicios/>
   <Experiencia/>
   <Footer/>
   </div>
  )
}

export default Inicio