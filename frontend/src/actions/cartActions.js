import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVE_ALL_ITEMS,
} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  var discountV = 0
  if (data.prices.isSale === true) {
    discountV = data.prices.amountMax - data.prices.amountMin
  }

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      price: data.prices.amountMax,
      image: data.imageURLs[0],
      countInStock: data.countInStock,
      qty,
      discount: discountV,
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
    type: CART_REMOVE_ALL_ITEMS,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
