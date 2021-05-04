import axios from 'axios'
import {
  PRODUCT_SALE_REQUEST,
  PRODUCT_SALE_SUCCESS,
  PRODUCT_SALE_FAIL,
  BANNER_ADD_REQUEST,
  BANNER_ADD_SUCCESS,
  BANNER_ADD_FAIL,
  DROPDOWN_REQUEST,
  DROPDOWN_SUCCESS,
  DROPDOWN_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from '../constants/homeConstants.js'

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_PRODUCTS_REQUEST,
    })

    const { data } = await axios.get('/api/home')

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listTopProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_TOP_REQUEST,
    })

    const { data } = await axios.get('/api/products/top')
    dispatch({
      type: PRODUCT_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// export const ProductOnSale = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: PRODUCT_SALE_REQUEST,
//     })

//     const { data } = await axios.get(`/api/products/${product.isSale}`)

//     dispatch({
//       type: PRODUCT_SALE_SUCCESS,
//       payload: {
//         product: data._id,
//         name: data.name,
//         image: data.imageURLs,
//         price: data.prices.amountMin,
//         countInStock: data.countInStock,
//         weight: data.weight,
//         brand: data.brand,
//         reviewName: data.reviews.name,
//         reviewRating: data.reviews.rating,
//         reviewComment: data.reviews.comment,
//         description: data.categories,
//         productCode: data.upc,
//         customQty: data.qty,
//       },
//     })
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_SALE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }

// export const Banner = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: BANNER_ADD_REQUEST,
//     })

//     const { data } = await axios.get(`/api/products/${product.image}`)

//     dispatch({
//       type: BANNER_ADD_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: BANNER_ADD_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
// export const Dropdown = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: DROPDOWN_REQUEST,
//     })

//     const { data } = await axios.get(`/api/products/${product.categories}`)

//     dispatch({
//       type: DROPDOWN_SUCCESS,
//       payload: data,
//     })
//   } catch (error) {
//     dispatch({
//       type: DROPDOWN_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     })
//   }
// }
