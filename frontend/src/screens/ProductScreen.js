import React, { useEffect, useState } from 'react'
//import products from '../products'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1)
  // Reducer code with request
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProductDetails(props.match.params.id))
    return () => {}
  }, [dispatch, props.match])

  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty)
  }

  console.log(props.match.params.id)
  //const product = products.products.find((x) => x._id === props.match.params.id)
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className='details'>
          <div classname='details-image'>
            <img
              src={product.image}
              variant='top'
              style={{ width: '200px', height: '200px' }}
              alt='product'
            ></img>
          </div>
          <div classname='details-info'>
            <ul>
              <li>
                <h4 style={detailStyle}>{product.name}</h4>
              </li>
              <li>{product.rating} Stars</li>
              <li>
                Brand: {product.brand} / Weight: {product.weight}
              </li>
            </ul>
          </div>
          <div className='details-action'>
            <ul>
              <li>price: {product.price}</li>
              <li>
                QTY:{' '}
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value)
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {' '}
                      {x + 1}{' '}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <button onClick={handleAddToCart}>Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

const detailStyle = {
  font: 40,
}

export default ProductScreen
