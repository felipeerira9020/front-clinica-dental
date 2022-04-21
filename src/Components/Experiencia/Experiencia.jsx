import React from "react";
import DataExperiencia from "./DataExperiencia.js";
import "./experiencia.css";

const Experiencia = () => {
  return (
    <div className="contenedor-exp">
      <h2 className="titulo-servicios">CENTRO INTEGRAL FELIPE ERIRA</h2>
      <div className="experiencia">
        {DataExperiencia.map((data) => {
          return (
            <div className="card-exp">
              <img src={data.img} alt={data.alt} />
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiencia;
