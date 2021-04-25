import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Container, Col, Row, } from "react-bootstrap";
import "./OrderReceipt.css";
import Message from "../components/Message";
import OrderSummary from "../components/OrderSummary";
import { removeAllFromCart } from '../actions/cartActions'

const HttpProxyAgent = require("http-proxy-agent");

const axiosDefaultConfig = {
  baseURL: "http://localhost:5001",
  proxy: false,
  httpAgent: new HttpProxyAgent("http://localhost:5001"),
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  },
};
const axios = require("axios").create(axiosDefaultConfig);

const OrderReceipt = () => {
  const location = useLocation();
  const [orderReceipt, setOrderReceipt] = useState(null);
  const [orderMessage, setOrderMessage] = useState(null);
  const [orderDateMessage, setOrderDateMessage] = useState(null);
  const [orderReceiptError, setOrderReceiptError] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    async function saveOrderHistory() {
      const axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
        },
      };
      console.log(
        "saveOrderHistory request " + JSON.stringify(location.state.payload),
        axiosConfig
      );
      const response = await axios
        .post("/api/orderHistory", location.state.payload)
        .catch(function (error) {
          console.log(
            "Error while saving saveOrderHistory " + JSON.stringify(error)
          );
        });
      console.log("Response from server" + JSON.stringify(response.data));
      var oReceipt = response.data;
      
      console.log("products are " + JSON.stringify(response.data.products));
      if (response.data.products) {
        console.log(
          "response.data.products " + JSON.stringify(response.data.products)
        );
        var orderItems = response.data.products.map(function (item) {
          return {
            product: item.productID,
            name: item.name,
            price: item.price,
            qty: item.qty,
          };
        });
        console.log("OrderItems are " + JSON.stringify(orderItems));
        console.log("cart items are " + JSON.stringify(orderItems));
        setOrderReceipt(response.data);
        setOrderMessage("Order Number : " + response.data._id);
        setOrderDateMessage("Order Date : " + response.data.orderDate);
        setCartItems(orderItems);
        dispatch(removeAllFromCart());
        
      }
    }
    saveOrderHistory();
  }, [location]);

  return (
    <Container className="receipt-box">
      {orderReceipt == null ? (
        <Message variant="danger">
          Error while saving the order. Contact Support team.
        </Message>
      ) : (
        <div>
          <Row>
            <h3 className="headereceipt">Your order has been placed!!!</h3>
          </Row>

          <Row>
            <h5>{orderMessage}</h5>
          </Row>
          <Row>
            <h5>{orderDateMessage}</h5>
          </Row>

          <Row>
            <OrderSummary cartItems={cartItems}/>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default OrderReceipt;
