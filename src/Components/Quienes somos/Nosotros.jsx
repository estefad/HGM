import React from "react";
import NosotrosImage from "../../images/image2.jpg";
import Medicion from "../../images/medicion.jpg";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <div className="nosotros-container">
        <img
          src={NosotrosImage}
          alt="Descripción de la imagen"
          className="nosotros-image"
        />
        <div className="nosotros-text">
          <h2>SEGURIDAD INDUSTRIAL</h2>
          <p>
            Implementación de la política de la organización, tendiente a
            determinar, promover y mantener adecuadas condiciones ambientales en
            los lugares de trabajo. Mantención, y permanente actualización de
            los registros sobre las acciones ejecutadas, con el objetivo de
            cumplir con dichos estándares.
          </p>
          <p>
            Aplicación de la Res. 905/2015 en cuanto a las funciones del
            Servicio de Higiene y Seguridad en el Trabajo, y de trabajo conjunto
            con el Servicio de Medicina Laboral. Llevándose a cabo una
            planificación de prevención a fin de detectar factores de riesgos
            inherentes de cada puesto de trabajo que puedan ocasionar daño o
            alguna enfermedad profesional al trabajador (Listado de enfermedades
            Profesionales Decreto 658/96 Anexo I, y/o Decreto 49/2014).
          </p>
          <p>
            Análisis, y evaluación de riesgos por puesto de trabajo con el
            objetivo de confeccionar un Mapa de Riesgo.
          </p>
          <p>
            Plan de Capacitación Anual según los temas mínimos requeridos por la
            legislación vigente, y de los inherentes propios de la actividad
            para la prevención de sus riesgos derivados.
          </p>
          <p>
            Presentaciones ante la ART en cuanto al Relevamiento General de
            Riesgos Laborales (RGRL), y el Relevamiento de Agentes de Riesgo
            (RAR). (Resolución SRT N°463/09 -Anexo II, clausula 5°, ítem 1.b. -
            Resolución SRT N°37/2010, Art. 3°, inciso 5).
          </p>
          <p>
            Seguimiento en cuanto al cumplimiento de la normativa vigente de
            Higiene y Seguridad en el Trabajo, y de Medio Ambiente, evaluando y
            proponiendo las medidas preventivas y/o correctivas adecuadas que
            pueda adoptar la organización a fin de mitigar factores de riesgos
            que expongan al personal.
          </p>
          <p>
            Control documentario de empresas contratadas Nómina de Trabajadores,
            Póliza de Seguro de Vida, Póliza de ART y Formulario 931 con
            Declaración Jurada, presentación y pago, Aviso de Obra y el Programa
            de Seguridad, Póliza y comprobante de pago del seguro del Automóvil,
            Verificación Técnica Vehicular (VTV), Seguro Tecnico en Maquinarias,
            etc.
          </p>
          <p>
            Sistemas de Gestión de Seguridad y Salud en el Trabajo para
            certificar Norma ISO 45.001.
          </p>
        </div>
        {/* <img
          src={Medicion}
          alt="Descripción de la imagen"
          className="nosotros-image"
        /> */}
      </div>
      <div className="nosotros-container2">
        <div className="nosotros-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un equipo dedicado a ofrecer los mejores servicios. Nuestra
            misión es proporcionar soluciones efectivas y de alta calidad a
            nuestros clientes. Contamos con un equipo de expertos en diversas
            áreas, listos para ayudarte en lo que necesites.
          </p>
        </div>
        <img
          src={NosotrosImage}
          alt="Descripción de la imagen"
          className="nosotros-image"
        />
      </div>
      <div className="nosotros-container3">
        <img
          src={NosotrosImage}
          alt="Descripción de la imagen"
          className="nosotros-image"
        />
        <div className="nosotros-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un equipo dedicado a ofrecer los mejores servicios. Nuestra
            misión es proporcionar soluciones efectivas y de alta calidad a
            nuestros clientes. Contamos con un equipo de expertos en diversas
            áreas, listos para ayudarte en lo que necesites.
          </p>
        </div>
        <img
          src={Medicion}
          alt="Descripción de la imagen"
          className="nosotros-image"
        />
      </div>
      <div className="nosotros-container4">
        <div className="nosotros-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos un equipo dedicado a ofrecer los mejores servicios. Nuestra
            misión es proporcionar soluciones efectivas y de alta calidad a
            nuestros clientes. Contamos con un equipo de expertos en diversas
            áreas, listos para ayudarte en lo que necesites.
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

export default Nosotros;
