import React from "react";
import "./logo.css";
const img = "/assets/Logo Centro Odontol√≥gicoFelipe Erira.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={img} alt="Logo" />
    </div>
  );
};

export default Logo;
