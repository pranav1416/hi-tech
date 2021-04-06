import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {Form, Col,Row} from "react-bootstrap";
import ListGroup from 'react-bootstrap'
import './Checkout.css';

const Checkout = () => {
    return (
        <div  class ="grid_container" >
           
            <Form>
            
            <h3>
                Checkout 
            </h3>

                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Address" />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Receive new offers" />
                </Form.Group>
                
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="Firstname" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="Lastname" placeholder="Enter Last name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Continue Shopping
  </Button>
            </Form>
            
        </div>
        
    );
}

export default Checkout;