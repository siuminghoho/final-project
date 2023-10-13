import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        // dialogClassName="modal-dialog-centered"
      >
        <Modal.Header closeButton>
          <Modal.Title>溫馨提示</Modal.Title>
        </Modal.Header>
        <Modal.Body>如顧客沒有電子支付，需找服務員協助下單</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
