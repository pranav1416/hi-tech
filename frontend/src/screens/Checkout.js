import React from 'react';
import { Form, Col, Row } from "react-bootstrap";
import '../components/Checkout.css';
import '../components/OrderSummary.css';
import CheckoutForm from '../components/CheckoutForm'
import OrderSummary from '../components/OrderSummary'

const Checkout = () => {


    return (
        <div class="grid_container" >
            <Row>
                <Col sm={8}>
                    <CheckoutForm />
                </Col>
                <Col sm={4}>
                    <OrderSummary />
                </Col>   
            </Row>
        </div> 
    );
}

export default Checkout;