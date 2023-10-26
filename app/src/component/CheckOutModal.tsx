import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { clear_staging_area } from "../slice/shoppingCartSlice";
import { useDispatch } from "react-redux";

function CheckOutModal() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    dispatch(clear_staging_area);
  };
  const shoppingCart = () => {
    setShow(false);
    navigate("/");
  };
  const homePage = () => {
    dispatch(clear_staging_area);
    setShow(false);
    navigate("/orderRecord");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>恭喜成功付款!</Modal.Title>
        </Modal.Header>
        <Modal.Body>你將會去訂單記錄畫面</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={homePage}>
            去訂單記錄畫面
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CheckOutModal;
