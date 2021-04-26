import mongoose from "mongoose";

const orderHistorySchema = new mongoose.Schema(
  {
    products: [
      {
        productID: { type: String, required: true },
        image: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
      },
    ],
    userID: { type: String, required: true },
    price: {
      subTotal: { type: Number, required: true },
      tax: { type: Number, required: true },
      discount: { type: Number, required: true },
      total: { type: Number, required: true },
    },
    shipping: {
        address: {
            addr1: { type: String, required: true},
            addr2: { type: String, required: true},
            city: { type: String, required: true},
            state : { type: String, required: true},
            zipcode: { type: Number, required: true}
        },
        deliveryDate: {type: Date},
        trackingID: {type: String},
        carrier: {type: String}
    },
    payment: {
        method: {type: String},
        cardDetails: {type: String}
    },
    orderDate: {type: Date, required: true}
  },
  {
    timestamps: true,
  }
);

const orderHistoryModel = mongoose.model("orderHistory", orderHistorySchema);

export default orderHistoryModel;