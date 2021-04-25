import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Row } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import "./Checkout.css";

const sum = function(items){
  return items.reduce( function(a, b){
      return a + b['price'] * b['qty'];
  }, 0);
};

const CheckoutForm = ({ cartItems }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  
  const [email, setEmail] = useState(userInfo.email);
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [addr, setAddr] = useState(userInfo.address[0].addr1);
  const [addr2, setAddr2] = useState(userInfo.address[0].addr2);
  const [city, setCity] = useState(userInfo.address[0].city);
  const [stateV, setStateV] = useState(userInfo.address[0].state);
  const [zipcode, setZipCode] = useState(userInfo.address[0].zipcode);
  const history = useHistory();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      var subTotal = sum(cartItems);
      var salesTax = subTotal * 0.10;
      if (stateV == "Alaska" || stateV == "Delaware" || stateV == "Montana" ||
        stateV == "New Hampshire" || stateV == "Oregon") {
          salesTax = 0.0;
      }
      var total = subTotal + salesTax;
      var payload = {
        products: [],
        userID: userInfo._id,
        price: {
          subtotal: subTotal,
          tax: salesTax,
          total: total
        },
        shipping: {
          address: {
            addr1: addr,
            addr2: addr2,
            city: city,
            state: stateV,
            zipcode: zipcode,
          },
        },
        payment: {
          method: "Cash On Delivery",
        },
      };
      console.log('Payload before adding product is ' + JSON.stringify(payload));
      const products = cartItems.map(function (item) {
        return {
          productID: item.product,
          name: item.name,
          price: item.price,
          qty: item.qty
        }
        //return product;
      });
      payload.products = products;
      console.log('Payload after adding product is ' + JSON.stringify(payload));
      history.push({
        pathname: "/orderReceipt",
        state: {
          payload: payload,
        },
      });
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="Lastname"
              placeholder="Enter Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            placeholder="1234 Main St"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            required
            placeholder="Apartment, studio, or floor"
            value={addr2}
            onChange={(e) => setAddr2(e.target.value)}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
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
              value={stateV}
              onChange={(e) => setStateV(e.target.value)}
            >
              <option>Alabama</option>
              <option>Alaska</option>
              <option>Arizona</option>
              <option>Arkansas</option>
              <option>California</option>
              <option>Colorado</option>
              <option>Connecticut</option>
              <option>Delaware</option>
              <option>Florida</option>
              <option>Georgia</option>
              <option>Hawaii</option>
              <option>Idaho</option>
              <option>Illinois</option>
              <option>Indiana</option>
              <option>Iowa</option>
              <option>Kansas</option>
              <option>Kentucky</option>
              <option>Louisiana</option>
              <option>Maine</option>
              <option>Maryland</option>
              <option>Massachusetts</option>
              <option>Michigan</option>
              <option>Minnesota</option>
              <option>Mississippi</option>
              <option>Missouri</option>
              <option>Montana</option>
              <option>Nebraska</option>
              <option>Nevada</option>
              <option>New Hampshire</option>
              <option>New Jersey</option>
              <option>New Mexico</option>
              <option>New York</option>
              <option>North Carolina</option>
              <option>North Dakota</option>
              <option>Ohio</option>
              <option>Oklahoma</option>
              <option>Oregon</option>
              <option>Pennsylvania</option>
              <option>Rhode Island</option>
              <option>South Carolina</option>
              <option>South Dakota</option>
              <option>Tennessee</option>
              <option>Texas</option>
              <option>Utah</option>
              <option>Vermont</option>
              <option>Virginia</option>
              <option>Washington</option>
              <option>West Virginia</option>
              <option>Wisconsin</option>
              <option>Wyoming</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="digit"
              placeholder="Zip"
              required
              value={zipcode}
              onChange={(e) => setZipCode(e.target.value)}
            />
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
