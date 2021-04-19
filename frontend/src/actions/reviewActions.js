// import axios from 'axios'
// import {
//     PRODUCT_REVIEW_REQUEST,
//     PRODUCT_REVIEW_SUCCESS,
//     PRODUCT_REVIEW_FAIL,
//   } from '../constants/reviewConstants.js'
// export const writereview = (name, rating, review) => async (dispatch) => {
//     dispatch({
//         type: PRODUCT_REVIEW_REQUEST,
//         payload: {name, rating, review},
//     });
//     try {
//         const { data } = await axios.post('/api/products/review', {name, rating, review});
//         dispatch({
//             type: PRODUCT_REVIEW_SUCCESS,
//             payload: {...data},
//           })
//     }catch (error) {
//         dispatch({
//             type: PRODUCT_REVIEW_FAIL,
//             payload:
//               error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message,
//           })
//     }
// }