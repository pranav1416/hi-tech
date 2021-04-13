import React from 'react'
import Card from "react-bootstrap/Card";
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ProductObject = () => {

  return (
  
  <Card  style={{ width: '18rem', top: "-200px", left: "200px"}}>
  <Card.Img variant="top" src="/images/tv1.png" />

  <Card.Body>
  <Card.Link style={{ fontSize: "18px",textAlign: "center", color: "Black"}} href="/product">Item Name</Card.Link>    
  <Card.Text style={{ textAlign: "left"}} >
      Price $$
    </Card.Text>
    <Nav.Link style={{ textAlign: "right"}} href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>

  </Card.Body>
</Card>
  )

}

export default ProductObject