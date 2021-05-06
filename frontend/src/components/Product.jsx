import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Text } from 'react-bootstrap'
import Rating from './Rating'
import { composeWithDevTools } from 'redux-devtools-extension'
import { review } from '../actions/reviewActions'
import { PRODUCT_REVIEW_REQUEST } from '../constants/reviewConstants'

// function average(nums) {
//   return nums.reduce((acc, cur) => acc + cur.rating) / nums.length;
// }

// const average = function(nums){
//   return nums.reduce(function(acc, cur) {
//     return acc + cur / nums.length;
//   }, 0);
// };

// const sum = function(items){
//   return items.reduce( function(a, b){
//       return a + b['price'] * b['qty'];
//   }, 0);
// };

// const sum = function(items){
//   return items.reduce( function(a, b){
//       return (a + b['rating']);
//   }, 0);
// };

const Product = ({ product }) => {
  // let subTotal = product.reviews.reduce( (acc, review) => acc + review.rating, 0);
  // let subTotal = sum(product.reviews);
  // let average = subTotal / product.reviews.length;

  const avg =
    product.reviews.reduce((sum, review) => sum + review.reviewRating, 0) /
    product.reviews.length

  //console.log(product)
  // console.log(product.reviews.rating)

  //const productImages = product.imageURLs.split(',')
  // console.log(productImages)
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
