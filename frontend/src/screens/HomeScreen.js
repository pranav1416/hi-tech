import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { getHomeData } from '../actions/homeActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ProductCarousel from '../components/ProductCarousel'
import HomeMenu from '../components/HomeMenu'

const HomeScreen = () => {
  const dispatch = useDispatch()

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
    dispatch(getHomeData())
  }, [dispatch])

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
