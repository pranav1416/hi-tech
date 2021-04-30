import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
//router.get('/profile', protect, getUserProfile)
//router.route('/profile').put(protect, updateUserProfile)
router.route('/login').post(authUser)

export default router
