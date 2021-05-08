import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  HOME_DATA_REQUEST,
  HOME_DATA_FAIL,
  HOME_DATA_SUCCESS,
} from '../constants/homeConstants.js'

export const productFetchReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { loading: true, products: [] }
    case FETCH_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }
    case FETCH_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const homeDataReducer = (
  state = {
    specialProduct: {},
    productTopEight: [],
    productTopThree: [],
    saleProds: [],
  },
  action
) => {
  switch (action.type) {
    case HOME_DATA_REQUEST:
      return { loadingData: true }
    case HOME_DATA_SUCCESS:
      return {
        loadingData: false,
        specialProduct: action.payload.specialProduct,
        productTopEight: action.payload.topEightProducts,
        productTopThree: action.payload.topThreeProducts,
        saleProds: action.payload.saleProds,
      }
    case HOME_DATA_FAIL:
      return { loadingData: false, error: action.payload }
    default:
      return state
  }
}
