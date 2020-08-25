import React, { Component } from "react";
import PropTypes from "prop-types";

export const CartContext = React.createContext();

const storageKey = "cartItems";
const data = localStorage.getItem(storageKey);
let item;

if (data) {
  item = JSON.parse(data);
} else {
  item = [];
}

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: item,
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    localStorage.setItem(
      storageKey,
      JSON.stringify(this.state.cartItems.concat(product))
    );
    this.setState({
      cartItems: JSON.parse(localStorage.getItem(storageKey)),
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

CartProvider.propTypes = {
  children: PropTypes.object,
};
