import React from "react";
import NosotrosImage from "../../images/image2.jpg";
import "./Construccion.css";

const Construccion = () => {
  return (
    <>
      <div className="nosotros-container2">
        <div className="nosotros-text">
          <h2>SEGURIDAD EN CONSTRUCCION</h2>
          <p>
            Confección de programa de seguridad acorde a lo establecido en el
            artículo 6º del Anexo del Decreto Reglamentario Nº911/96..
          </p>
          <p>
            En base al cronograma de tareas a ejecutar, y en un trabajo conjunto
            con Jefatura de Obra se hace la planificación de las tareas
            contemplando las condiciones in situ, y de las situaciones que se
            puedan llegar a dar en cuanto a la exposición del trabajador frente
            a los considerados riesgos.
          </p>
          <p>
            Determinación de los elementos de protección personal, y/o de
            protección colectiva adecuados para cada tipo de trabajo a
            desempeñar.
          </p>
          <p>
            Realización de capacitaciones dirigida a mandos altos, medios, y
            personal operativo en cuanto a riesgos inherentes de cada puesto de
            trabajo con el objetivo de concientizar al personal, y de formar una
            cultura preventiva.
          </p>
          <p>
            Realización de asignación segura de trabajo (ATS) , y charla previa
            de 5min en cuanto a medidas preventivas a adoptar.
          </p>
          <p>
            Inspección en los distintos frentes de trabajo priorizando tareas de
            índole crítica tales como movimiento de izajes cargas suspendidas,
            trabajos en altura, tareas sobre estructuras de andamios, trabajos
            que expongan a terceros.
          </p>
          <p>
            Actualización constante del legajo técnico en cuanto Aviso de Obra,
            Programa de Seguridad, S.V.O, nómina del personal, control de
            programas 319/99 subcontratados.
          </p>
        </div>
        <img
          src={NosotrosImage}
          alt="Descripción de la imagen"
          className="nosotros-image"
        />
      </div>
    </>
  );
};

export default Construccion;
