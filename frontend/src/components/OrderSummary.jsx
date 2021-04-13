import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {Form, Col,Row} from "react-bootstrap";
import { Button, Table } from 'react-bootstrap';
import './OrderSummary.css';


const OrderSummary = () => {
        return (
            <Form>
                <h4 class = "mystyle" >
                    Order Summary
                </h4>

                <Row>
                    <Col xs="12">
                        <Table striped bordered hover className="table-order">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Product1</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td>Product2</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>Product3</td>
                                    <td>800</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs="12">
                        <ListGroup className="listgroup">
                            <ListGroupItem>Saving</ListGroupItem>
                            <ListGroupItem className="subtotal">SubTotal</ListGroupItem>
                            <ListGroupItem>Promo Code</ListGroupItem>
                            <ListGroupItem>Total</ListGroupItem>

                        </ListGroup>
                    </Col>
                </Row>

            </Form>

        );
    }

export default OrderSummary;

