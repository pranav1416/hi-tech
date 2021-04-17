import React, { useEffect, useState } from 'react'
//import products from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import AddToCart from '../components/AddToCart'

function ProductScreen(props) {
  // Add to Cart
  const [qty, setQty] = useState(1)
  // Reducer code with request
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(props.match.params.id))
  }, [dispatch, props.match])

  console.log(props.match.params.id)
  //const product = products.products.find((x) => x._id === props.match.params.id)
  return (
    <div className='details'>
      <div classname='details-image'>
        <img src={product.imageURLs} alt='product'></img>
      </div>
      <div classname='details-info'>
        <ul>
          <li>
            <h4 style={detailStyle}>{product.name}</h4>
          </li>
          <li>{product.rating} Stars</li>
          <li>
            Description:
            <ul>{product.description}</ul>
          </li>
        </ul>
      </div>
      <div className='details-action'>
        <ul>
          <li>price: {product.price}</li>
          <li>
            QTY:{' '}
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </li>
          <li>
            <AddToCart maxCount={product.countInStock} />
          </li>
        </ul>
      </div>
    </div>
  )
}

const detailStyle = {
  font: 40,
}

export default ProductScreen
