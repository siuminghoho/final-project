import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function ShoppingCartModal() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const shoppingCart = () => {
    setShow(false);
    navigate("/shoppingCart");
  };
  const homePage = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>確定這些食物足夠嗎?</Modal.Title>
        </Modal.Header>
        <Modal.Body>你將會去購物車頁面</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={homePage}>
            繼續點餐
          </Button>
          <Button variant="primary" onClick={shoppingCart}>
            前去購物車頁面
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShoppingCartModal;
