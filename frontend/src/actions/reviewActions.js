import axios from 'axios'
import {
    PRODUCT_REVIEW_REQUEST,
    PRODUCT_REVIEW_SUCCESS,
    PRODUCT_REVIEW_FAIL,
  } from '../constants/reviewConstants.js'
export const review = (productId, name, rating, comment) => async (dispatch) => {
    dispatch({
        type: PRODUCT_REVIEW_REQUEST,
        payload: {productId, name, rating, comment},
    });
    console.log(productId)
    console.log(name)
    console.log(rating)
    console.log(comment)
    try {
        const { data } = await axios.post('/api/products/review', {productId, name, rating, comment});
        dispatch({
            type: PRODUCT_REVIEW_SUCCESS,
            payload: data,
          })
    }catch (error) {
        dispatch({
            type: PRODUCT_REVIEW_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
    }
}