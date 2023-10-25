import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import shoppingCartPhoto from "../photo/shopping-cart.png";
import styles from "./ShoppingCartNavbars.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  add_record,
  move_staging_area,
  optionDataType,
} from "../slice/shoppingCartSlice";
import { useNavigate } from "react-router";

import ShoppingCartModal from "./ShoppingCartModal";
import { useLocation } from "react-router-dom";

function ShoppingCartNavbars(props: {
  menu_price: number;
  item_id: number;
  item_name: string;
  checked_item: Array<optionDataType>;
  itemObj: boolean;
  choices: Array<optionDataType>;
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
    if (props.itemObj) {
      dispatch(
        add_record({
          item_id: props.item_id,
          item_name: props.item_name,
          price: props.menu_price,
          choices: props.choices,
        })
      );
    } else {
      dispatch(
        add_record({
          set_choices: [
            {
              item_id: props.item_id,
              item_name: props.item_name,
              option_choices: props.checked_item || [],
            },
          ],
        })
      );
    }

    dispatch(move_staging_area());
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
