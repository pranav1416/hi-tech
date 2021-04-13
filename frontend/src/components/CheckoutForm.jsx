import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Row } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";
import { useHistory } from "react-router-dom";
import "./Checkout.css";

const CheckoutForm = () => {
  const history = useHistory();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
        history.push("/orderReceipt");
    }
    setValidated(true);
  };

  return (
    <>
      <h4 class="mystyle-checkout">Checkout</h4>

      <Form
        class="checkoutForm"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter Email Address"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Receive new offers" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="Firstname"
              placeholder="Enter First Name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="Lastname"
              placeholder="Enter Last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control required placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control required placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              type="text"
              as="select"
              defaultValue="Choose..."
            >
              <option>California</option>
              <option>Nevada</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="digit" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        
        <h4 class="mystyle-checkout">Payment</h4>

        <Form.Group>
            <Form.Label>
            <input type="radio" value="option1" />
            Cash On Delivery
            </Form.Label>
        </Form.Group>

        <Button variant="custom" type="submit" className="btn-custom">
          Place Order
        </Button>
      </Form>
    </>
  );
};

export default CheckoutForm;
