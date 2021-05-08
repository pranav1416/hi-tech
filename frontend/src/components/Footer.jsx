import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <hr></hr>
      <hr></hr>
      <Row style={{ paddingLeft: '3rem' }}>
        <Col className='col-lg-12'>
          <Row>
            <Col className='col-lg-3'>
              <h5 className='pb-3'> HI-TECH</h5>
              <p> Shop Hi-Tech for electronic products all around the world!</p>
            </Col>
            <Col className='col-lg-3 px-3'>
              <h5 className='pb-3'> CUSTOMER CARE</h5>
              <p> Regular, On Time, and Always care </p>
            </Col>
            <Col className='col-lg-3'>
              <h5 className='pb-3'> ABOUT US</h5>
              <p> This website is built by:</p>
              <p> Pranav, Keira, Shraddha and Nour</p>
            </Col>
            <Col className='col-lg-3'>
              <h5 className='pb-3'> FOLLOW US</h5>
              <span>
                {' '}
                <i className='fab fa-facebook'> </i>{' '}
              </span>
              <span>
                {' '}
                <i className='fab fa-instagram'> </i>{' '}
              </span>
              <span>
                {' '}
                <i className='fab fa-twitter'> </i>{' '}
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mx-auto'>
          <hr></hr>
          &copy; Copyright Hi-Tech.com
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
