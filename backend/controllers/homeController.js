import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate('reviews')

  res.send(products)
})

// @desc Get products top rated
// @route GET /api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate('reviews')
  products.forEach((product) => {
    const avg =
      product.reviews.reduce((sum, review) => sum + review.reviewRating, 0) /
      product.reviews.length
    product.rating = avg
  })
  products.sort((a, b) => {
    if (a.rating >= b.rating) return -1
    else return 1
  })
  // // function findInProd(id) {
  // //   return products.find((prod) => prod._id.equals(id))
  // // }
  const topProducts = products.slice(0, 3)
  res.json(topProducts)
})

// @desc Get products top rated
// @route GET /api/products/top
// @access Public
const getAllTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate('reviews')
  products.forEach((product) => {
    const avg =
      product.reviews.reduce((sum, review) => sum + review.reviewRating, 0) /
      product.reviews.length
    product.rating = avg
  })
  products.sort((a, b) => {
    if (a.rating >= b.rating) return -1
    else return 1
  })
  const topProducts = products.slice(0, 8)
  res.json(topProducts)
})

export { getAllProducts, getTopProducts, getAllTopProducts }
