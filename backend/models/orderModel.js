import mongoose from 'mongoose';
const paymentSchema = {
  paymentMethod: { type: String, required: true }
};

const contactSchema = {
  email: { type: String, required: true }
};

const shippingSchema = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
};


const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
});

const promoteSchema = {
  promoteCode: { type: String, required: true }
};

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  payment: paymentSchema,
  contact: contactSchema,
  promoteCode: promoteSchema,
  itemsPrice: { type: Number },
  taxPrice: { type: Number },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
}, {
  timestamps: true
});

const orderModel = mongoose.model('Order', orderSchema);
export default checkoutModel;