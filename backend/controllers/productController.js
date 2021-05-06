import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
// import Temp from '../models/tempModel.js'
// import fs from 'fs'
// import { createRequire } from 'module'

// const require = createRequire(import.meta.url)
// const data = []

// const writeToFile = (data) => {
//   fs.writeFile('data.json', JSON.stringify(data), (err) => {
//     if (err) {
//       console.error(err)
//       return
//     }
//     console.log('File has been created')
//   })
// }
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).populate('reviews')

  res.send(products)
})

// @desc Fetch single product
// @route GET /api/products
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id }).populate(
    'reviews'
  )
  if (product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product Not Found.' })
  }
})

// const findInvalidUrl = (products) => {
//   products.forEach((doc) => {
//     let invalidUrls = { _id: doc._id, id: doc.id, urls: [] }
//     doc.imageURLs.forEach((imgUrl) => {
//       let http = new XMLHttpRequest()
//       http.open('GET', imgUrl, false)
//       http.send()
//       if (http.status !== 200) {
//         invalidUrls.urls.push(imgUrl)
//       }
//     })
//     if (invalidUrls.id) data.push(invalidUrls)
//   })
//   tempFunction()
// }

// // @desc EDIT DB
// // @route GET /api/products/editdb
// // @access RESTRICTED/TEMPORARY
// const editProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({})
//   findInvalidUrl(products)

//   tempFunction()
//   res.send('Done')
// })

// const tempFunction = () => {
//   console.log(data)
//   fs.writeFile('data.json', JSON.stringify(data), (err) => {
//     if (err) {
//       console.error(err)
//       res.send('ERROR')
//     }
//     console.log('File has been created')
//     res.status(200)
//     res.send('True')
//   })
// }
export {
  getProductById,
  getProducts,
  // editProducts,
  // tempFunction,
}
