import React from "react";
import { Link } from "react-router-dom";
import { Table, Col, Row, Image, Container } from "react-bootstrap";
import Message from "../components/Message";
import "./OrderSummary.css";

const OrderSummary = ({ cartItems , price }) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <Container>
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
                  <th className="product_image">PRODUCT</th>
                  <th>NAME</th>
                  <th>QTY</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem) => (
                  <tr key={cartItem.product} className="order-summary_tr">
                    <td key="image">
                      <Image
                        src={cartItem.image}
                        alt={cartItem.name}
                        fluid
                        thumbnail
                        className="product_image"
                      />
                    </td>
                    
                    <td key="name">
                      <div className="order_summary_link">
                        <Link to={`/product/${cartItem.product}`}>{cartItem.name}</Link>
                      </div>
                    </td>
                    <td key="quantity">{cartItem.qty}</td>
                    <td key="price">{formatter.format(cartItem.price)}</td>
                  </tr>
                ))}
    
                <tr colSpan="2" className="order_price">
                  <td className="order_price"></td>
                  <td className="order_price">SubTotal</td>
                  <td className="order_price"></td>
                  <td className="order_price">{formatter.format(price.subTotal)}</td>
                </tr>
                <tr colSpan="2" className="order_price">
                  <td className="order_price"></td>
                  <td className="order_price">Tax</td>
                  <td className="order_price"></td>
                  <td className="order_price">{formatter.format(price.tax)}</td>
                </tr>
                <tr colSpan="2" className="order_price">
                  <td className="order_price"></td>
                  <td className="order_price order_discount">Discount</td>
                  <td className="order_price"></td>
                  <td className="order_price order_discount">
                    {formatter.format(price.discount)}
                  </td>
                </tr>
                <tr colSpan="2" className="last order_price">
                  <td className="order_price"></td>
                  <td className="order_price order_price_total">Order Total</td>
                  <td className="order_price"></td>
                  <td className="order_price order_price_total">
                    {formatter.format(price.total)}
                  </td>
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
