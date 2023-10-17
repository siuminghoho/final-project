import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import shoppingCartPhoto from "../photo/shopping-cart.png";
import styles from "./ShoppingCarNavbars.module.css";

function ShoppingCarNavbars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className={styles.button}>
        <Button variant="primary">-</Button>
        <h3 className="mx-3">1</h3>
        <Button variant="primary">+</Button>
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
