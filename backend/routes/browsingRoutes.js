import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { getSearchProducts } from '../controllers/browsingController.js'

const router = express.Router()

router.route('/product', getSearchProducts)

export default router
