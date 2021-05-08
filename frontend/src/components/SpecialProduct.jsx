import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Rating from './Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

const SpecialProduct = ({ specialProduct }) => {
  const homeData = useSelector((state) => state.homeData)
  const { loadingData, error } = homeData

  const avg =
    specialProduct.reviews.reduce(
      (sum, review) => sum + review.reviewRating,
      0
    ) / specialProduct.reviews.length

  return (
    <Row>
      {loadingData ? (
        <Loader />
      ) : error && specialProduct.imageURLs.length === 0 ? (
        <Message variant='danger'>{error}</Message>
      ) : specialProduct ? (
        <Card className='my-1 rounded'>
          <Card.Header className='mx-auto my-auto'>
            <h2>Special Offer!!</h2>
          </Card.Header>
          <Link to={`/product/${specialProduct._id}`}>
            <Card.Img
              src={specialProduct.imageURLs[0]}
              variant='top'
              style={{ width: '97.5%', height: '70%', paddingLeft: '3%' }}
            />
          </Link>

          <Card.Body>
            <Link to={`/product/${specialProduct._id}`}>
              <Card.Title as='div'>
                <strong>{specialProduct.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as='div'>
              <Rating value={avg} text={specialProduct.reviews.length} />
            </Card.Text>

            <Card.Text as='h3'>
              <>
                {specialProduct.prices.amountMax >
                specialProduct.prices.amountMin ? (
                  <p>
                    <del>$ {specialProduct.prices.amountMax} </del> ${' '}
                    {specialProduct.prices.amountMin}
                  </p>
                ) : (
                  <p>$ {specialProduct.prices.amountMin}</p>
                )}
              </>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        'Error'
      )}
    </Row>
  )
}

export default SpecialProduct
