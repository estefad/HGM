import React from 'react'
import NosotrosImage from '../../images/image2.jpg'
import Medicion from '../../images/medicion.jpg'
import './Nosotros.css'

const Nosotros = () => {
  return (
    <>
    <div className="nosotros-container">
      <img src={NosotrosImage} alt="Descripción de la imagen" className="nosotros-image" />
      <div className="nosotros-text">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos un equipo dedicado a ofrecer los mejores servicios. Nuestra misión es proporcionar soluciones efectivas y de alta calidad a nuestros clientes. 
          Contamos con un equipo de expertos en diversas áreas, listos para ayudarte en lo que necesites.
        </p>
      </div>
      <img src={Medicion} alt="Descripción de la imagen" className="nosotros-image" />
    </div>
    <div className="nosotros-container">
      <div className="nosotros-text">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos un equipo dedicado a ofrecer los mejores servicios. Nuestra misión es proporcionar soluciones efectivas y de alta calidad a nuestros clientes. 
          Contamos con un equipo de expertos en diversas áreas, listos para ayudarte en lo que necesites.
        </p>
      </div>
      <img src={NosotrosImage} alt="Descripción de la imagen" className="nosotros-image" />
    </div>
    </>
    
  )
}

export default Nosotros
