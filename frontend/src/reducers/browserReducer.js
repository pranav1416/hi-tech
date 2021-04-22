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

  export const productfetchReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case BROWSER_FETCH_PRODUCTS_REQUEST:
        return { loading: true, products: [] }
      case BROWSER_FETCH_PRODUCTS_SUCCESS:
        return { loading: false, products: action.payload }
      case BROWSER_FETCH_PRODUCTS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}
  
  export const FilterSearchReducer = (
    state = state = { products: [] },action) => {
    switch (action.type) {
      case  BROWSER_FILTER_SEARCH_REQUEST:
        return { loading: true, ...state }
      case  BROWSER_FILTER_SEARCH_SUCCESS:
        return { loading: false, product: action.payload }
      case  BROWSER_FILTER_SEARCH_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
  
    }
}
    export const SearchProductReducer = (
        state = { products: [] },action) => {
        switch (action.type) {
          case BROWSER_SEARCH_REQUEST:
            const existItem = state.browserItems.find((x) => x.product === item.product)
            if (existItem) {
                return {
                    loading: true, ...state 
                       }
                    }
          case BROWSER_SEARCH_SUCCESS:
            return { loading: false, product: action.payload }
          case BROWSER_SEARCH_FAIL:
            return { loading: false, error: action.payload }
          default:
            return state
        }

  }
  