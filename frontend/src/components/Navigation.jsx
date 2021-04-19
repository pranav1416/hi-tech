import React from 'react'
import Card from "react-bootstrap/Card";
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Tab} from 'react-bootstrap'
import { Fragment, Component, render} from "react"
import ListGroup from 'react-bootstrap/ListGroup'


const Navigation = () => {
  return(
  
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row style={{ width: '45%'}}>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">All Categories</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="second">Laptops</Nav.Link>
        </Nav.Item>

         <Nav.Item>
          <Nav.Link eventKey="third">Mobiles</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="fourth">Home Automation</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="fifth">Office Tech</Nav.Link>
        </Nav.Item> 
      </Nav>
    </Col>
  </Row>
</Tab.Container>


   )
  }
 export default Navigation