import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import { getAllProducts } from '../controllers/homeController.js'
const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', getAllProducts)

// router.get(
//   '/:Sale',
//   asyncHandler(async (req, res) => {
//     const product = await Product.findOne({})
//     if (product) {
//       res.send(product.isSale)
//     } else {
//       res.status(404).send({ message: 'Product Not Found.' })
//     }
//   })
// )

export default router
