import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import { getSearchProducts } from '../controllers/browsingController.js'

const router = express.Router()

router.get('/product', getSearchProducts)

export default router
