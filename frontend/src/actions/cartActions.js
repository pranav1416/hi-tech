import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id, qty, userID) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
<<<<<<< HEAD
  const { imageURLs } = data
  const image = imageURLs.split(',')[0]
=======
  const user = await axios.get(`/api/users/${userID}`)

>>>>>>> f8ffad723b5605177a5ce99b8177002326b881db
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
<<<<<<< HEAD
      image: image,
      price: data.prices.amountMin,
=======
      image: data.image,
      price: data.
      prices.amountMin,
>>>>>>> f8ffad723b5605177a5ce99b8177002326b881db
      countInStock: data.countInStock,
      qty,
      user: user.data
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
