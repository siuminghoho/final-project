import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import shoppingCartPhoto from "../photo/shopping-cart.png";
import styles from "./ShoppingNavbars.module.css";
import { useNavigate } from "react-router-dom";

function ShoppingNavbars() {
  const navigate = useNavigate();
  return (
    <Container className={styles.container}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            className={styles.shoppingCart}
            onClick={() => {
              navigate("/shoppingCart");
            }}
            src={shoppingCartPhoto}
            alt="shopping cart"
          />
        </Container>
      </Navbar>
    </Container>
  );
}

export default ShoppingNavbars;
