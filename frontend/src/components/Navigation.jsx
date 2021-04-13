import React from 'react'
import Card from "react-bootstrap/Card";
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col} from 'react-bootstrap'


const Navigation = () => {

    return (

  <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link style={{ fontSize: "18px",color: "Black"}} href="/browser">All Categories</Nav.Link>
  <Nav.Link style={{ fontSize: "18px",color: "Black"}} href="/Laptops">Laptops</Nav.Link>
  <Nav.Link style={{ fontSize: "18px",color: "Black"}} href="/Mobiles">Mobiles</Nav.Link>
  <Nav.Link style={{ fontSize: "18px",color: "Black"}} href="/Home Automation">Home Automation</Nav.Link>
  <Nav.Link style={{ fontSize: "18px",color: "Black"}} href="/Office Tech">Office Tech</Nav.Link>


  <Nav.Link eventKey="disabled" disabled>
    Disabled
  </Nav.Link>
</Nav>

    )

}
 export default Navigation