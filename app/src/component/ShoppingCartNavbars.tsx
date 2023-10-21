import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import shoppingCartPhoto from "../photo/shopping-cart.png";
import styles from "./ShoppingCartNavbars.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_record } from "../slice/shoppingCartSlice";
import { useNavigate } from "react-router";

import ShoppingCartModal from "./ShoppingCartModal";

function ShoppingCartNavbars(props: {
  menu_price: number;
  item_id: number;
  item_name: string;
  checked_item: Array<string>;
  checked_item_id: number;
}) {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(props.menu_price);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addItem = () => {
    setCount(count + 1);
    addPrice();
  };
  const subtractItem = () => {
    if (count > 1) {
      setCount(count - 1);
      subtractPrice();
    }
  };
  const addPrice = () => {
    setPrice(price + props.menu_price);
  };
  const subtractPrice = () => {
    setPrice(price - props.menu_price);
  };

  const handleCheckout = () => {
    setShowModal(!showModal);
    dispatch(
      add_record({
        item_id: props.item_id,
        set_id: null,
        item_name: props.item_name,
        set_name: null,
        price: props.menu_price,
        choices: [
          {
            choice_id: props.checked_item_id,
            choice_name: props.checked_item[0],
            choice_price: null as unknown as number,
          },
        ],
        set_choices: [],
      })
    );
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className={styles.button}>
        <Button onClick={subtractItem} variant="primary">
          -
        </Button>
        <h3 className="mx-3">{count}</h3>
        <Button onClick={addItem} variant="primary">
          +
        </Button>
        <h1>{price}</h1>
        <img
          onClick={() => {
            handleCheckout();
          }}
          src={shoppingCartPhoto}
          alt="shopping cart"
          className={styles.shoppingCart}
        />
        {showModal && <ShoppingCartModal />}
      </Container>
    </Navbar>
  );
}

export default ShoppingCartNavbars;
