import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Table } from "react-bootstrap";
import "./OrderReceipt.css";
import Message from "../components/Message";
import OrderSummary from "../components/OrderSummary";
import { removeAllFromCart } from "../actions/cartActions";
import moment from 'moment';

const HttpProxyAgent = require("http-proxy-agent");

const axiosDefaultConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  },
};
const axios = require("axios").create(axiosDefaultConfig);

const OrderReceipt = () => {
  var initPrice = {
    subtotal: 0.0,
    tax: 0.0,
    discount: 0.0,
    total: 0.0,
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const location = useLocation();
  const [orderReceipt, setOrderReceipt] = useState(null);
  const [orderMessage, setOrderMessage] = useState(null);
  const [orderTotalMessage, setOrderTotalMessage] = useState(null);
  const [orderDateMessage, setOrderDateMessage] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(initPrice);
  const [shippingAddr, setShippingAddr] = useState(null);
  const [shippingAddr2, setShippingAddr2] = useState(null);

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const [loaded, setLoaded] = useState(false);

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
      setLoaded(true);

      if (response.data.products) {
        var orderItems = response.data.products.map(function (item) {
          return {
            product: item.productID,
            image: item.image,
            name: item.name,
            price: item.price,
            qty: item.qty,
          };
        });

        setOrderReceipt(response.data);
        setOrderMessage("Order #: " + response.data._id);
        setOrderDateMessage("Order Date: " + 
          moment(response.data.orderDate).format("dddd, MMM DD YYYY"));
        setOrderTotalMessage("Order Total: " + formatter.format(response.data.price.total));
        
        setShippingAddr(response.data.shipping.address.addr1 + ' , ' + 
          response.data.shipping.address.addr2);
        
          setShippingAddr2(response.data.shipping.address.city + ' , ' + 
          response.data.shipping.address.state + ' . ' + response.data.shipping.address.zipcode);
        setCartItems(orderItems);
        console.log("Price from server " + JSON.stringify(response.data.price));
        setPrice(response.data.price);
        dispatch(removeAllFromCart());
      }
    }
    saveOrderHistory();
  }, [location]);

  return (
    <Container class="order_receipt_cotainer">
      {orderReceipt === null && loaded === true ? (
        <div></div>
      ) : (
        <div>
          <Row className="order_text col_center_block">
            <span className="order_text order_thank_you">
              Thanks for your order...
            </span>
            <span className="order_text order_message">
              You'll Receive an email when your items are shipped!
            </span>
            {/* <span className="order_text order_message">
              If you have any questions, Call us 1-800-900-0000
            </span> */}
          </Row>

          <Row className="summary_col_center_block">
            <Col>
            <Table className="order_summary_table">
              <div>
              <thead>
                <tr>
                  <th>SUMMARY</th>
                  <th>SHIPPING ADDRESS</th>
                </tr>
              </thead>
              <tbody>
                <tr class="no_padding">
                  <td class="no_padding">{orderMessage}</td>
                  <td class="no_padding center_col">{userInfo.firstName} {userInfo.lastName}</td>
                </tr>
                <tr>
                  <td class="no_padding">{orderDateMessage}</td>
                  <td class="no_padding center_col">{shippingAddr}</td>
                </tr>
                <tr className="last_order_summary_table no_padding">
                  <td class="no_padding">{orderTotalMessage}</td>
                  <td class="no_padding center_col">{shippingAddr2}</td>
                </tr>
              </tbody>
              </div>
            </Table>
            </Col>
          </Row>

          <Row className="col_center_block">
            <div>
              <OrderSummary cartItems={cartItems} price={price} />
            </div>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default OrderReceipt;
