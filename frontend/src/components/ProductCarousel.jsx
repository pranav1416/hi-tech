import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'

const ProductCarousel = ({ carProducts }) => {
  const homeData = useSelector((state) => state.homeData)
  const { loadingData, error } = homeData

  return loadingData ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel
      pause='hover'
      className='bg-dark'
      style={{
        width: '100%',
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)',
      }}
    >
      {carProducts.map((product) => (
        <Carousel.Item
          key={product._id}
          style={{
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)',
            zIndex: '4',
          }}
        >
          <Link to={`/product/${product._id}`}>
            <Image
              className='d-block mx-auto'
              src={product.imageURLs[0]}
              alt={product.name}
              style={{
                position: 'relative',
                width: '450px',
                height: '300px',
              }}
            />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} ({product.prices.amountMin})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ProductCarousel
