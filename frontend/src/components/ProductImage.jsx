import React from 'react'
import { Carousel, Figure, Container, Row, Col, Image } from 'react-bootstrap'

const ProductImage = ({ product }) => {
  return (

    // <Figure>
    //   <Figure.Image width={400} height={420} src={product.image} />
    //   <Figure.Caption>{product.description}</Figure.Caption>
    // </Figure>

    // <Carousel>
    // {product.imageURLs?.map((images) => (
    //     <Carousel.Item>
    //         <img
    //         className="d-block w-100"
    //         src={images.image}
    //         alt="Third slide"
    //         />

    //         <Carousel.Caption>
    //         <h3>Third slide label</h3>
    //         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    //         </Carousel.Caption>
    //     </Carousel.Item>
    // ))}
    // </Carousel>

    <Figure>
        <Figure.Image width={400} height={420} src={product.image} />
        <Figure.Caption>{product.description}</Figure.Caption>
    </Figure>

    // <Container>
    //     <Row>
    //         <Col xs={6} md={4}>
    //         <Image src={product.image[0]} rounded />
    //         </Col>
    //         <Col xs={6} md={4}>
    //         <Image src={product.image[1]} roundedCircle />
    //         </Col>
    //         <Col xs={6} md={4}>
    //         <Image src={product.image[2]} thumbnail />
    //         </Col>
    //     </Row>
    // </Container>
            
    // <Carousel>
    //     <Carousel.Item>
    //         <img
    //         className="d-block w-100"
    //         src={product.image[0]}
    //         alt="First slide"
    //         />
    //     </Carousel.Item>
    //     <Carousel.Item>
    //         <img
    //         className="d-block w-100"
    //         src={product.image[1]}
    //         alt="Second slide"
    //         />

    //     </Carousel.Item>
    //     <Carousel.Item>
    //         <img
    //         className="d-block w-100"
    //         src={product.image[2]}
    //         alt="Third slide"
    //         />
    //     </Carousel.Item>
    // </Carousel>
        
  )
}

export default ProductImage
