import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";
import axios from "axios";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import { Table, Col, Row, Image } from "react-bootstrap";
import moment from 'moment';

const OrderHistory = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(JSON.stringify(userInfo));
  const userID = userInfo._id;
  var query = "?userID=" + userID + "&limit=10";

  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getUserHistory = (query) => {
    axios
      .get("/api/orderHistory" + query)
      .then((response) => {
        console.log(JSON.stringify(response));
        setOrders(response.data);
      })
      .catch((error) => console.log(error));
    setLoaded(true);
  };

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    getUserHistory(query);
  }, []);
  return (
    <Container>
      {orders === null && loaded === true ? (
        <Message>
          Your OrderHistory is empty <Link to="/">Go Back</Link>
        </Message>
      ) : (
        <div class="top_padding">
            <h1 class = "order_histry_title">Your Orders</h1>
          {orders?.map((order) => (
            <Card className="order_history_card">
              <Card.Header className = "order_history_card_header">
                  <Row>
                      <Col>
                        <Row>ORDER PLACED</Row>
                        <Row>{moment(order.orderDate).format("MMM DD YYYY")}</Row>
                      </Col>
                      <Col className = "order_history_details">
                            <div className="">ORDER # {order._id}</div>
                            {/* <div>TOTAL {formatter.format(order.price.total)}</div> */}
                      </Col>
                  </Row>
              </Card.Header>
              <Card.Body className="order_history_body">
                {/* <OrderSummary cartItems={order.products} price={price} /> */}
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
                    {order.products.map((cartItem) => (
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
                            <Link to={`/product/${cartItem.productID}`}>
                              {cartItem.name}
                            </Link>
                          </div>
                        </td>
                        <td key="quantity">{cartItem.qty}</td>
                        <td key="price">{formatter.format(cartItem.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
};

export default OrderHistory;
