import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'react-bootstrap'
import { fetchProducts, listAllTopProducts } from '../actions/homeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'
import HomeMenu from '../components/HomeMenu'

const HomeScreen = () => {
  // PRODUCT SCREEN MODULE : [TESTING]
  // Add to cart and quantity select

  const [specialProd, setSpecialProduct] = useState({})
  const [avg, setAvg] = useState(0)

  const dispatch = useDispatch()

  const productFetch = useSelector((state) => state.productFetch)
  const { loading, error, products } = productFetch
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(listAllTopProducts())
  }, [dispatch])

  const getSaleProducts = (products) => {
    const saleProducts = products.filter(
      (product) =>
        product.prices.isSale === true &&
        product.prices.amountMax > product.prices.amountMin
    )
    return saleProducts.slice(0, 8)
  }
  const getSpecialProduct = (products) => {
    const saleProducts = products.filter(
      (product) =>
        product.prices.isSale === true &&
        product.prices.amountMax > product.prices.amountMin
    )
    console.log(saleProducts.length)
    let specialProduct = {}
    if (saleProducts.length) {
      specialProduct = saleProducts.reduce(function (prev, current) {
        return prev.prices.amountMax - prev.prices.amountMin >
          current.prices.amountMax - current.prices.amountMin
          ? prev
          : current
      })
    }
    console.log(specialProduct)
    const average =
      specialProduct.reviews.reduce(
        (sum, review) => sum + review.reviewRating,
        0
      ) / specialProduct.reviews.length
    setAvg(average)
    setSpecialProduct(specialProduct)
    return specialProduct
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row style={{ paddingTop: '0.5rem' }}>
            <ProductCarousel />
          </Row>
          <Row>
            <HomeMenu saleProducts={getSaleProducts(products)} />
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
