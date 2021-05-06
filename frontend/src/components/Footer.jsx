import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Footer.css";

const Footer = () => {
    return (
        <footer className = 'news'>
            <Container>
                <hr></hr>
                <hr></hr>
                <Row>
                    <Col className='col-lg-14'>
                        <Row>
                            <Col className='col-lg-3'>
                                <h5 className="pb-3"> HI-TECH</h5>
                                <p> Shop Hi-Tech for electronic products all around the world!</p>
                            </Col>
                            <Col className='col-lg-3'>
                                <h5 className="pb-3"> CUSTOMER CARE</h5>
                                <p> Regular, On Time, and Always care </p>

                            </Col>
                            <Col className='col-lg-3'>
                                <h5 className="pb-3"> ABOUT US</h5>
                                <p> This website is built by:</p>
                                <p> Pranav, Keira, Shraddha and Nour</p>
                            </Col>
                            <Col className='col-lg-2'>
                                <h5 className="pb-3"> FOLLOW US</h5>
                                <span> <i class = "fab fa-facebook"> </i> </span>
                                <span> <i class = "fab fa-instagram"> </i> </span>
                                <span> <i class = "fab fa-twitter"> </i> </span>
                            </Col>

                        </Row>
                    </Col>
                    
                </Row>
                <Row>
                    <Col className='text-center py-3'>
                        <hr></hr>
                        &copy; Copyright Hi-Tech.com
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
