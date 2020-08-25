import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Container } from "reactstrap";

import Header from "./components/Header";
import Products from "./pages/Products";
import { CartProvider } from "./context/Cart";

const Index = () => <h2>Home</h2>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Container className="App">
          <Header />
          <Route path="/" exact component={Index} />
          <Route path="/products/" exact component={Products} />
        </Container>
      </Router>
    </CartProvider>
  );
}
