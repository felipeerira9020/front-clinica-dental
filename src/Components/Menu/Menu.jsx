import React from "react";
import BotonReturn from "../BontonReturn/BotonReturn";
import Logo from "../Logo/Logo";
import "./menu.css";

const Menu = () => {
  return (
    <div className="odont-cont">
      <Logo />
      <div className="cont-return">
        <BotonReturn />
      </div>
    </div>
  );
};

export default Menu;


