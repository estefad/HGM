import React from 'react'
import NosotrosImage from "../../images/image2.jpg";
import './Ocupacional.css'

const Ocupacional = () => {
  return (
    <>
      <div className="nosotros-container">
        <img
          src={NosotrosImage}
          alt="Descripción de la imagen"
          className="nosotros-image"
        />
        <div className="nosotros-text">
          <h2>HIGIENE OCUPACIONAL</h2>
          <p>
            Medición y Estudio de Iluminación según Res. 84/12 Protocolo para la
            Medición en Ambiente Laboral a fin de evaluar los factores que
            determina el confort visual.
          </p>
          <p>
            Medición y Estudio de Ruido según Res. 85/12 Protocolo para la
            Medición en Ambiente Laboral a fin de evaluar la exposición a
            fuentes ruidosas.
          </p>
          <p>
            Medición y Estudio de Ruido según Norma IRAM 4062:2021 método para
            medir y calificar los niveles de ruido producidos por fuentes
            sonoras que trasciendan al vecindario y que puedan producir
            molestias.
          </p>
          <p>
            Aplicación de Res. 861/15 Protocolo de Medición de Contaminantes
            Químicos en el Aire de un Ambiente de Trabajo.
          </p>
          <p>
            Medición y Estudio de Carga Térmica bajo Res. 30/2023 en cuanto a la
            determinación del estrés térmico según las condiciones higrotermicas.
          </p>
          <p>
            Medición y Estudio de Ergonomía según Res. 886/15 en base al
            Programa de Ergonomía Integrado adaptado al tipo de organización por
            lo que se realiza la Identificación de Factores de Riesgos Ergonomicos.
          </p>
          <p>
            Extracción de muestra de Agua de Consumo basado en Norma IRAM 29012
            – Calidad del Agua que mediante el análisis efectuado se obtiene
            resultados Biológicos – Fisicoquímicos.
          </p>
          <p>
            Medición y Estudio de Vibraciones (Segmental) Mano-Brazo, y de
            Cuerpo Entero donde el método utilizado es en base a las siguientes
            normas IRAM 4078 e ISO 2631, y de acuerdo con lo establecido en la
            Res. 295/03 del MTEySS.
          </p>
          <p>
          Medición y Estudio de Ventilación Natural o Forzada mediante instrumento anemómetro a fin de determinar el caudal de aire que ingresa al local, y realizar una comparativa según la actividad sedentaria o moderada para cumplimentar con el caudal mínimo en metros cúbicos por hora y por persona
          </p>
        </div>
      </div>
    </>
  );
};

export default Ocupacional
