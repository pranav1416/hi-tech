import React from 'react'
import {Form, Col,Row} from "react-bootstrap";
import './OrderReceipt.css';

const OrderReceipt = () => {
    return (
        <Form className = "receipt-box">
            <h3 className = "headereceipt">
            Your order has been placed!!!
            </h3> 

            <Form.Group >
            <Form.Check type="checkbox" label="Order Number : 12345 " />
            </Form.Group>

            <Form.Group >
            <Form.Check type="checkbox" label="Order Date : 3/15/2021" />
            </Form.Group>
        
        </Form>
    )
}

export default OrderReceipt
