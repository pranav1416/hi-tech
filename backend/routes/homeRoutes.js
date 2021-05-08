import express from 'express'
import { getHomeData } from '../controllers/homeController.js'
const router = express.Router()

// @desc Fetch all home data
// @route GET /api/home/data
// @access Public
router.get('/data', getHomeData)

export default router
