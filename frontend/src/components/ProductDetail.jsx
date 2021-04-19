import React from 'react'
import { ListGroup } from 'react-bootstrap'

const ProductDetail = ({ product }) => {
    return (
        <ListGroup>
            <ListGroup.Item><h1> {product.name} </h1></ListGroup.Item>
            <ListGroup.Item> Brand: {product.brand} </ListGroup.Item>
            <ListGroup.Item> Weight: {product.weight} </ListGroup.Item>
            <ListGroup.Item> Product Code: {product.productCode} </ListGroup.Item>
        </ListGroup>
    )
}
export default ProductDetail
