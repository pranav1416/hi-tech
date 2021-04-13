import React from 'react';
import { Form, Col, Row } from "react-bootstrap";
import '../components/Checkout.css';
import '../components/OrderSummary.css';
import CheckoutForm from '../components/CheckoutForm'
import OrderSummary from '../components/OrderSummary'

const Checkout = () => {


    return (
        <div className="grid_container" >
            <Row>
                <h3> Checkout summary</h3>
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