import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  const avg =
    product.reviews.reduce((sum, review) => sum + review.reviewRating, 0) /
    product.reviews.length

  return (
    <Card className='my-2 rounded' style={{ width: '13rem', height: '18rem' }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.imageURLs[0]}
          variant='top'
          style={{
            paddingTop: '0.5rem',
            paddingLeft: '0.5rem',
            width: '12.5rem',
            height: '11rem',
          }}
        />
      </Link>

      <Card.Body
        style={{ paddingTop: '0.5rem', paddingLeft: '0.75rem', width: '100%' }}
      >
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' style={{ width: '100%', height: '2rem' }}>
            <strong>
              {product.name.length > 30
                ? product.name.slice(0, 30) + '...'
                : product.name}
            </strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={avg} text={product.reviews.length} />
        </Card.Text>

        <Card.Text as='h3'>
          <>
            {product.prices.amountMax > product.prices.amountMin ? (
              <>
                <p>
                  <del>
                    <small>${product.prices.amountMax}</small>
                  </del>{' '}
                  ${product.prices.amountMin}
                </p>
              </>
            ) : (
              <p>${product.prices.amountMin}</p>
            )}
          </>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
