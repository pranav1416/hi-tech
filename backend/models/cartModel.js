const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userID: { type: String, required: true },
    items: [{ 
        productID: { type: String, required: true },
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        }],
    totalValue: { type: Number, required: true },
});

module.exports = Cart = mongoose.model('cart',CartSchema);
