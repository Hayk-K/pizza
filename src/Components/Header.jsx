import React from "react";
import { Link } from "react-router-dom";
import pizzaLogo from "../assets/img/pizza-logo.svg";
import Basket from "./Basket";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>Tashir Pizza</h1>
            </div>
          </div>
        </Link>
        <Link to="/cart">
          <Basket className="button button--cart" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
