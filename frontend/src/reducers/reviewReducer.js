import {
    PRODUCT_REVIEW_FAIL,
    PRODUCT_REVIEW_REQUEST,
    PRODUCT_REVIEW_SUCCESS,
  } from '../constants/reviewConstants.js'
export const productReviewReducer = (
    state = {},
    action
  ) => {
    switch (action.type) {
      case PRODUCT_REVIEW_REQUEST:
        return { loading: true }
      case PRODUCT_REVIEW_SUCCESS:
        return { loading: false, success: true, review: action.payload }
      case PRODUCT_REVIEW_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }