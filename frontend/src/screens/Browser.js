import React from 'react'
import ProductObject from '../components/ProductObject'
import Navigation from '../components/Navigation'
import Pages from '../components/Pages'
import { Navbar, Nav, Form, FormControl, Button, Containe, Card} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col} from 'react-bootstrap'


const Browser = () => {
{
 return (
     <>
<Navigation/>
<ProductObject/>
{/* <Row>
          {ProductObject.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <ProductObject product={product} />
            </Col>
          ))}
        </Row> */}

</>
)

}
}


export default Browser;