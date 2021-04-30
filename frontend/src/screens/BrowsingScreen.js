import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, FormControl, Form } from 'react-bootstrap'
import Product from '../components/Product'
import { listSearchProducts } from '../actions/browsingActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const BrowsingScreen = ({ match }) => {
  const dispatch = useDispatch()

  const keyword = match.params.keyword

  console.log(keyword)
  useEffect(() => {
    dispatch(listSearchProducts(keyword))
  }, [dispatch, keyword])
  const searchProducts = useSelector((state) => state.searchProducts)
  const { loading, products, error } = searchProducts

  return (
    <>
      <h1>Welcome to Hi-Tech Store</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row style={{ paddingTop: '450px' }}>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product style={{ paddingTop: '10px' }} product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default BrowsingScreen