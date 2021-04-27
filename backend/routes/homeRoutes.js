import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
const router = express.Router()

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(async(req,res)=>{
    const products = await Product.find({})

    res.send(products)
}))


router.get('/:Sale', asyncHandler(async(req,res)=>{
    const product = await Product.findOne({})
    if(product){
        res.send(product.isSale)
    }
    else {
        res.status(404).send({ message: 'Product Not Found.' });
    }


}))


export default router