import axios from 'axios'
import {
  BROWSER_FILTER_SEARCH_REQUEST,
  BROWSER_FILTER_SEARCH_SUCCESS,
  BROWSER_FILTER_SEARCH_FAIL,

  BROWSER_SEARCH_REQUEST,
  BROWSER_SEARCH_SUCCESS,
  BROWSER_SEARCH_FAIL,

  BROWSER_FETCH_PRODUCTS_REQUEST,
  BROWSER_FETCH_PRODUCTS_SUCCESS,
  BROWSER_FETCH_PRODUCTS_FAIL,
} from '../constants/browserConstants.js'

export const FetchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: BROWSER_FETCH_PRODUCTS_REQUEST,
    })

    const { data } = await axios.get('/api/products')

    dispatch({
      type: BROWSER_FETCH_PRODUCTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BROWSER_FETCH_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const FilterSearch = () => async (dispatch) => {
  try {
    dispatch({
      type: BROWSER_FILTER_SEARCH_REQUEST,
    })

    const { data } = await axios.get(`/api/products/${product.type}`)

    dispatch({
      type: BROWSER_FILTER_SEARCH_SUCCESS,
      payload: {
        product: data._id,
        name: data.name,
        image: data.imageURLs,
        price: data.prices.amountMin,
        countInStock: data.countInStock,
        weight: data.weight,
        brand: data.brand,
        reviewName: data.reviews.name,
        reviewRating: data.reviews.rating,
        reviewComment: data.reviews.comment,
        description: data.categories,
        productCode: data.upc,
        customQty: data.qty,
      },
    })
  } catch (error) {
    dispatch({
      type: BROWSER_FILTER_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

  export const SearchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: BROWSER_SEARCH_REQUEST,
    })

    const { data } = await axios.get(`/api/products/${product.name}`)

    dispatch({
      type: BROWSER_SEARCH_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: BROWSER_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

