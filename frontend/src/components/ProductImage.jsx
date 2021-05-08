import React from 'react'
import { Carousel } from 'react-bootstrap'
import './ProductImage.css'

const ProductImage = ({ product }) => {
  return (
    <Carousel className='top-content'>
      <Carousel.Item>
        <img className='d-block w-100' src={product.image} alt={product.name} />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={product.image1}
          alt={product.name}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={product.image2}
          alt={product.name}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={product.image3}
          alt={product.name}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src={product.image4}
          alt={product.name}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductImage
