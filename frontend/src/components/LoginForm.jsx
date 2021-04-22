import React, { useEffect, useState } from 'react'
import { Form, Button, Row, Col, Container, Jumbotron, Modal } from 'react-bootstrap'



function SignUp() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Create Account
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicUserID">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="userID" placeholder="Enter User ID" />
                    </Form.Group>

                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="firstname" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lastname" placeholder="Enter Last Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="address" placeholder="Enter Address" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Create Your Hi-Tech Account
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

const LoginForm = () => {
    return (
        <Container className='border border-succes my-3 p-3 rounded'>
            <Row>
                <Col xs={12} className='text-center'>
                    <Form>
                        <h1> Sign-In </h1>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                        <Jumbotron className ='bg-transparent'>
                            <h5> New to Hi-Tech? </h5>
                            <p>
                                {/* <Button variant="primary">Create Account</Button> */}
                                <SignUp />
                            </p>
                        </Jumbotron>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    )
}
export default LoginForm