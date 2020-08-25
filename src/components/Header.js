import React from "react";
import "./Header.css";
import Logo from "../imgs/Logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={Logo} alt="" />
        </Link>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/products/" className="navbar__link">
              Products
            </Link>
          </li>
          <li className="navbar__item">
            <CartContext.Consumer>
              {({ cartItems }) => (
                <Link to="/cart/" className="navbar__link">
                  Cart ({cartItems.length})
                </Link>
              )}
            </CartContext.Consumer>
          </li>
        </ul>
      </nav>
    </header>
  );
}
