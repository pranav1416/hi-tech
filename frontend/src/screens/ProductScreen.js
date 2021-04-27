import React, { useEffect, useState } from 'react'
//import products from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import ProductImage from '../components/ProductImage'
import ProductDetail from '../components/ProductDetail'
import ProductAdd from '../components/ProductAdd'
import ProductReview from '../components/ProductReview'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Row, Col, Button, Form, Badge } from 'react-bootstrap'

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1)
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProductDetails(props.match.params.id))
    return () => {}
  }, [dispatch, props.match])


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
            <ProductImage product={product} />
          </Col>
          <Col>
            <ProductDetail product={product} />
            <ProductReview product={product} user={userInfo} />
            {/* {
              userInfo ? (
                <ProductReview product={product} user={userInfo}/>
              ) : (
                <h1> Please Login</h1>
              )
            } */}
            
          </Col>
          <Col>
            <ProductAdd {...props} product={product} />
          </Col>
        </Row>
      )}
    </>
  )
}
export default ProductScreen
