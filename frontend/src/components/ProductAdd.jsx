import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Jumbotron, Form, Button, Col, Badge } from 'react-bootstrap'
import Rating from './Rating'

const ProductAdd = ({ history, product, match }) => {
  //let history = useHistory()
  const [qty, setQty] = useState(1)

  function handleAddToCart() {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const avg =
    product.reviews.reduce((sum, review) => sum + review.reviewRating, 0) /
    product.reviews.length

  return (
    <Jumbotron>
      {product.isSale ? ( 
        <h1><del>$ {product.originPrice} </del> $ {product.price}</h1>
      ) : (
        <h1>$ {product.price} </h1>
      )}
      <h5><Rating value={avg} text={product.reviews.length} /></h5>
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
