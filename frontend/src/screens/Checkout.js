import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Col, Row, } from "react-bootstrap";
import '../components/Checkout.css';
import '../components/OrderSummary.css';
import CheckoutForm from '../components/CheckoutForm'
import OrderSummary from '../components/OrderSummary'
import Message from '../components/Message'

const Checkout = () => {
    const cartList = useSelector((state) => state.cart)
    const { cartItems } = cartList
    console.log(cartItems);

    return (
        <Container>
            <h3> Checkout summary</h3>
            {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                <Row>
                    <Col>
                        <CheckoutForm cartItems={cartItems}/>
                    </Col>
                    <Col>
                        <OrderSummary cartItems={cartItems}/>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default Checkout;