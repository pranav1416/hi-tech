import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id, qty, userID) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)
  const user = await axios.get(`/api/users/${userID}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.
      prices.amountMin,
      countInStock: data.countInStock,
      qty,
      user: user.data
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
