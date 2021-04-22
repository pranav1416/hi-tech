import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Jumbotron, Form, Button, Col, Badge } from 'react-bootstrap'

const ProductAdd = ({ history, product, match }) => {
  //let history = useHistory()
  const [qty, setQty] = useState(1)

  function handleAddToCart() {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
  return (
    <Jumbotron>
      <h1>$ {product.price} </h1>
      <p>Availibity: {product.countInStock} in stock!</p>
      <p>
        {product.countInStock > 0 ? (
          <>
            <Form>
              <Form.Group controlId='exampleForm.SelectCustom'>
                <Form.Control
                  as='select'
                  custom
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value)
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {' '}
                      {x + 1}{' '}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
            <Button variant='primary' onClick={handleAddToCart}>
              {' '}
              Add to Cart{' '}
            </Button>
          </>
        ) : (
          <Col>
            <h1>
              Sorry. <Badge variant='secondary'>Sold Out</Badge>
            </h1>
          </Col>
        )}
      </p>
      <p>
        {/* <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button> */}
      </p>
    </Jumbotron>
  )
}
export default ProductAdd
