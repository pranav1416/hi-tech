import React from 'react'
import {Card, CardDeck} from 'react-bootstrap'
import {Button,useState} from 'react'
import {Row, Col} from 'react-bootstrap'


const ProductsDisplayed  = () => 
{
return (
<>

<CardDeck style= {{ paddingTop: '200px', height: '5rem' ,width: '111rem' }}>
  <Card>
    <Row>
      <Col>
    <Card.Img style= {{ height: '300px' ,width: '300px'}} variant="top" src="/images/charger1.jpg" thumbnail />
    </Col>
    </Row>
  
  </Card>
  <Card>
    <Card.Img  style= {{ height: '300px' ,width: '300px'}} variant="top" src="/images/gps1.jpg" />
  </Card>

  <Card>
    <Card.Img  style= {{ height: '300px' ,width: '300px'}} variant="top" src="./images/OLED1.jpg" />
  </Card>

  <Card>
    <Card.Img style= {{ height: '300px' ,width: '300px'}}variant="top" src="./images/sonytv1.jpg" />
  </Card>

  <Card>
    <Card.Img style= {{ height: '300px' ,width: '300px'}}variant="top" src="./images/camera1.jpg" />
  </Card>
</CardDeck>

</>

)



}

export default ProductsDisplayed 