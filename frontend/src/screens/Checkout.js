import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Col, Row, } from "react-bootstrap";
import '../components/Checkout.css';
import '../components/OrderSummary.css';
import CheckoutForm from '../components/CheckoutForm'
import OrderSummary from '../components/OrderSummary'
import Message from '../components/Message'

const sum = function(items){
    return items.reduce( function(a, b){
        return a + b['price'] * b['qty'];
    }, 0);
};

const getDiscount = function(subTotal) {
    const min = 1;
    const max = 10;
    const rand = (min + Math.random() * (max - min)) /100;
    console.log('random discount is ' + rand);
    return subTotal * rand;
}
  
const Checkout = () => {
    const cartList = useSelector((state) => state.cart)
    const { cartItems } = cartList
    console.log(cartItems);
    var subTotalV = sum(cartItems);
    var salesTax = subTotalV * 0.10;
    var discountV = getDiscount(subTotalV);
    var totalV = subTotalV + salesTax - discountV;
    
    const price = {
        subTotal: subTotalV,
        tax: salesTax,
        discount: discountV,
        total: totalV
    };

    return (
        <Container>
            {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                <Row>
                    <Col>
                        <CheckoutForm cartItems={cartItems} price={price}/>
                    </Col>
                    <Col>
                        <h4 class="mystyle">Order Summary</h4>
                        <OrderSummary cartItems={cartItems} price={price}/>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default Checkout;