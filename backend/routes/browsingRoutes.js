import express from 'express'
import { getSearchProducts } from '../controllers/browsingController.js'

const router = express.Router()

router.get('/product', getSearchProducts)

export default router
