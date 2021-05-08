import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password, address } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    address,
    password,
    isAdmin: false,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById({ _id: req.user._id })
  if (user) {
    let updatedUser
    switch (req.body.action) {
      case 'name':
        if (req.body.firstName && req.body.lastName) {
          updatedUser = await User.updateOne(
            { _id: user._id },
            {
              $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
              },
            }
          )
          res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
          })
        } else {
          throw new Error('Update Failed')
        }
        break
      case 'email':
        if (req.body.email) {
          updatedUser = await User.updateOne(
            { _id: user._id },
            {
              $set: {
                email: req.body.email,
              },
            }
          )
          res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
          })
        } else {
          throw new Error('Update Failed')
        }
        break
      case 'password':
        if (req.body.password) {
          updatedUser = await User.updateOne(
            { _id: user._id },
            {
              $set: {
                password: req.body.password,
              },
            }
          )
          res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
          })
        } else {
          throw new Error('Update Failed')
        }
        break
      case 'address':
        if (req.body.address) {
          updatedUser = await User.updateOne(
            { _id: user._id },
            {
              $set: {
                'address.0': req.body.address,
              },
            }
          )
          res.json({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
          })
        } else {
          throw new Error('Update Failed')
        }
        break
      default:
        throw new Error('Invalid Update profile action')
    }
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { authUser, getUserProfile, registerUser, updateUserProfile }
