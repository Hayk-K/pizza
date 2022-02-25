import React from "react";
import pizzaLogo from "../assets/img/pizza-logo.svg";
import Basket from "./Basket";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={pizzaLogo} alt="Pizza logo" />
          <div>
            <h1>Tashir Pizza</h1>
          </div>
        </div>
        <Basket className="button button--cart"/>
      </div>
    </div>
  );
};

export default Header;
