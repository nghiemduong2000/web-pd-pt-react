import React, { Component } from "react";
import axios from "axios";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
  Spinner,
} from "reactstrap";

import { CartContext } from "../context/Cart";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://u5xz9.sse.codesandbox.io/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    const { products } = this.state;
    if (!products.length) {
      return <Spinner className="Spinner" color="secondary" />;
    }
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map((item, index) => (
            <Col sm="3 " key={index}>
              <Card>
                <CardImg top width="100%" src={item.imageUrl} alt="" />
                <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  <CardText>{item.description}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(item)}>
                        Add to cart
                      </Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
