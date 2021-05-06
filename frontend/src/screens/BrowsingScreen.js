import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, FormControl, Form } from 'react-bootstrap'
import Product from '../components/Product'
import { listSearchProducts } from '../actions/browsingActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'

const BrowsingScreen = ({ match }) => {
  const dispatch = useDispatch()

  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  const searchProducts = useSelector((state) => state.searchProducts)
  const { loading, products, error, pages, page } = searchProducts

  useEffect(() => {
    console.log(keyword)
    dispatch(listSearchProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product style={{ paddingTop: '10px' }} product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default BrowsingScreen
