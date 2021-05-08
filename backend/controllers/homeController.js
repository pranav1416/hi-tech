import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate('reviews')

  res.send(products)
})

// @desc Get All home data
// @route GET /api/products/top
// @access Public
const getHomeData = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate('reviews')
  const saleProducts = await Product.find({
    'prices.isSale': true,
  }).populate('reviews')
  const saleProd = await Product.find({
    'prices.isSale': true,
  }).populate('reviews')

  // Sale Products
  const saleProds = saleProd
    .filter((prod) => prod._doc.prices.amountMax > prod._doc.prices.amountMin)
    .slice(0, 8)

  // Product Carousel and Top Rated Products
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
  const topEightProducts = products.slice(0, 8)
  const topThreeProducts = products.slice(0, 3)

  // Special Product
  let specialProduct
  if (saleProducts.length > 0) {
    saleProducts.forEach((product) => {
      product._doc.diff =
        product._doc.prices.amountMax - product._doc.prices.amountMin
    })
    saleProducts.sort((a, b) => {
      if (a._doc.diff >= b._doc.diff) return -1
      else return 1
    })
    specialProduct = saleProducts[5]._doc
  }
  specialProduct.avg = specialProduct.rating

  // OUTPUT
  res.json({ topEightProducts, topThreeProducts, specialProduct, saleProds })
})

export { getAllProducts, getHomeData }
