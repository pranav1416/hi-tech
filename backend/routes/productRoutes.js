import express from 'express'
const router = express.Router()
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

// router.post('/:id', asyncHandler(async(req,res)=>{
//     // const product = products.products.find((x) => x._id === props.match.params.id)
//     const review = await Product.findOne({
//         name: req.reviews.name,
//         rating: req.reviews.rating,
//         comment: req.reviews.comment,
//     })
//     if(review){
//         res.send({
//             name: review.name,
//             rating: review.rating,
//             comment: review.comment,
//         })
//     }
//     else {
//         res.status(404).send({ message: 'Invalid' });
//     }
// }))

export default router
