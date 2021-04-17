import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, FormControl, Form } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
  // PRODUCT SCREEN MODULE : [TESTING]
  // Add to cart and quantity select
  const [qty, setQty] = useState(0)

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Welcome to Hi-Tech Store</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
              {product.countInStock > 0 && (
                <Row>
                  <Col>Qty: </Col>
                  <Col>
                    <Form.Control
                      as='select'
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    >
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              )}
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
