import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import {Button,useState} from 'react'


const ProductsDisplayed  = () => 
{
return (
<>

<CardDeck style= {{paddingTop: '180px', height: '5rem' ,width: '111rem' }}>
  <Card>
    <Card.Img variant="top" src="/images/charger.jpg" />
    <Card.Body>
      <Card.Title>15-Volt adapter for TOSHIBA Tecra</Card.Title>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src="/images/gps.jpg" />
    <Card.Body>
      <Card.Title>Touchscreen Portable GPS Navigation System</Card.Title>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="./images/smartSony.jpg" />
    <Card.Body>
      <Card.Title>Sony Smart OLED TV</Card.Title>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="./images/smartTV.webp" />
    <Card.Body>
      <Card.Title>Sony Smart TV</Card.Title>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src="./images/camera.jpg" />
    <Card.Body>
      <Card.Title>EOS Camera Body Deluxe Kit</Card.Title>
    </Card.Body>
  </Card>
</CardDeck>

</>

)



}

export default ProductsDisplayed 