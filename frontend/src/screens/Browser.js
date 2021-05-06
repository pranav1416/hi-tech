import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Navigation from '../components/Navigation'
import Pages from '../components/Pages'
import { Navbar, Nav, Form, FormControl, Button, Containe, Card} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Path from '../components/Path'


const Browser = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
    <Path/>
      <Navigation  style={{ paddingTop: '20px'}}/>
          <Row style={{ paddingTop: '80px', paddingLeft: '460px', paddingRight: '300px',margin: '-300px' }}>

          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          ))}
        </Row>
      <Pages/>
    </>
  )
}

export default Browser


// const Browser = () => {
// {
//     const dispatch = useDispatch()
  
//     const productList = useSelector((state) => state.productList)
//     const { loading, products, error } = productList
  
//     useEffect(() => {
//       dispatch(listProducts())
//     }, [dispatch])
  
//  return (
//      <>
// <Navigation/>
// <ProductObject/>

//         <Row>
//           {products.map((Product) => (
//             <Col sm={12} md={6} lg={4} xl={3}>
//               <Product ProductObject={Product} />
//             </Col>
//           ))}
//         </Row>

// </>
// )

// }
// }


// export default Browser;


//ProductObject

// import React from 'react'
// import Card from "react-bootstrap/Card";
// import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'

// const ProductObject = ({product}) => {

//   return (
  
//   <Card  style={{ width: '18rem', top: "-200px", left: "200px"}}>
//   <Card.Img variant="top" src="/images/tv1.png" />
//   <Card.Body>
//   <Card.Link style={{ fontSize: "20px",textAlign: "center", color: "Black"}} href="/product">Item Name</Card.Link>    
//   <Card.Text style={{ textAlign: "left"}} >Price $$</Card.Text>
//   <Nav.Link style={{ textAlign: "right"}} href="/cart"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
//   </Card.Body>
// </Card>
//   )

// }

// export default ProductObject