import mongoose from "mongoose";

const userHistorySchema = new mongoose.Schema(
  {
    products: [
      {
        productID: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true },
      },
    ],
    userID: { type: String, required: true },
    price: {
      subtotal: { type: Number, required: true },
      tax: { type: Number, required: true },
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

const userHistoryModel = mongoose.model("UserHistory", userHistorySchema);

export default userHistoryModel;