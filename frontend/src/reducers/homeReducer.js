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
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_REQUEST,
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

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// export const ProductSaleReducer = (
//   state = (state = { products: { isSale: [] } }),
//   action
// ) => {
//   switch (action.type) {
//     case PRODUCT_SALE_REQUEST:
//       return { loading: true, ...state }
//     case PRODUCT_SALE_SUCCESS:
//       return { loading: false, product: action.payload }
//     case PRODUCT_SALE_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
// export const BannerReducer = (state = (state = { products: [] }), action) => {
//   switch (action.type) {
//     case BANNER_ADD_REQUEST:
//       return { loading: true, ...state }
//     case BANNER_ADD_SUCCESS:
//       return { loading: false, product: action.payload }
//     case BANNER_ADD_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }

// export const DropdownReducer = (
//   state = (state = { products: { categories: [] } }),
//   action
// ) => {
//   switch (action.type) {
//     case DROPDOWN_REQUEST:
//       return { loading: true, ...state }
//     case DROPDOWN_SUCCESS:
//       return { loading: false, product: action.payload }
//     case DROPDOWN_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }
// }
