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
<<<<<<< HEAD
                <Col>
                    <CheckoutForm/>
                </Col>
                <Col>
                <h3> Checkout summary</h3>
=======
                <Col sm={8}>
                    <CheckoutForm />
>>>>>>> 82f0cc725278b8a008334c93ebc61d56d9607101
                </Col>
                <Col sm={4}>
                    <OrderSummary />
                </Col>   
            </Row>
        </div> 
    );
}

export default Checkout;