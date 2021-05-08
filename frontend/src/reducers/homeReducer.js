import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  PRODUCT_TOP_FAIL,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_REQUEST,
  PRODUCT_ALL_TOP_REQUEST,
  PRODUCT_ALL_TOP_SUCCESS,
  PRODUCT_ALL_TOP_FAIL,
  PRODUCT_SPECIAL_REQUEST,
  PRODUCT_SPECIAL_SUCCESS,
  PRODUCT_SPECIAL_FAIL,
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

export const productTopRatedReducer = (
  state = { productTopThree: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, productTopThree: [] }
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, productTopThree: action.payload }
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productAllTopRatedReducer = (
  state = { productTopEight: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_ALL_TOP_REQUEST:
      return { loading: true, productTopEight: [] }
    case PRODUCT_ALL_TOP_SUCCESS:
      return { loading: false, productTopEight: action.payload }
    case PRODUCT_ALL_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productSpecialReducer = (
  state = { specialProduct: {} },
  action
) => {
  switch (action.type) {
    case PRODUCT_SPECIAL_REQUEST:
      return { loadingSpecial: true }
    case PRODUCT_SPECIAL_SUCCESS:
      return { loadingSpecial: false, specialProduct: action.payload }
    case PRODUCT_SPECIAL_FAIL:
      return { loadingSpecial: false, error: action.payload }
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
