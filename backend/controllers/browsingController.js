import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getSearchProducts = asyncHandler(async (req, res) => {
  console.log('Search Req: ', req)
  const keyword = req.query.keyword
    ? {
        name: { $regex: req.query.keyword, $options: 'i' },
      }
    : {}
  console.log(keyword)

  const products = await Product.find({ ...keyword }) //.populate('reviews')

  res.send(products)
})

export { getSearchProducts }
