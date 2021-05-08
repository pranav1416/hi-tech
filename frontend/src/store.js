import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import { productReviewReducer } from './reducers/reviewReducer'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducer'
import { searchProductsReducer } from './reducers/browsingReducer'
import { productFetchReducer, homeDataReducer } from './reducers/homeReducer'

const reducer = combineReducers({
  productFetch: productFetchReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  productReview: productReviewReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  searchProducts: searchProductsReducer,
  homeData: homeDataReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk, ...middleware))
)

export default store
