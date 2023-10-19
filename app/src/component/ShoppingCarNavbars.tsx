import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import shoppingCartPhoto from "../photo/shopping-cart.png";
import styles from "./ShoppingCarNavbars.module.css";
import { useState } from "react";

function ShoppingCarNavbars(props: { menu_price: number }) {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(props.menu_price);
  const addItem = () => {
    setCount(count + 1);
  };
  const subtractItem = () => {
    setCount(count - 1);
  };
  const addPrice = () => {
    setPrice(price + props.menu_price);
  };
  const subtractPrice = () => {
    setPrice(price - props.menu_price);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className={styles.button}>
        <Button
          onClick={() => {
            subtractItem();
            subtractPrice();
          }}
          variant="primary"
        >
          -
        </Button>
        <h3 className="mx-3">{count}</h3>
        <Button
          onClick={() => {
            addItem();
            addPrice();
          }}
          variant="primary"
        >
          +
        </Button>
        <h1>{price}</h1>
        <img
          src={shoppingCartPhoto}
          alt="shopping cart"
          className={styles.shoppingCart}
        />
      </Container>
    </Navbar>
  );
}

export default ShoppingCarNavbars;
