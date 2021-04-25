import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { Table, Col, Row, Image, Container } from "react-bootstrap";
import Message from "../components/Message";
import "./OrderSummary.css";

const sum = function (items) {
  return items.reduce(function (a, b) {
    return a + b["price"] * b["qty"];
  }, 0);
};
const OrderSummary = ({ cartItems }) => {
  //console.log(cartItems)
  var subTotal = 0;
  if (cartItems) {
    subTotal = sum(cartItems);
  }
  //console.log('SubTotal " '  + subTotal);
  return (
    <Container>
      <h4 class="mystyle">Order Summary</h4>

      <Row>
        <Col xs="12">
          {!cartItems || cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <Table bordereless responsive>
              <thead>
                <tr className="order-summary_tr">
                  <th>NAME</th>
                  <th>QTY</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => (
                    <tr key={cartItem.product} className="order-summary_tr">
                        <td key="name">{cartItem.name}</td>
                        <td key="quantity">{cartItem.qty}</td>
                        <td key="price">{cartItem.price}</td>
                    </tr>
                ))}
                <tr scolSpan="2" className="order_price">
                    <td>SubTotal</td>
                    <td></td>
                    <td>{subTotal}</td>
                </tr>
                <tr colSpan="2" className="order_price">
                    <td className="order_price">Tax</td>
                    <td></td>
                    <td>10</td>
                </tr>
                <tr colSpan="2" className="order_price">
                    <td>Discount</td>
                    <td></td>
                    <td>$0.00</td>
                </tr>
                <tr colSpan="2" className="order_price">
                    <td>Order Total</td>
                    <td></td>
                    <td>$0.00</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OrderSummary;
