import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Rating from './Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

const SpecialProduct = ({ specialProd }) => {
  //const [specialProd, setSpecialProduct] = useState({})
  //const [avg, setAvg] = useState(0)

  const productFetch = useSelector((state) => state.productFetch)
  const { loading, error, products } = productFetch
  const avg =
    specialProd.reviews.reduce((sum, review) => sum + review.reviewRating, 0) /
    specialProd.reviews.length
  // useEffect(() => {
  //   const saleProducts = products.filter(
  //     (product) =>
  //       product.prices.isSale === true &&
  //       product.prices.amountMax > product.prices.amountMin
  //   )
  //   let specialProduct = {}
  //   if (saleProducts.length) {
  //     specialProduct = saleProducts.reduce(function (prev, current) {
  //       return prev.prices.amountMax - prev.prices.amountMin >
  //         current.prices.amountMax - current.prices.amountMin
  //         ? prev
  //         : current
  //     })
  //   }
  //   const average =
  //     specialProduct.reviews.reduce(
  //       (sum, review) => sum + review.reviewRating,
  //       0
  //     ) / specialProduct.reviews.length
  //   console.log(specialProduct)
  //   setSpecialProduct(specialProduct)
  //   setAvg(average)
  // }, [specialProd])
  return (
    <>
      {loading && specialProd.imageURLs.length ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Card className='my-5 p-1 rounded' style={{ width: '18rem' }}>
          <Card.Header className='mx-auto my-auto'>
            <h2>Special Offer!!</h2>
          </Card.Header>
          <Link to={`/product/${specialProd._id}`}>
            <Card.Img
              src={specialProd.imageURLs[0]}
              variant='top'
              style={{ paddingLeft: '0rem', width: '16rem', height: '200px' }}
            />
          </Link>

          <Card.Body>
            <Link to={`/product/${specialProd._id}`}>
              <Card.Title as='div'>
                <strong>{specialProd.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as='div'>
              <Rating value={avg} text={specialProd.reviews.length} />
            </Card.Text>

            <Card.Text as='h3'>
              <>
                {specialProd.prices.amountMax > specialProd.prices.amountMin ? (
                  <p>
                    <del>$ {specialProd.prices.amountMax} </del> ${' '}
                    {specialProd.prices.amountMin}
                  </p>
                ) : (
                  <p>$ {specialProd.prices.amountMin}</p>
                )}
              </>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default SpecialProduct
