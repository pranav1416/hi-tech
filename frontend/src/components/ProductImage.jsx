import React from 'react'
import { Carousel, Figure, Container, Row, Col, Image } from 'react-bootstrap'
import "./ProductImage.css";

const ProductImage = ({ product }) => {
  return (

    // <Figure>
    //   <Figure.Image width={400} height={420} src={product.image} />
    //   <Figure.Caption>{product.description}</Figure.Caption>
    // </Figure>
            
    <Carousel className="top-content">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={product.image}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={product.image1}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={product.image2}
            alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={product.image3}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={product.image4}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
        
  )
}


export default ProductImage
