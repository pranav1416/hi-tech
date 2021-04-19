import React, { useEffect, useState } from 'react'
//import products from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import ProductImage from '../components/ProductImage';
import ProductDetail from '../components/ProductDetail';
import ProductAdd from '../components/ProductAdd';
import ProductReview from '../components/ProductReview';
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Button, Form, Badge } from 'react-bootstrap'

const ProductScreen = (props) => {
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProductDetails(props.match.params.id))
    return () => {
      
    }
  }, [dispatch, props.match])

const handleAddToCart = () => {
  //TODO - Add userID from login context
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty + '&userID=607cb3b23b970207bdbf419e');
  };

  console.log(props.match.params.id)
  //const product = products.products.find((x) => x._id === props.match.params.id)
  return (
    <>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <Row>
        <Col>
          <ProductImage product = {product}/>
        </Col>
        <Col>
          <ProductDetail product = {product}/>
          <ProductReview product = {product}/>
        </Col>
        <Col>
          <ProductAdd product = {product}/>
        </Col>
      </Row>
    )}
    </>
  )
}
export default ProductScreen
