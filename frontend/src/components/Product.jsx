import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        // my-3 gives Margin, p-3 gives padding from all sides, rounded will have rounded endges
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>   
                <strong>
                    {product.name}
                </strong>                
            </Card.Title>    
            </Link>
        </Card>
    )
}

export default Product
