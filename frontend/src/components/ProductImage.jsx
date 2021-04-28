import React from 'react'
import { Figure } from 'react-bootstrap'

const ProductImage = ({ product }) => {
  return (
    <Figure>
      <Figure.Image width={400} height={420} src={product.image} />
      <Figure.Caption>{product.description}</Figure.Caption>
    </Figure>
  )
}

export default ProductImage
