import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_REMOVE_ALL_ITEMS } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  const { imageURLs } = data
  console.log(JSON.stringify(data));
  var image = "";
  if( typeof imageURLs === 'string' ) {
    imageURLs = [ imageURLs ];
  }
  image = imageURLs[0];
  var discountV = 0;
  if (data.prices.isSale == true) {
    discountV = data.prices.amountMax - data.prices.amountMin;
  }
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: image,
      price: data.prices.amountMax,
      countInStock: data.countInStock,
      qty,
      //user: user.data,
      discount: discountV
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeAllFromCart = () => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ALL_ITEMS
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
