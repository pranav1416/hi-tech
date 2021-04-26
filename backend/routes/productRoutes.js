import express from 'express'
import expressAsyncHandler from 'express-async-handler'
const router = express.Router()
import {
  getProductById,
  getProducts,
} from '../controllers/productController.js'
import Review from '../models/reviewModel.js'
import Product from '../models/productModel.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

router.post('/review', expressAsyncHandler(async(req,res)=>{
    const review = new Review ({
      reviewName: req.body.name,
      reviewRating: req.body.rating,
      reviewComment: req.body.comment
    })
    
    const createdReview = await review.save()

    const updatedProduct = await Product.update({
      _id: req.body.productId,
      // name: req.body.name,
      // rating: req.body.rating,
      // comment: req.body.comment
    }, {
      $push: {
        reviews: createdReview._id
      }
    });
    console.log(updatedProduct)

    res.send(updatedProduct)
        
}))

export default router
