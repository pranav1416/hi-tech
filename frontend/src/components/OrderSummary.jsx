import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import { Form, Col, Row, Image } from "react-bootstrap";
import Message from '../components/Message'
import './OrderSummary.css';

const sum = function(items){
    return items.reduce( function(a, b){
        return a + b['price'] * b['qty'];
    }, 0);
};
const OrderSummary = ({ cartItems }) => {
    //console.log(cartItems)
    var subTotal = sum(cartItems);
    //console.log('SubTotal " '  + subTotal);
    return (
        <Form>
            <h4 class="mystyle" >Order Summary</h4>
            
            <Row>
            <Col xs="12">
                {cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <div>
                        {cartItems.map((cartItem) => (
                            <ListGroup className="listgroup" horizontal='sm' key={cartItem.product} >
                            {/* <ListGroup.Item>
                                <div>
                                    <img src={cartItem.image} alt={cartItem.image} className="" />
                                </div>
                            </ListGroup.Item> */}
                            <ListGroup.Item className="listgroup-right-borderless">{cartItem.name}</ListGroup.Item>
                            <ListGroup.Item className="listgroup-right-borderless">{cartItem.price}</ListGroup.Item>
                            <ListGroup.Item>{cartItem.qty}</ListGroup.Item>
                            </ListGroup>
                        ))}
                        </div>
                    
                )}
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <ListGroup className="listgroup">
                        <ListGroup.Item>Saving</ListGroup.Item>
                        <ListGroup.Item className="subtotal">SubTotal : {subTotal}</ListGroup.Item>
                        <ListGroup.Item>Promo Code</ListGroup.Item>
                        <ListGroup.Item>Total</ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>

        </Form>

    );
}

// const OrderSummary = ({ cartItem }) => {
//     return (
//         <Form>
//             <Row>
//                 <Col xs="12">
//                     <Table striped bordered hover className="table-order">
//                         <thead>
//                             <tr>
//                                 <th>Product</th>
//                                 <th>Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Product1</td>
//                                 <td>500</td>
//                             </tr>
//                             <tr>
//                                 <td>Product2</td>
//                                 <td>300</td>
//                             </tr>
//                             <tr>
//                                 <td>Product3</td>
//                                 <td>800</td>
//                             </tr>
//                         </tbody>
//                     </Table>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col xs="12">
//                     <ListGroup className="listgroup">
//                         <ListGroupItem>Saving</ListGroupItem>
//                         <ListGroupItem className="subtotal">SubTotal</ListGroupItem>
//                         <ListGroupItem>Promo Code</ListGroupItem>
//                         <ListGroupItem>Total</ListGroupItem>

//                     </ListGroup>
//                 </Col>
//             </Row>

//         </Form>

//     );
// }



export default OrderSummary;