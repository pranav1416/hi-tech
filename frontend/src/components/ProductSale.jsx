// import React from 'react'
// import Card from 'react-bootstrap/Card'
// import {Button,useState} from 'react'
// import { ListGroup, ListGroupItem } from 'reactstrap';
// import {ProductAdd} from '../components/ProductAdd'
// import { Link } from 'react-router-dom'
// import Rating from './Rating'
// import { Carousel, Figure, Container, Row, Col, Image } from 'react-bootstrap'


// const ProductSale = ({product}) => {
//   const avg =
//     product.reviews.reduce((sum, review) => sum + review.reviewRating, 0) /
//     product.reviews.length


//   console.log(product.reviews.rating)

  
// return (
//    <Card className='my-3 p-3 rounded' style = {{backgroundColor: 'red'}}>
//       <Link to={`/product/${product._id}`}>
//         <Card.Img
//           src={product.imageURLs[0]}
//           variant='top'
//           style={{ width: '200px', height: '200px' }}
//         />
//       </Link>
//       <Card.Body>
//         <Link to={`/product/${product._id}`}>
//           <Card.Title as='div'>
//             <strong>{product.name}</strong>
//           </Card.Title>
//         </Link>

//         <Card.Text as='div'>
//           <Rating value={avg} text={product.reviews.length} />
//         </Card.Text>

//         <Card.Text as='h3'>${product.prices.amountMin}</Card.Text>
//       </Card.Body>
//     </Card>
//     )
// }

// export default ProductSale





// // {/* {posts.map((product, key) => (
// // <h2>{product.image}</h2>
// // ))} */}


// import React from 'react'
// import Card from 'react-bootstrap/Card'
// import {Button,useState} from 'react'




// const ProductSale = ({product, match, history}) => {
//   const [qty, setQty] = useState(1)
//   function handleAddToCart() {
//     history.push(`/cart/${match.params.id}?qty=${1}`)
//   }
// return (
//  <>
//    <Card style={{width: '18rem', height: '20rem', backgroundColor :'red'}}>
//   <Card.Body>
//     <Card.Title>Special Offer</Card.Title>
//     <Card.Img variant="top" src="/images/tv1.png" />
//     <Card.Text>
//       Price $$
//     </Card.Text>
//     <Card.Link href="/cart">BUY NOW!!</Card.Link>
//   </Card.Body>
// </Card>
// </>
//     )
// }

// export default ProductSale




import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const ProductSale = ({ product }) => {

  const avg =
    product.reviews.reduce((sum, review) => sum + review.reviewRating, 0) /
    product.reviews.length

  console.log(product.reviews.rating)
  return (
    <Card className='my-3 p-3 rounded' style={{backgroundColor :'red'}}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.imageURLs[0]}
          variant='top'
          style={{ width: '200px', height: '200px' }}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating value={avg} text={product.reviews.length} />
        </Card.Text>

        <Card.Text as='h3'>${product.prices.amountMin}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductSale


