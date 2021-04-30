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


// @desc Fetch single product
// @route GET /api/products
// @access Public
router.get('/:name', asyncHandler(async(req,res)=>{
    // const product = products.products.find((x) => x._id === props.match.params.id)
    const product = await Product.findOne({_name: req.params.name})
    if(product){
        res.send(product)
    }
    else {
        res.status(404).send({ message: 'Product Not Found.' });
    }
}))
router.get('/:Laptops', asyncHandler(async(req,res)=>{
    // const product = products.products.find((x) => x._id === props.match.params.id)
    const product = await Product.findOne({_type: req.params.type})
    if(product){
        res.send(product)
    }
    else {
        res.status(404).send({ message: 'Product Not Found.' });
    }
}))
router.get('/:Mobiles', asyncHandler(async(req,res)=>{
    // const product = products.products.find((x) => x._id === props.match.params.id)
    const product = await Product.findOne({_type: req.params.type})
    if(product){
        res.send(product)
    }
    else {
        res.status(404).send({ message: 'Product Not Found.' });
    }
}))
router.get('/:Home Automation', asyncHandler(async(req,res)=>{
    // const product = products.products.find((x) => x._id === props.match.params.id)
    const product = await Product.findOne({_type: req.params.type})
    if(product){
        res.send(product)
    }
    else {
        res.status(404).send({ message: 'Product Not Found.' });
    }
}))
router.get('/:Office Tech', asyncHandler(async(req,res)=>{
    // const product = products.products.find((x) => x._id === props.match.params.id)
    const product = await Product.findOne({_type: req.params.type})
    if(product){
        res.send(product)
    }
    else {
        res.status(404).send({ message: 'Product Not Found.' });
    }
}))


export default router