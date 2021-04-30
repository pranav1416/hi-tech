import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate('reviews')

  res.send(products)
})

// @desc Fetch single product
// @route GET /api/products
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id }).populate(
    'reviews'
  )
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product Not Found.' })
  }
})

export { getProductById, getProducts }
