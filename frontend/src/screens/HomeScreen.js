import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import {
  fetchProducts,
  getHomeData,
  listAllTopProducts,
  getSpecialProduct,
} from '../actions/homeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'
import HomeMenu from '../components/HomeMenu'

const HomeScreen = () => {
  // PRODUCT SCREEN MODULE : [TESTING]
  // Add to cart and quantity select

  const dispatch = useDispatch()

  // const productFetch = useSelector((state) => state.productFetch)
  // const { loading, error, products } = productFetch

  const homeData = useSelector((state) => state.homeData)
  const {
    loadingData,
    error,
    specialProduct,
    productTopEight,
    productTopThree,
    saleProds,
  } = homeData

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(getHomeData())
    // dispatch(listAllTopProducts())
    // dispatch(getSpecialProduct())
  }, [dispatch])

  // const getSaleProducts = (products) => {
  //   const saleProducts = products.filter(
  //     (product) =>
  //       product.prices.isSale === true &&
  //       product.prices.amountMax > product.prices.amountMin
  //   )
  //   return saleProducts.slice(0, 8)
  // }
  // const getSpecialProduct = (products) => {
  //   const saleProducts = products.filter(
  //     (product) =>
  //       product.prices.isSale === true &&
  //       product.prices.amountMax > product.prices.amountMin
  //   )
  //   console.log(saleProducts.length)
  //   let specialProduct = {}
  //   if (saleProducts.length) {
  //     specialProduct = saleProducts.reduce(function (prev, current) {
  //       return prev.prices.amountMax - prev.prices.amountMin >
  //         current.prices.amountMax - current.prices.amountMin
  //         ? prev
  //         : current
  //     })
  //   }
  //   console.log(specialProduct)
  //   const average =
  //     specialProduct.reviews.reduce(
  //       (sum, review) => sum + review.reviewRating,
  //       0
  //     ) / specialProduct.reviews.length
  //   setAvg(average)
  //   setSpecialProduct(specialProduct)
  //   return specialProduct
  // }
  return (
    <>
      <Row>
        <Col>
          {loadingData ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <Row>
                <ProductCarousel carProducts={productTopThree} />
              </Row>
              <Row>
                <HomeMenu
                  specialProduct={specialProduct}
                  saleProducts={saleProds}
                  topProducts={productTopEight}
                />
              </Row>
            </>
          )}
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
