import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
function Connect() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const IsLog = false;

  const logInNo = (
    <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Your Message</Form.Label>
      <Form.Control as="textarea" rows="3" />
    </Form.Group>
  );
  const logInYes = (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>
  );
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Contact Me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {IsLog ? "Connect With Coach" : "Suscribe and Grow With Us"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{IsLog ? logInNo : logInYes}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Connect;
