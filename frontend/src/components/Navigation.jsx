import React from 'react'
import Card from "react-bootstrap/Card";
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Tab} from 'react-bootstrap'
import { Fragment, Component, render} from "react"
import ListGroup from 'react-bootstrap/ListGroup'
import { get } from 'mongoose';

// function handleClick(Tab) {   
//   Tab.preventDefault();  
//     console.log('The tab was clicked.')
//      }

// const [NavigationState, setNavigationState] = useState("/browser")



const Navigation = () => {
  return(  
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row style={{ width: '45%'}}>
    <Col sm={3}>
    <Nav variant="pills" className="flex-column">
      {/* value={NavigationState}
       onChange = {(e) => {
        const selectedNavigation = e.target.value
        setNavigationState(selectedNavigation)
     }
      }> */}
        <Nav.Item>
          <Nav.Link /*onClick={handleClick}*/ href= '/browser' eventKey="first">All Categories</Nav.Link>
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

