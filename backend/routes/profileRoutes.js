import express from 'express'
const router = express.Router()
import {
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(protect, getUserProfile)
router.route('/').put(protect, updateUserProfile)

export default router
