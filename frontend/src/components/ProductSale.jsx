import React from 'react'
import Card from 'react-bootstrap/Card'
import {Button,useState} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import {ProductAdd} from '../components/ProductAdd'
import { Link } from 'react-router-dom'
import Rating from './Rating'


const ProductSale = ({product, match, history}) => {
  const [qty, setQty] = useState(1)
  function handleAddToCart() {
    history.push(`/cart/${match.params.id}?qty=${1}`)
  }
return (
 <>
   <Card style={{width: '18rem', height: '20rem', backgroundColor :'red'}}>
  <Card.Body>
    <Card.Title>Special Offer</Card.Title>
    <Card.Img variant="top" src="/images/tv1.png" />
    <Card.Text>
      Price $$
    </Card.Text>
    <Card.Link href="/cart">BUY NOW!!</Card.Link>
  </Card.Body>
</Card>
</>
    )
}

export default ProductSale