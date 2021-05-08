import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getSearchProducts = asyncHandler(async (req, res) => {
  const pageSize = 8
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword

  const category = req.query.category || 'all'
  let keywordQuery
  if (category === 'all') {
    keywordQuery = keyword
      ? {
          name: { $regex: req.query.keyword, $options: 'i' },
        }
      : {}
  } else if (category !== 'all') {
    keywordQuery = keyword
      ? {
          name: { $regex: req.query.keyword, $options: 'i' },
          primaryCategories: { $regex: category, $options: 'i' },
        }
      : { primaryCategories: { $regex: category, $options: 'i' } }
  }
  const count = await Product.countDocuments({ ...keywordQuery })

  const products = await Product.find({ ...keywordQuery })
    .populate('reviews')
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.send({ products, page, pages: Math.ceil(count / pageSize) })
})

export { getSearchProducts }
