import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import { getSearchProducts } from '../controllers/browsingController.js'

const router = express.Router()

router.get(
  '/product',
  asyncHandler(async (req, res) => {
    //console.log('Search Req: ', req.query.keyword)
    const keyword = req.query.keyword
      ? {
          name: { $regex: req.query.keyword, $options: 'i' },
        }
      : {}
    //console.log(keyword)

    const products = await Product.find({ ...keyword }) //.populate('reviews')

    res.send(products)
  })
)

export default router
