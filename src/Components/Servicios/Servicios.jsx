import React from 'react'
import data from './DataServicios.js'
import './servicios.css'

const Servicios = () => {
  return (
      <>
      <h2 className='titulo-servicios'>NUESTROS SERVICIOS</h2>
    <div className='servicios'>
          {
              data.map((data) =>{
                  return <div className='card'>
                      <img src={data.img} alt={data.alt}/>
                      <h3>{data.title}</h3>
                  </div>
              })
          }

        
    </div>
    </>
  )
}

export default Servicios