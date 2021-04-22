import express from 'express'
<<<<<<< HEAD
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile)

export default router
=======
import asyncHandler from 'express-async-handler'
import userModel from '../models/userModel.js'
const router = express.Router()

// @desc Fetch all users
// @route GET /api/users
// @access Public
router.get('/', asyncHandler(async(req,res)=>{
    const users = await userModel.find({})
    res.send(users)
}))

// @desc Fetch single product
// @route GET /api/users
// @access Public
router.get('/:id', asyncHandler(async(req,res)=>{
    const user = await userModel.findOne({_id: req.params.id})
    if(user){
        res.send(user)
    }
    else {
        res.status(404).send({ message: 'User Not Found.' });
    }
}))


export default router
>>>>>>> f8ffad723b5605177a5ce99b8177002326b881db
