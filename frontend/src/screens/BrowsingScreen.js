import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, FormControl, Form } from 'react-bootstrap'
import Product from '../components/Product'
import { listSearchProducts } from '../actions/browsingActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Navigation from '../components/Navigation'

const BrowsingScreen = ({ match }) => {
  const dispatch = useDispatch()

  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  const category = match.params.category || 'all'
  const searchProducts = useSelector((state) => state.searchProducts)
  const { loading, products, error, pages, page } = searchProducts

  useEffect(() => {
    console.log(keyword)
    dispatch(listSearchProducts(keyword, pageNumber, category))
  }, [dispatch, keyword, pageNumber, match])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            <Col
              sm={12}
              md={2}
              lg={2}
              xl={2}
              style={{ width: '100%', paddingTop: '1rem' }}
            >
              <Navigation />
            </Col>
            <Col sm={12} md={10} lg={10} xl={10}>
              <Row>
                {products.map((product) => (
                  <Col sm={12} md={6} lg={4} xl={3}>
                    <Product style={{ paddingTop: '10px' }} product={product} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '0.75rem',
              }}
            >
              <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
                category={category}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default BrowsingScreen
