import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Checkout.css";

const CheckoutForm = ({ cartItems, price }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo } = userLogin;

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
      var payload = {
        products: [],
        userID: userInfo._id,
        price: {
          subTotal: price.subTotal,
          tax: price.tax,
          discount: price.discount,
          total: price.total,
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
      
      const products = cartItems.map(function (item) {
        return {
          productID: item.product,
          image: item.image,
          name: item.name,
          price: item.price,
          qty: item.qty,
        };
      });
      payload.products = products;
      console.log("Payload after adding product is " + JSON.stringify(payload));
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
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
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
