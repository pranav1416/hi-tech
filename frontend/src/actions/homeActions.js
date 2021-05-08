import axios from 'axios'
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  HOME_DATA_REQUEST,
  HOME_DATA_SUCCESS,
  HOME_DATA_FAIL,
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

export const getHomeData = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_DATA_REQUEST,
    })

    const { data } = await axios.get('/api/home/data')

    dispatch({
      type: HOME_DATA_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: HOME_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
