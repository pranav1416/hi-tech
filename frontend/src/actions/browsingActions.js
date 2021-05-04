import axios from 'axios'
import {
  PRODUCT_SEARCH_FAIL,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_SEARCH_SUCCESS,
} from '../constants/browsingConstants'

export const listSearchProducts = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({
      type: PRODUCT_SEARCH_REQUEST,
    })
    console.log(keyword)
    const { data } = await axios.get(
      `/api/search/product?keyword=${keyword}&pageNumber=${pageNumber}`
    )
    dispatch({
      type: PRODUCT_SEARCH_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
