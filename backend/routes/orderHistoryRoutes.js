import express from 'express'
import asyncHandler from 'express-async-handler'
import orderHistoryModel from '../models/orderHistoryModel.js'
import { v4 as uuidv4 } from 'uuid';

//import userModel from '../models/userModel.js'
const router = express.Router()

// @desc Fetch all orderHistories
// @route GET /api/orderHistory
// @access Public
router.get('/', asyncHandler(async(req,res)=>{
    console.log('GET /api/orderHistory');
    //const users = await userModel.find({})
    res.send(200);
}))

// @desc Fetch single product
// @route POST /api/orderHistory
// @access Public
router.post('/', asyncHandler(async(req,res)=>{
    
    
    req.body.orderDate = new Date();
    const date = new Date();
    date.setDate(date.getDate() + 2);
    //Generate tracking id and carrier
    if (!req.body.shipping.trackingID) {
        req.body.shipping.trackingID = uuidv4();
        req.body.shipping.carrier = "USPS";
        req.body.shipping.deliveryDate = date; 
    }

    var myData = new orderHistoryModel(req.body);
    myData.save()
        .then(item => {
            console.log('Sending Response ' + item);
        res.status(200).send(item);
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Unable to place order " + err);
    });
}))


export default router